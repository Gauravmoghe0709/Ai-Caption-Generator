const express  = require ("express")
const {registercontroller,logincontroller} = require ("../Controllers/User.controller")

const router = express.Router()


router.post("/register",registercontroller)
router.get("/login",logincontroller)

module.exports = router


