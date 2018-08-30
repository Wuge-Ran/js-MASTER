<template>
<div>
  <x-header v-show="isShowHead">
    <span>夏侯商场</span>
    <x-icon type="navicon" 
    slot="overwrite-left"
    size="35"  
    style="fill:#fff;position:relative;top:-8px;left:-3px;" 
    class="cell-x-icon" 
    @click="isNavshow"
    ></x-icon>
    <x-icon  
    slot="right" 
    type="ios-search-strong" 
    size="30" 
    v-show="r_icon === 'search'"></x-icon>
    <router-link 
    tag="a" 
    slot="right" 
    :to="{name:'Buy',params:{id:idNum}}"
    v-show="r_icon === 'Intro'"
    >购买</router-link>
  </x-header>
  <x-header :title="title" v-show="r_icon === 'Buy'"></x-header>
  <x-header title="列表" v-show="r_icon === 'ShopList'"></x-header>
</div>
    
</template>

<script>
import { XHeader } from 'vux'

export default {
  data(){
    return {
      r_icon:'',
      idNum:'00'
    }
  },
  //计算属性依赖一旦发生变化就重新加载
  computed: {
    title(){
      return this.$store.state.title;
    },
    isShowHead(){
      if(this.r_icon !=='Buy'&&this.r_icon !=='ShopList'){
        return true
      }else{
        return false
      } 
    }
  },                                                     
  watch: {
    '$route':{
      //根据路由对象改变icon
         handler(to,from){
          // if(this.title === ''){
          //   console.log(this.$router)
          //   this.$router.history.replace('/index')
          // }

          this.idNum = to.params.id;
         switch(to.name){
           case 'Intro':
              this.r_icon = 'Intro';
              break;
           case 'Buy':
              this.r_icon = 'Buy';
              break;
           case 'ShopList':
              this.r_icon = 'ShopList';
              break;  
           default:
              this.r_icon = 'search'
         }
        },
        immediate:true
    }
  },
  components: {
    XHeader
  },
  methods: {
    isNavshow(){
      this.$emit('isNavshow')
    }
  }
}
</script>
<style>
  @import url(./header.css);
</style>
