const middlewares = {

    authenticate(req, res, next) {

        const { authentication } = req.headers
        

        if (!authentication) return res.status(400).json({ message: 'No token' })
/*         if (authentication !== user_id) return res.status(400).json({ message: 'Not allowed' })
 */
        next()

    }

}

module.exports = middlewares