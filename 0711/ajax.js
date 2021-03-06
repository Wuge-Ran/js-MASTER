function ajax(obj){
    if(!obj.url){
        throw new Error('没有url地址');
    }
    var defaults = {
        method:'get',
        async:true,
        data:{
            key:'haha',
            value:'shdue'
        },
        success:function (){},
        error:function (){}
    };
    for(var attr in obj){
        defaults[attr] = obj[attr];
    }
    var str = '';
    for(var attr in defaults.data){
        str += attr + '=' + defaults.data[attr] + '&';
    }
    str = str.slice(0,-1);
    console.log(str);
    var xhr = new XMLHttpRequest;
    xhr.onload = function (){
        if(xhr.status >= 200 && xhr.status < 400){
            defaults.success(xhr.response);
        }else{
            defaults.error({
                status: xhr.status,
                statusText: xhr.statusText
            })
        }
    }
    
    if(defaults.method === 'get'){
        xhr.open(defaults.method,defaults.url + '?' + str,defaults.async);
        xhr.send();
    }else{
        xhr.open(defaults.method,defaults.url,defaults.async);
        xhr.setRequestHeader( 'Content-Type','application/x-www-form-urlencoded');
        console.log(str);
        xhr.send(str);
    }
    
}