const express = require ("express")
const multer = require ("multer")
const createpost = require ("../Controllers/post.controller")
const userpostmiddleware = require("../middleware/userpost.middleware")

const router = express.Router()
const upload = multer({storage:multer.memoryStorage()})



router.post("/",userpostmiddleware,
   upload.single("image"),
   createpost

   
   

)


module.exports = router