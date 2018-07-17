const http = require('http');
const express = require('express');
const app = express();

//处理静态资源
app.use(express.static('static'));

app.get('/',(req,res) => {
    res.set('Content-Type', 'text/html;charset=utf-8;')
    res.sendFile(__dirname+'/views/index.html');
})

app.get('/ME',(req,res) =>{
    res.set('Content-Type', 'text/html;charset=utf-8;')
    res.sendFile(__dirname+'/views/ME.html');
})

app.get('/users',(req,res) =>{
    res.status(200);
    let data = [{
        "name":"leo",
        "age":19
    }]
    if(data){
        res.send({
            "statusCode": 0,
            "data":"data"
        });
    }else{
        res.send({
            "statusCode": 1,
            "data":[],
            "message":"没有该数据！"
        });
    }
})

app.get('*',(req,res) =>{
    res.status(403);
    res.sendFile(__dirname+'/views/404.html');
})

app.listen(4001,function (){
    console.log('服务启动成功');
})