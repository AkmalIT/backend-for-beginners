const db = require('../db')

class UsersControllers{
    async create(req, res){
        const {name, surname} = req.body
        const user = await db.query("INSERT INTO person(name, surname) values ($1,$2) RETURNING *", [name, surname])
        return res.status(200).json(user.rows[0])
    }

    async getAll(req, res){
        const user = await db.query('SELECT * FROM person')
        return res.status(200).json(user.rows)
    }

    async getOne(req, res){
        const id = req.params.id 
        const user = await db.query('SELECT * FROM person WHERE id = $1', [id])
        return res.status(200).json(user.rows[0])
    }

    async update(req, res){
        const {id, name, surname} = req.body;
        const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id])
        return res.status(200).json(user.rows[0])
    }

    async delete(req, res){
        const id = req.params.id 
        const user = await db.query('DELETE FROM person WHERE id = $1 RETURNING *', [id])
        return res.status(200).json(user.rows[0])
    }
}

module.exports = new UsersControllers()