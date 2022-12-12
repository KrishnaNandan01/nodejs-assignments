const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello world!");
})
app.post("/add", (req, res) => {
    //console.log(req.body);
    if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        return res.status(404).json({
            "status" : "failure",
            "message": "Invalid Data Type"
        })
    }
    let sum = Number(req.body.num1) + Number(req.body.num2);
    res.json({
        "status": "success",
        "message": `the sum of given two numbers ${ sum}`
    }
    )
})

app.post("/sub", (req, res) => {
    console.log(req.body);
    if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        return res.status(404).json({
            "status" :"failure",
            "message": "Invalid Data Type"
        })
    }
    let sub = Number(req.body.num1) - Number(req.body.num2);
    res.json({
        "status": "success",
        "message": `the difference of given two numbers ${sub}`
    }
    )
})

app.post("/mul", (req, res) => {
    if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        return res.status(404).json({
            "status" : "failure",
            "message": "Invalid Data Type"
        })
    }
    let mul = Number(req.body.num1) * Number(req.body.num2);
    res.json({
        "status": "success",
        "message": `the product of given two numbers ${mul}`
    }
    )
})

app.post("/div", (req, res) => {
    console.log(req.body);
    if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        return res.status(404).json({
            "status" : "failure",
            "message": "Invalid Data Type"
        })
    }
    if(Number(req.body.num2)==0){
        res.status(404).json({
            "status" : "failure",
            "message" : "can not divide by zero."
        })
    }
    else{

        let div = Number(req.body.num1) / Number(req.body.num2);
        res.json({
            "status": "success",
            "message": `the division of given numbers ${ div}`
        }
        )

    }
    
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;