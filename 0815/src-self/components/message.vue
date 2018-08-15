<template>
    <div>
        <h2>消息页面</h2>
        <div class="content">
            <div class="left-slider">
                <ul class="watch-list">
                    <router-link v-for='item in messChild' 
                    exact
                    :to='{name:item.name}' :key='item.path'
                    tag='li'
                    active-class = 'mess-active'
                    >
                    {{item.name}}
                        <img alt="" src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" />
                        <span>{{item.title}}</span>
                    </router-link>
                </ul>
            </div>
            <div class="right-slider">
                <h3>展示页</h3>
                <hr/>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import messChild from "@/router/mess-child";
export default {
    data(){
        return {
            messChild
        }
    }
}
</script>
<style>
    .mess-active{
        background:yellow
    }
</style>
