<template>
  <div id="app">
    <xh-header @isNavshow='changeShow'></xh-header>
    <transition name="drop">
      <ul id='top_nav' v-show='navShow'>
          <router-link tag="li" :to="{name:'Index'}" @click.native="toLi">科技商城</router-link>
          <router-link tag="li" :to="{name:'Intro'}" @click.native="toLi">手机</router-link>
      </ul>
    </transition>
    <router-view></router-view>
    <div id="footer">
      <xhFooter />
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
      navShow:false
    }
  },
  components: {
    xhHeader,
    xhFooter
  },

  methods: {
    //得到子组件的通知，下拉菜单
    changeShow(){
      this.navShow = !this.navShow
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
