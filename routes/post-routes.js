const {Router} = require("express")
const postControllers = require("../controllers/post-controller")
const router = new Router()

router.post('/posts', postControllers.create)
router.get('/posts', postControllers.getAll)

module.exports = router