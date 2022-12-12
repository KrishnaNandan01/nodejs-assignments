var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == "/welcome") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(" Welcome to Dominos!");
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write( JSON.stringify(
            {
                "phone": '18602100000',
                "email": 'guestcaredominos@jublfood.com'
            }
        )
           

        );
        res.end();
    }
    else{
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("page Not found");
    }
}
httpServer.listen(8081, () => {
    console.log("my server is up");
})
module.exports = httpServer;