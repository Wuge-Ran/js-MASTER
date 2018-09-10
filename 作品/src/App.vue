<template>
  <div id="app">
    <div id="header">
        <xh-header @isNavshow='changeShow' ></xh-header>
        <transition name="drop">
          <ul id='top_nav' v-show='navShow'>
              <router-link tag="li" :to="{name:'Index'}" @click.native="toLi">科技商城</router-link>
              <router-link tag="li" :to="{name:'Intro',params:{id:'1000517'}}" @click.native="toLi">手机</router-link>
          </ul>
        </transition>
        <nav id="sec_nav">
          <router-view name='nav'></router-view>
        </nav>
      </div>  
    <div id="wrap" ref="wrap">
      <div>
        <router-view></router-view>
      </div>
    </div>
    <router-view name="button"></router-view>
    <div id="footer">
        <xhFooter v-if='footerShow'/>
    </div> 
  </div>
</template>

<script>
import xhHeader from '@/components/header/xh-header';
import xhFooter from '@/components/footer/xh-footer';
import BScroll from 'better-scroll';

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
         //监控dom更新，一旦更新，强制 scroll 重新计算，并将坐标移动到最顶端
         this.$nextTick( ()=>{
           this.scroll.refresh();
           this.scroll.scrollTo(0,0);
         } )
        }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrap,{
          bounce:false,
          click:true,
          probeType:3
        });
      this.$store.commit('newScroll',this.scroll);
      let clientHeight = document.documentElement.clientHeight;
      this.$refs.wrap.style.height = clientHeight + 'px';
    })
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
