const User = require('../../models/User.js');
const bcrypt = require('../../helpers/bcrypt');

const UserController = {
  async createUser(req, res) {
    try {
      const bodyData = req.body;
      const senhaHash = await bcrypt.generateHash(bodyData.password);
      bodyData.password = senhaHash

      const newUser = await User.create(bodyData);

      return res.status(200).json(newUser);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async getUsers(req, res) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async getUsersById(req, res) {
    try {
      const { user_id } = req.params;
      const user = await User.findById(user_id);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async deleteUser(req, res) {},
};
module.exports = UserController;
