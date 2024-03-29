const Cart = require('../../models/Cart');

const CartController = {
  async createCart(req, res) {
    const bodyData = req.body;
    const { user_id } = req.params;

    try {
      const createdCart = await Cart.create({ ...bodyData, username: user_id });
      await createdCart.populate('products').execPopulate();

      return res.status(200).json(createdCart);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async getUserCart(req, res) {
    const { user_id } = req.params;
    try {
      const userCarts = await Cart.find({ username: user_id }).populate(
        'products',
      );

      return res.status(200).json(userCarts);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async getCart(req, res) {
      const {user_id,cart_id} = req.params
    try {

        const cart =  await Cart.findById(cart_id).populate('products')
        return res.status(200).json(cart)
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};
module.exports = CartController;
