//自定义高度
var content = document.querySelector('#content');
var header = document.querySelector('.title');
var tools = document.querySelector('.tools');
var contHeight = (document.documentElement.clientHeight - header.offsetHeight - tools.offsetHeight) + 'px';
content.style.height = contHeight;
window.onresize = function (){
    var contHeight = (document.documentElement.clientHeight - header.offsetHeight - tools.offsetHeight) + 'px';
    content.style.height = contHeight;
}
var data = [
    {
    title:'微云',
    id:1001,
    pid:-1
},{
    title:'JS课程',
    id:1002,
    pid:1001
},{
    title:'123',
    id:1022,
    pid:1002
},{
    title:'333',
    id:1202,
    pid:1002
},{
    title:'333_1',
    id:2202,
    pid:1202
},{
    title:'HTML课程',
    id:1003,
    pid:1001
},{
    title:'css课程',
    id:2232,
    pid:1003
},{
    title:'css课程-1',
    id:2233,
    pid:2232
},{
    title:'css课程-2',
    id:2234,
    pid:2232
},{
    title:'css课程-3',
    id:2235,
    pid:2232
},{
    title:'css课程-4',
    id:2236,
    pid:2232
},{
    title:'css课程-5',
    id:2237,
    pid:2232
},{
    title:'css课程-6',
    id:2238,
    pid:2232
}
]
//通过id找数据
function getItemById(id){
    for(var i = 0;i < data.length;i++){
        if(data[i].id === id){
            return data[i];
        }
    }
    return null;
}
//通过id找子集
function getChildsById(id){
    var arr = new Array();
    for(var i = 0;i < data.length;i++){
        if(data[i].pid === id){
            arr.push(data[i]);
        }   
    }
    return arr;
}
//通过id找所以子孙
function getAllchildsById(id){
    var arr = new Array();
    var thisOne = getItemById(id);
    if(thisOne){
        arr.push(thisOne);
        var thisOneChilds = getChildsById(id);
        for(var i = 0;i < thisOneChilds.length;i++){
            var cId = thisOneChilds[i].id;
            arr = arr.concat(getAllchildsById(cId));
        }
    }
    return arr;
}
//通过id找父级
function getParentsById(id){
    var arr = new Array();
    var item = getItemById(id);
    if(item){
        arr.push(item);
        arr = arr.concat(getParentsById(item.pid));
    }
    return arr;
}
var init = -1;
//生成树形结构
function createTreeHTML(id){
    var arr = getChildsById(id);
    var html = '';
    if(arr.length){
        html +='<ul>';
        for(var i = 0;i < arr.length;i++){
            var cla = createTreeHTML(arr[i].id) ? 'active' : 'no_chlid';
            html +='<li><h3 class="'+ cla +'" cus_id='+ arr[i].id +'>'+ arr[i].title +'</h3>';
            html += createTreeHTML(arr[i].id);
            html +='</li>';
        }
        html +='</ul>';
    }
    return html;
}
$('#content .list').html(createTreeHTML(init));
$('#content .list h3[cus_id="1001"]').css('color','#55addc');
//生成bar结构
function createBarHTML(id){
    var arrP = getParentsById(id).reverse();
    var html = '';
    for(var i = 0;i < arrP.length;i++){
        var cla = i ===  arrP.length-1 ? 'active' : '';
        html += '<div class="fl '+ cla +'" cus_id="'+ arrP[i].id +'">'+ arrP[i].title +'</div>';
        if(i !==  arrP.length-1){
            html +='<span class="fl"></span>';
        }
    }
    return html;
}
$('.item .nav').html(createBarHTML(1001));
//生成文件结构
function createFileHTML(id){
    var childs = getChildsById(id);
    var html = '';
    if(childs.length){
        $('.item .file').removeClass('no_file');
        for(var i = 0;i < childs.length;i++){
            html += '<div cus_id="'+ childs[i].id +'"><i></i><span>'+ childs[i].title 
                +'</span><input type="text"/></div>';
        }
    }else{
        $('.item .file').addClass('no_file');
    }
    return html;
}
$('.item .file').html(createFileHTML(1001));
//交互
$('.list').on('click','h3',function (){
    $('.list h3').css('color','#949ea4');
    $(this).css('color','#55addc');
    var id = $(this).attr('cus_id');
    $('.item .nav').html(createBarHTML(+id));
    $('.item .file').html(createFileHTML(+id));
    $('nav i').removeClass('checked');
    iIsVisi();
});
$('nav .nav').on('click','div',function (){
    var id = $(this).attr('cus_id');
    $('.item .nav').html(createBarHTML(+id));
    $('#content .list h3').css('color','#949ea4');
    $('#content .list h3[cus_id="'+ id +'"]').css('color','#55addc');
    $('.item .file').html(createFileHTML(+id));
    $('nav i').removeClass('checked');
    iIsVisi();
});
$('.item .file').on('click','div',function (){
    var id = $(this).attr('cus_id');
    $('.item .nav').html(createBarHTML(+id));
    $('.item .file').html(createFileHTML(+id));
    $('#content .list h3').css('color','#949ea4');
    $('#content .list h3[cus_id="'+ id +'"]').css('color','#55addc');
    $('nav i').removeClass('checked');
    iIsVisi();
})
//是否显示全选按钮
function iIsVisi(){
    var oI = document.querySelector('.item nav i');
    var files = document.querySelectorAll('.item .file > div');
    if(!files.length){
        oI.style.visibility = 'hidden';
    }else{
        oI.style.visibility = 'visible';
    }
}
//全选单选
$('nav i').on('click',function (){
    $(this).toggleClass('checked');
    var bl = $(this).is('.checked') ? true : false;
    if(bl){
        $('.file div').addClass('checked');
        $('.file div').find('i').addClass('checked');
        $('.file').find('i').css('border','1px solid #55addc');
    }else{
        $('.file div').removeClass('checked');
        $('.file div').find('i').removeClass('checked');
        $('.file').find('i').css('border','1px solid transparent');
    }
})
//鼠标移入时要出现border
$('.file').on('mouseover','div',function (){
    $(this).find('i').css('border','1px solid #55addc');
});
$('.file').on('mouseout','div',function (){
    if(!$(this).is('.checked')){
        $(this).find('i').css('border','1px solid transparent');
    }    
});
$('.file').on('click','i',function (e){
    $(this).toggleClass('checked');
    $(this).parent().toggleClass('checked');
    var n = 0;
    $('.file div').each(function (key,item){
        if($(item).is('.checked')){
            n++;
        }else{
            return;
        }
    })
    if(n === $('.file div').length){
        $('nav i').addClass('checked');
    }else{
        $('nav i').removeClass('checked');
    }
    e.stopPropagation();
})
//弹框提示的方法
var bullet = document.querySelector('#bullet');
var timer = null;
function showBul(){
    clearTimeout(timer);
    $(bullet).css('top',-45);
    bullet.style.transition = 'none';
    setTimeout(function (){
        bullet.style.transition = '.5s';
        $(bullet).css('top',0);
    })
    timer = setTimeout(function (){
        $(bullet).css('top',-45);
    },1500)
}
//点按删除
$('.buttons .dele').on('click',function (){
    if($('.file>div').is('.checked')){
        $('#mask').css('display','block');
        $('#del_window').css('display','block');
    }else{
        $('#bullet').text('你什么都没选，删什么!?').css('background','#ef8989');
        showBul();
    }
    $('#del_window i').on('click',function (){
        $('#mask').css('display','none');
        $('#del_window').css('display','none');
    })
    $('#del_window .cancel').on('click',function (){
        $('#mask').css('display','none');
        $('#del_window').css('display','none');
    })
    //先清一下事件再绑定
    $('#del_window .ensure').off('click');
    $('#del_window .ensure').on('click',function (){
        var treeActiveId = +$('.nav >.active').attr('cus_id');
        var arr = [];
        $('.file>.checked').each(function (key,item){
            arr.push(+$(item).attr('cus_id'));
        });
        var arr2 = [];
        for(var i = 0;i < arr.length;i++){
            arr2 = arr2.concat(getAllchildsById(arr[i]));
        }
        for(var i = 0;i < arr2.length;i++){
            for(var j = 0;j < data.length;j++){
                if(arr2[i].id === data[j].id){
                    data.splice(j,1);
                    break;
                }
            }
        }
        $('#mask').css('display','none');
        $('#del_window').css('display','none');
        $('#bullet').text('删除成功').css('background','#86ce8b');
        showBul();
        //重新生成三个结构
        $('#content .list').html(createTreeHTML(init));
        $('#content .list h3[cus_id="'+ treeActiveId +'"]').css('color','#55addc');
        $('.item .nav').html(createBarHTML(treeActiveId));
        $('.item .file').html(createFileHTML(treeActiveId));
        iIsVisi();
    })
})
//input输入修改名称
$('.rename').on('click',function (e){
    $('.tools').data('Features',1)
    //阻止事件冒泡
    $('.file > .checked input').on('click',function (e){
        e.stopPropagation();
    })
    $('.file > .checked input').on('mousedown',function (e){
        e.stopPropagation();
    })
    if($('.file > .checked').length ===1){
        $('.file > .checked input').css('display','block').val($('.file > .checked span').text());
        var oInput = document.querySelector('.file .checked input');
        $(oInput).focus().select();
    }else if($('.file > .checked').length){
        $('#bullet').text('只能选择一个文件重命名').css('background','#ef8989');
        showBul();
    }else{
        $('#bullet').text('没有选中的文件，请选择后再删除').css('background','#ef8989');
        showBul();
    }
    e.stopPropagation();
})
$(document).on('mousedown',function (){
    //1是重命名的功能
    if($('.tools').data('Features')===1){
        var bl = true;
        $('.file div:not(.checked)').find('span').each(function (index,item){
            if($(item).text()===$('.file > .checked input').val()){
                $('#bullet').text('文件名不能重复').css('background','#ef8989');
                showBul();
                bl = false;
                return;
            }
        })
        if($('.file > .checked input').val() && bl){
            var cur_id = $('.file > .checked').attr('cus_id');
            var p_id = $('.nav .active').attr('cus_id'); 
            $('.file > .checked span').text($('.file > .checked input').val());
            data.forEach(function (item){
                if(item.id == cur_id){
                    item.title = $('.file > .checked input').val();
                }
            })
            //重新生成树状结构
            $('#content .list').html(createTreeHTML(init));
            $('#bullet').text('重命名成功').css('background','#86ce8b');
            $('#content .list h3[cus_id="'+ p_id +'"]').css('color','#55addc');
            showBul();
            $('.file > .checked input').css('display','none').val('');
            $('.tools').data('Features',0);
            iIsVisi();
        }
    }else if($('.tools').data('Features')===2){
        //2是新建的功能
        var bl = true;
        if(!$('.file input').eq(0).val()){
            $('#bullet').text('新建名不能为空!').css('background','#ef8989');
            showBul();
            bl = false;
            $('.file div').eq(0).remove();
            $('.tools').data('Features',0);
            if($('.file div').length===0){
                $('.file').addClass('no_file');
            }
            return;
        }
        $('.file div span').each(function (index,item){
            if($(item).text()===$('.file input').eq(0).val()){
                $('#bullet').text('新建名不能重复').css('background','#ef8989');
                showBul();
                $('.file div').eq(0).remove();
                bl = false;
                $('.tools').data('Features',0);
                return;
            }
        })
        if(bl){
            var cur_id = $('.file div').eq(0).attr('cus_id');
            var p_id = $('.nav .active').attr('cus_id');
            var obj = {
                title:$('.file input').eq(0).val(),
                id:+cur_id,
                pid:+p_id
            }
            data.unshift(obj);
            //重新生成树状结构
            $('#content .list').html(createTreeHTML(init));
            $('#content .list h3[cus_id="'+ p_id +'"]').css('color','#55addc');
            $('#bullet').text('新建成功').css('background','#86ce8b');
            $('.item .file').html(createFileHTML(+p_id));
            showBul();
            $('.file input').eq(0).css('display','none').val('');
            $('.tools').data('Features',0);
            iIsVisi();
            $('.item nav>i').removeClass('checked');
            return;
        }
    }
})
//新建
$('.newFile').on('click',function (ev){
    ev.stopPropagation();
    $('.tools').data('Features',2);
    var data = new Date();
    //这个位置可以使用一个函数传入结构
    $('.file').prepend('<div cus_id="'+ data.getTime() +'"><i></i><span></span><input style="display:block" type="text"/></div>').removeClass('no_file');
    //阻止事件冒泡
    $('.file input').on('click',function (e){
        e.stopPropagation();
    })
    $('.file input').on('mousedown',function (e){
        e.stopPropagation();
    })
    var oInput = document.querySelectorAll('.file input')[0];
    oInput.focus();
})
//移动到
var arr = [];
$('.move').on('click',function (){
    arr = [];
    if($('.file > .checked').length){
        $('.file > .checked').each(function (index,item){
            arr = arr.concat(getAllchildsById(+$(item).attr('cus_id')));
        })
        $('#content .list_mini').html(createTreeHTML(init));
        $('#move_window').show(500);
        $('#mask').show();
    }else{
        $('#bullet').text('请选择需要移动的文件夹').css('background','#ef8989');
        showBul();
    }
})
var id = -999;
//点击字体颜色改变
$('.list_mini').on('click','h3',function (){
    id = +$(this).attr('cus_id');
    $('#move_window h3').removeClass('checked');
    $(this).addClass('checked');
})
$('#move_window .ensure').on('click',function (ev){
    ev.stopPropagation();
    var thisId = +$('.nav > .active').attr('cus_id');
    var bl = true;
    //如果选择了想移动的文件夹，则id必定大于-999
    console.log(id);
    if(id>-999){
        arr.forEach(function (item){
            if(id === item.id){
                $('#move_window>.att').text('不能移动到自己或者子级文件');
                $('#move_window>.att').fadeIn(300,function (){
                    setTimeout(function (){
                        $('#move_window>.att').fadeOut(300);
                    },500)
                });
                bl = false;
                return;
            }
        })
        //如果循环结束了，bl还是等于true证明不是自己或子集
        if(bl){
            var thisArr = [];
            var childs =  getChildsById(id);
            var allLength = $('.file > .checked').length;
            $('.file > .checked').each(function (index,item){
                thisArr.push(item);
            })
            var n = 0;
            if(childs.length){
                for(var i = 0;i < childs.length;i++){
                    for(var j = 0;j < thisArr.length;j++){
                        if(childs[i].title === thisArr[j].innerText.trim()){
                            thisArr.splice(j,1);
                           n++;
                        }
                    }
                }
            }
            //判断两种情况拖入文件全都重名或部分重名
            if(n === allLength && allLength !==0){
                $('#move_window>.att').text('文件名重复了，请重新选择');
                $('#move_window>.att').fadeIn(300,function (){
                            setTimeout(function (){
                                $('#move_window>.att').fadeOut(300);
                            },500)
                        });      
                return;            
            }else if(n !== 0){
                $('#bullet').text('有重名文件,部分移动失败').css('background','#f3a960');
                showBul();
            }else{
                $('#bullet').text('移动成功').css('background','#86ce8b');
                showBul();
            }
            $(thisArr).each(function (index,item){
                for(var i = 0;i < data.length;i++){
                    if($(item).attr('cus_id') == data[i].id){
                        data[i].pid = id;
                        break;
                    }
                }
            })
            //重新生成三个结构
            $('#content .list').html(createTreeHTML(init));
            $('#content .list h3[cus_id="'+ thisId +'"]').css('color','#55addc');
            $('.item .nav').html(createBarHTML(thisId));
            $('.item .file').html(createFileHTML(thisId));
            iIsVisi();
            $('#move_window').hide(500);
            $('#mask').hide();
            $('#move_window>.att').hide();
            $('nav > .checked').removeClass('checked');
            //重置id
            id = -999;
        }
    }else{
        $('#move_window>.att').text('请选择想要移动的文件夹');
        $('#move_window>.att').fadeIn(300,function (){
                    setTimeout(function (){
                        $('#move_window>.att').fadeOut(300);
                    },500)
                });    
    }
})
//关闭移动到窗口
$('#move_window>i').on('click',function (){
    $('#move_window').hide(500);
    $('#mask').hide();
    $('#move_window>.att').hide();
})
$('#move_window>.cancel').on('click',function (){
    $('#move_window').hide(500);
    $('#mask').hide();
    $('#move_window>.att').hide();
})