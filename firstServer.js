var http = require("http");
var server = http.createServer((req,resp)=>{
    resp.end("Hello first Server get created")

});
server.listen(8081, ()=>{
    console.log("server start listening");
})