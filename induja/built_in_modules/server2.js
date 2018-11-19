const server=require("http");

const ser=server.createServer(function(req,res){
    res.write("hello world");
    res.end();
});

ser.listen(3000);
console.log("listening to port 3000");