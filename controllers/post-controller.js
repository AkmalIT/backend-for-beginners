const db = require('../db')

class UsersControllers{
    async create(req, res){
        const {title, content, user_id} = req.body
        const user = await db.query("INSERT INTO posts(title, content, user_id) values ($1,$2,$3) RETURNING *", [title, content, user_id])
        return res.status(200).json(user.rows[0])
    }

    async getAll(req, res){
        const user = await db.query('SELECT * FROM posts')
        return res.status(200).json(user.rows)
    }

}

module.exports = new UsersControllers()