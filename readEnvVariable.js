let argv = process.argv;
let env = process.env
env.user_key = argv[2];
console.log(`Hello ${env.user_key}`);