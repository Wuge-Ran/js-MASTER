<template>
<tabbar>
    <tabbar-item :selected="index === 0" link="/index">
      <img slot="icon" src="@/assets/img/footer/index.png">
      <img slot="icon-active" src="@/assets/img/footer/index-active.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item :selected="index === 1" link="/sort">
      <img slot="icon" src="@/assets/img/footer/classify.png">
      <img slot="icon-active" src="@/assets/img/footer/classify-active.png">
      <span slot="label">分类</span>
    </tabbar-item>
    <tabbar-item link="/shopCar" :badge="badge" :selected="index === 2">
      <img slot="icon" src="@/assets/img/footer/car.png">
      <img slot="icon-active" src="@/assets/img/footer/car-active.png">
      <span slot="label">购物车</span>
    </tabbar-item>
    <tabbar-item :selected="index === 3">
      <img slot="icon" src="@/assets/img/footer/personal.png">
      <img slot="icon-active" src="@/assets/img/footer/personal-active.png">
      <span slot="label">个人中心</span>
    </tabbar-item>
</tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  data(){
    return{
      index:0,
      carArr:''
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
    badge(){
      this.carArr = JSON.parse(window.localStorage.getItem('car')); 
      if(this.carArr){
        return ""+this.carArr.length;
      }else{
        return "";
      }
    },
  },
  watch:{
    $route:{
      handler(){
        if(this.$route.name === "ShopList"||this.$route.name === "Sort"){
          this.index = 1;
        }else if(this.$route.name === "ShopCar"){
          this.index = 2;
        }else{
          this.index = 0;
        }
      },
      immediate:true
    }
  }
}
</script>

<style>
  @import url(./footer.css);
</style>
