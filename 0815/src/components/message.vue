<template>
<div>
    <h2>消息页面</h2>
    <div class="content">
      <div class="left-slider">
        <ul class="watch-list">
          <!-- <li class="active">
            <img alt="" src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" />
            <span>评论</span>
          </li> -->
          <router-link 
            exact
            v-for="item in messageChildren"
            :key="item.path"
            :to="{name: item.name}"
            tag="li"
          >{{item.title}}</router-link>
        </ul>
      </div>
      <div class="right-slider">
        <h3>展示页</h3>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import messageChildren from '@/router/message-child'
  export default {
    data(){
      return {
        messageChildren
      }
    }
  }
</script>
