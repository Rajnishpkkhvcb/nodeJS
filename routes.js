
const fs= require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method= req.method;
    if (url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title><head>');
        res.write('<body><form action="/message" method ="POST"><input type="text"><button type="Submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url==='/message' && method === 'POST' ){
    
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
    
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFile('message.txt','Dummy',()=>{
                res.statusCode=302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        
    
    }
    
    
    
    
    res.setHeader('Content-Type','text/html ')
    res.write('<html>');
    res.write('<head><title>My NOde Js project</title><head>');
    res.write('<body><h1>Hello frome node</h1></body>')
    res.write('</html>');
    res.end();
}


//module.exports=requestHandler;

//module.exports= {
    //handler: requestHandler,
  //  sometext: 'Some text'
//}


module.exports.handler= requestHandler;
module.exports.sometext='Some text'

