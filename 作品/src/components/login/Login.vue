<template>
    <div id='login_box'>
		<div class='icon clearfix'>
            <i class="fl"></i>
            <span class="fl">登录</span>
        </div>
        <form class="inputArea">
            <Input placeholder="用户名或电子邮箱" 
            style="width: 300px" 
            size="large"
            autofocus
            />
            <div class="remember">
                <input type="checkbox"/>
                <span>30天之内记住我</span>
            </div>
            <Button type="success" long
            >登录</Button>
        </form>
        <div class="sign">
            <p>没有账号？</p>
            <div>创建账号</div>
        </div>
	</div>
</template>

<style>
    @import '../../assets/css/login.css';
    @import '../../assets/css/global.css';
</style>
