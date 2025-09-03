const { GoogleGenAI } = require("@google/genai");


const ai = new GoogleGenAI({});

async function generatecaption(base64ImageFile) {
  
  const contents = [                 // this is array data give to Ai as a input
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];
  const response = await ai.models.generateContent({       //  this is a AI model to use generate a caption in text form
    model: "gemini-2.5-flash",
    contents: contents,
  });
  console.log(response.text);  // getting a response from Ai 

}

module.exports = generatecaption