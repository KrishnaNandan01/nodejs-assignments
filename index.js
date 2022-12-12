
let fs = require("fs");
let http = require("http");


// fs.writeFileSync("index.html","<h1>Hello World</h1>\n<p>This is Krishna...</p>");

// let server = http.createServer((req,res)=>{
//     fs.readFile("index.html",(err,data)=>{
//         if(!err){
//             res.end(data);
//         }
//     })
// });

// server.listen(5000,()=>{
//     console.log("server is up");
// })





async function fun(){
    let p = await new Promise((res,rej)=>{
        fs.writeFile("index.html","<h1>Hello World</h1>\n<p>This is Your Name Krishna...</p>",(err)=>{
            console.log(err);
            res();  
        });
    })
    
    
let server = http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        if(!err){
            res.end(data);
        }
    })
});

server.listen(5000,()=>{
    console.log("server is up");
})
    
}
fun();

