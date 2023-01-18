let http = require("http");

const httpServer = http.createServer(handleServer);

const contact = JSON.stringify({ 
                    phone: '18602100000', 
                    email: 'guestcaredominos@jublfood.com' 
                })
function handleServer(req, res) {
  switch(req.url){
    case "/welcome":
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write("Welcome to Dominos!");
        res.end();
        break;

    case "/contact":
        res.writeHead(200, {'Content-type':'application/json'});
        res.end(contact);
        break;
    
    case "/user":
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("I am /user server endpoint")
        break

        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write("PAGE NOT FOUND");
            res.end();
  }
}

httpServer.listen(8081, console.log("The server is listening at 8081"));

module.exports = httpServer;