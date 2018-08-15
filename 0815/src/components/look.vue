<template>
<div>
  <h2>关注页面</h2>
  <div class="content">
    <div class="left-slider">
      <img v-show="!list.length" width="150" src="@/assets/loading.gif" alt="">
      <ul class="watch-list" v-show="list.length">
        <!-- <li class="active" 
          v-for="item in list" 
          :key="item.id"
        >
          <img :src="item.imgUrl"/>
          <span>{{item.title}}</span>
        </li> -->
        <!-- :to="{name:'Look',params: {id: item.id}}" -->
        <router-link
          v-for="item in list" 
          :key="item.id"
          tag="li"
          :to="{path:`/look/${item.id}`,}"
          active-class="look-jihuo"
          exact-active-class="look-jingque-jihuo"
        >
          <img :src="item.imgUrl"/>
          <span>{{item.title}}</span>
        </router-link>
        <!-- <li class="active" 
          v-for="item in list" 
          :key="item.id"
          @click="gotoLook(item)"
        >
          <img :src="item.imgUrl"/>
          <span>{{item.title}}</span>
        </li> -->
      </ul>
    </div>
    <div class="right-slider">
      <h3>展示页</h3>

      <div>
        <p>姓名：{{info.name}}</p>
        <p>年龄：{{info.age}}</p>
      </div>

    </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios'
  let url = `https://www.easy-mock.com/mock/5b4026faf38b6529a0d572a3/jianshu/look`
  /* 
      1. 进入到导航组件渲染之后，组件中需要数据的可以在created或mounted中请求数据
          好处：部分内部是可以看到
      2. 在没有拿到数据之前，组件是不渲染的，等到所有的数据都拿到之后，再渲染组件
          好处：一旦看到页面，所有内容都可以看到
          确定：加载数据时间长，出现空白或loading时间长
  */
  export default {
    data(){
      return {
        list:[],
        info:{
          name: 'XXXX',
          age: 'XXXX'
        }
      }
    },
    async beforeRouteEnter(to,from,next){
      // this=> 不指向组件的实例，因为执行这个钩子的时候，组件还没有被创建

      console.log('look---beforeRouteEnter',this)
      
      next();
    },
    // 路由的钩子在生命周期钩子函数之前
    beforeCreate(){
      console.log('beforeCreate')
    },
    beforeRouteLeave(to,from,next){
      console.log('离开了')
      /* let bl = confirm('你真的要离开吗？')
      if(bl){
        next();
      } */

      next();
    },
    beforeRouteUpdate(to,from,next){
      
      console.log('更新了')
      console.log(to,from)
      console.log('this.$route',this.$route)
      let id = to.params.id;
      if(id){
        this.info = this.list.find(item => item.id == id).info;
      }
      next();
    },
    watch:{
      $route(){
        let id = this.$route.params.id;
        if(id){
          this.info = this.list.find(item => item.id == id).info;
        }
      }
    },
    async mounted() {
      let {data} = await axios.get(url);
      this.list = data.data.list;
      let id = this.$route.params.id;
      if(id){
        this.info = this.list.find(item => item.id == id).info;
      }
      
    },
    methods:{
      gotoLook(item){
        this.$router.push({
          name: 'Look',
          params:{id:item.id}
        })
      }
    }
  }
</script>
<style>
.watch-list .look-jingque-jihuo  {
  background: green;
}
</style>

