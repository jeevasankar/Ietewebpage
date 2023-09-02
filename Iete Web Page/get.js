var http=require('http');
var url=require('url');
var querystring=require('querystring');
function samp(req,res){
    var path=url.parse(req.url).pathname;
    console.log("Request for path"+path+"is received");
    var query=querystring.parse(req.url).query;
    var name=querystring.parse(query)[username];
    var email=querystring.parse(query)[email];
    res.write("Hello your name is"+name+"and your email is"+email);

}
http.createServer(samp).listen(8000);
console.log("Server STarted");