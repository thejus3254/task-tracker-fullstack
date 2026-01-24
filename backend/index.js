const express = require("express");  //main express framework
const cors = require("cors"); //middleware to enable CORS

const app = express();  //main express app
app.use(cors());    //middleware to enable CORS
app.use(express.json());  //middleware to parse JSON bodies

app.get("/health", (req, res) => {    //health check endpoint
  res.json({ status: "ok" });
});

app.get("/greet",(req,res)=> {
    res.json({message:"Hello Thejus!!"});
});

app.post("/echo", (req,res)=>{  //echo endpoint to return the received data
    res.json({
        message: "I received your data",
        youSent: req.body});
})

const PORT = process.env.PORT || 4000;     //set port to environment variable or default to 4000
app.listen(PORT, () => console.log(`API running on ${PORT}`));  //start server