<template>
<div>
  <x-header v-show="r_icon !== 'Buy'">
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
</div>
    
</template>

<script>
import { XHeader } from 'vux'

export default {
  data(){
    return {
      r_icon:'',
      idNum:'00',
      title:''
    }
  },                                                     
  watch: {
    '$route':{
      //根据路由对象改变icon
         handler(to,from){
          this.title = this.$store.state.title
          console.log(this.title,999)
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
