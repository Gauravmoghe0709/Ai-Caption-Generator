const postmodel = require("../models/post.model")
const generatecaption = require("../service/Ai.service")
const uploadfile = require ("../service/Storage.service")
const { v4: uuidv4} = require ("uuid")



async function createpost(req, res) {
    const file = req.file
    console.log(file)

    const base64image = new Buffer.from(file.buffer).toString("base64") // convert buffer file to base64image file

    const caption = await generatecaption(base64image)
    const result = await uploadfile(file.buffer,`${uuidv4()}`)


        const post = await postmodel.create({
                caption:caption,
                Image:result.url,
                user: req.user._id
        })

        res.status(201).json({
            message:"Post created...",
            post
        })


}

module.exports = createpost

