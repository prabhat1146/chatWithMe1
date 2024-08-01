const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const { GoogleGenerativeAI } = require('@google/generative-ai');
dotenv.config()
const port=process.env.PORT || 5000
const app=express();
app.use(express.json())
app.use(cors())



// const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);

app.get('/genAI/response', async (req, res) => {
    try {
      console.log('reached',req.query)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const prompt = req.query.question

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text)
  
      res.json(text);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  

app.listen(port,()=>{
    console.log("Server is running on port: ",port)
})
