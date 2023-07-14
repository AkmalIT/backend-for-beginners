const {Router} = require("express")
const userControllers = require("../controllers/user-controllers")
const router = new Router()

router.post('/users', userControllers.create)
router.get('/users', userControllers.getAll)
router.get('/users/:id', userControllers.getOne)
router.put('/users', userControllers.update)
router.delete('/users/:id', userControllers.delete)

module.exports = router