const http = require('http');
const fs = require('fs');
const path = require('path');

let arr = ['.png','.css','.js'];
let obj = {
    '/':'index.html',
    '/img':'img.html',
    '/life':'life.html'
}
const app = http.createServer(function (req,res){
    console.log(req.url);
    let ext = path.extname(req.url);
    if(arr.includes(ext)){//属于静态资源
        let data = readFile('./'+req.url);
        if(data){
            res.end(data)
        }else{
            let noFound = readFile('./views/404.html');
			res.end(noFound);
        }
    }else{
        let data = readFile('./html/'+ obj[req.url]);
        if(data){
            res.end(data)
        }else{
            let noFound = readFile('./views/404.html');
			res.end(noFound);
        }
    }
});
let readFile = (url) =>{
    try{
        let data = fs.readFileSync(url,'utf-8');
        return data
    }catch(e){
        console.log(e);
    }
}
app.listen(4000,function (){
    console.log('服务开启了');
})
