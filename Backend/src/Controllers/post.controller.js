const postmodel = require("../models/post.model")
const generatecaption = require("../service/Ai.service")



async function createpost(req, res) {
    const file = req.file
    console.log(file)

    const base64image = new Buffer.from(file.buffer).toString("base64") // convert buffer file to base64image file

    const caption = await generatecaption(base64image)

        res.json({
            caption
        })

}

module.exports = createpost

