/*
* t : time 已过时间
* b : begin 起始值
* c : count 总的运动值
* d : duration 持续时间
*
* 曲线方程
*
* http://www.cnblogs.com/bluedream2009/archive/2010/06/19/1760909.html
* */

//Tween.linear();

var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //*正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){//*
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}
//获取，更改元素属性
function oAttr(ele,attr,change){
	if(arguments.length === 2){
		return getComputedStyle(ele)[attr];
	}else{
		ele.style[attr] = change + 'px';
	}
}
//利用曲线方程
function tweenMove(obj){
	if(obj.ele['timer_' + obj.attr]) return;
	var def = {
		ele : null,
		attr : null,
		target : null,
		duration : 3000,
		way : 'linear',
		callback:function (){}
	} 
	for(var key in obj){
		def[key] = obj[key];
	}
	var ele = def.ele,
		attr = def.attr,
	 	begin = parseFloat(oAttr(ele,attr)),
		count = def.target -begin,
		duration = def.duration,
		way = def.way,
		callback = def.callback;
		start = Date.now();

	ele['timer_' + attr] = setInterval(function (){
		var time = Date.now()-start;
		if( time>duration ){
			time = duration;
			clearInterval(ele['timer_' + attr]);
			ele['timer_' + attr] = null;
		}
		var value = Tween[way](time,begin,count,duration);
		oAttr(ele,attr,value);
		if(time === duration){
			callback();
		}
	})
}
//碰撞方法
function collision(hit,hited){
	var hitRect = hit.getBoundingClientRect();
	var hitedRect = hited.getBoundingClientRect();
	if(hitRect.right < hitedRect.left||
	hitRect.bottom < hitedRect.top||
	hitRect.left > hitedRect.right||
	hitRect.top > hitedRect.bottom ){
		return false;
	}else{
		return true;
	}
}
var oFile = document.querySelector('.file');
//框选方法
document.oncontextmenu = function(){
	　　return false;
}
oFile .onmousedown = function (ev){
	if(ev.which !== 1){
		return;
	}
	ev.preventDefault();
	var fileAll = document.querySelectorAll('.file > div');
	var div = document.createElement('div');
	div.classList.add('border');
	document.body.appendChild(div);
	//鼠标在点下去的位置
	var mouseTop = ev.clientY;
	var mouseLeft = ev.clientX;
	document.onmousemove = function (ev){
		ev.preventDefault();
		
		if(Math.abs(mouseTop - ev.clientY) > 10||Math.abs(mouseLeft - ev.clientX) > 10){
			div.style.height = Math.abs(mouseTop - ev.clientY) + 'px';
			div.style.width = Math.abs(mouseLeft - ev.clientX) + 'px';
			div.style.top = Math.min(mouseTop,ev.clientY) + 'px';
			div.style.left = Math.min(mouseLeft,ev.clientX) + 'px';
			for(var i = 0;i < fileAll.length;i++){
				if(collision(div,fileAll[i])){
					fileAll[i].classList.add('checked');
					fileAll[i].firstElementChild.classList.add('checked');
					fileAll[i].firstElementChild.style.border = '1px solid #55addc';
				}else{
					fileAll[i].classList.remove('checked');
					fileAll[i].firstElementChild.classList.remove('checked');
					fileAll[i].firstElementChild.style.border = '1px solid transparent'
				}
			}
			var n = 0;
            $('.file div').each(function (key,item){
                if($(item).is('.checked')){
                    n++;
                }else{
                    return;
                }
            })
            if(n === $('.file div').length && $('.file div').length !==0){
                $('nav i').addClass('checked');
            }else{
                $('nav i').removeClass('checked');
            }
		}
		if(ev.clientY < oFile.getBoundingClientRect().top){
			div.style.top = oFile.getBoundingClientRect().top + 'px';
			div.style.height = Math.abs(mouseTop - ev.clientY) -(oFile.getBoundingClientRect().top - ev.clientY)  + 'px';
		}
		if(ev.clientX < oFile.getBoundingClientRect().left){
			div.style.left = oFile.getBoundingClientRect().left + 'px';
			div.style.width = Math.abs(mouseLeft - ev.clientX) -(oFile.getBoundingClientRect().left - ev.clientX)  + 'px';
		}
	}
	document.onmouseup = function (){
		document.onmousemove = document.onmousemove =null;
		div.remove();
	}
	
}
// document.getElementsByTagName('input')
