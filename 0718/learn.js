const express = require('express');
const app = express();
 
let arr = {
    "a":{
        "name":"hahah"
    },
    "b":{
        "name":"xixixi"
    }
} 

app.get('/api',require('./api/search.js'));
