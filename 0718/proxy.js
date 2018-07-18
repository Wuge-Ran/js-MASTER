const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(express.static('static'));
app.get('/',function (req,res){
    res.sendFile( __dirname + '/views/proxy.html');
})

let o = {
    target: 'http://m.kugou.com/', //想要访问的服务器
    changeOrigin: true,//是否可跨域
    pathRewrite: {
        '^/api': ''//路径重写
    }
}

app.use('/api',proxy(o));
app.listen(4001,function (){
    console.log('服务器启动了！')
})