<template>
  <div id="app">
    <xh-header @isNavshow='changeShow' ></xh-header>
    <transition name="drop">
      <ul id='top_nav' v-show='navShow'>
          <router-link tag="li" :to="{name:'Index'}" @click.native="toLi">科技商城</router-link>
          <router-link tag="li" :to="{name:'Intro',params:{id:'100051701'}}" @click.native="toLi">手机</router-link>
      </ul>
    </transition>
    <router-view name='nav'></router-view>
    <router-view></router-view>
    <div id="footer">
      <xhFooter v-if='footerShow'/>
    </div> 
  </div>
</template>

<script>
import xhHeader from '@/components/header/xh-header';
import xhFooter from '@/components/footer/xh-footer';

export default {
  name: 'App',
  data(){
    return{
      navShow:false,
      footerShow:true
    }
  },
  watch: {
    '$route':{
      //根据路由对象改变icon
        handler(to,from){
         switch(to.name){
           case 'Buy':
              this.footerShow = false;
              break;   
           default:
              this.footerShow = true;
         }
        }
    }
  },
  components: {
    xhHeader,
    xhFooter
  },
  methods: {
    //得到子组件的通知，下拉菜单
    changeShow(){
      this.navShow = !this.navShow;
    },
    toLi(){
      this.navShow = false;
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import './assets/css/reset.css';
@import './assets/css/nav.css';

</style>
