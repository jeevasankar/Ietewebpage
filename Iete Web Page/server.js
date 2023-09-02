var http=require('http');
function samp(req,res){
    if(req.url=='/')
    {
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("Hello World");
        res.write("<html><body> This is Home page url"+req.url+"</body></html>");
        console.log("Successfull");
    }
}
var server=http.createServer(samp);
server.listen(8000);
console.log("Server Started");