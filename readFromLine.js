
const readline = require("readline");

let rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout 
})
rl.question("whait is your Name ",(ans)=>{
    console.log(`Hello ${ans}`);
    rl.close();
})

