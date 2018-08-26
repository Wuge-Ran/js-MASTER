<template>
<div id='index'>
  <div id="header">
      <swiper auto height="150px">
        <swiper-item class="black"  v-for='(item,index) in banner' :key='index'>
          <img v-lazy='item.src'>
        </swiper-item>
      </swiper>
      <ul class='innner_nav'>
        <li v-for="(item,index) in navList" :key="index">
          <img :src="item.src" />
          <p>{{item.name}}</p>
        </li>
      </ul> 
  </div>
  <div id="hot">
    <group>
      <cell-box is-link>
        热销商品
      </cell-box>
    </group>
    <Scroller lock-y scrollbar-x :bounce=false>
      <div class="box1">
        <div class="box1-item" v-for="item in this.hotList" :key="item.id">
          <img v-lazy="item.shop_info.ali_image" />
          <h4>{{item.product_info.product_name}}</h4>
          <p>{{item.shop_info.sub_title}}</p>
          <div><i>¥ </i>{{item.price}}.00</div>
        </div>
      </div>
    </Scroller> 
    <div id='focus' class="clearfix">
      <section class="sele-1 fl">
        <div v-for="(item,index) in focusList1" :key='index'><img v-lazy="item.src" alt=""></div>
      </section>
      <section class="sele-2 fl">
        <div><img v-lazy="focusList2" alt=""></div>
      </section>  
    </div> 
  </div>
  <div id="new">
    <group>
      <cell-box is-link>
        新品首发
      </cell-box>
    </group>
    <ul class="newList clearfix">
      <li v-for='item in newList' :key='item.id'>
        <img v-lazy="item.shop_info.ali_image" />
        <h4>{{item.product_info.product_name}}</h4>
        <p>{{item.shop_info.sub_title}}</p>
        <div><i>¥ </i>{{item.price}}.00</div>
      </li>
    </ul>
  </div>
   
</div>
    
</template>

<script>
import { Swiper,SwiperItem,Grid, GridItem
,Group, CellBox, Scroller } from 'vux'

export default {
  components:{
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    Group,
    CellBox,
    Scroller
  },
  data(){
    return{
      banner:[],
      navList:[{
        name:'手机',
        src:require('@/assets/img/phone.png')
      },{
        name:'空气净化器',
        src:require('@/assets/img/airRefresh.png')
      },{
        name:'官方配件',
        src:require('@/assets/img/icons.png')
      },{
        name:'品牌周边',
        src:require('@/assets/img/clothes.png')
      },{
        name:'好物优选',
        src:require('@/assets/img/great.png')
      }
      ],
      hotListId:[],
      hotList:[],
      focusList1:[],
      focusList2:[],
      newListId:[],
      newList:[]
    }
  },
  //等到hotListId更新以后再往下走
  async mounted(){
    //获取banner的数据和首页展示商品数据
    await this.$api.getBanner().then( ({data})=>{
      console.log(data)
      this.banner = data.banner.dataList;
      this.hotListId = data.floors[0].dataList;
      this.focusList1 = data.floors[1].dataList.slice(0,3);
      this.focusList2 = data.floors[1].dataList.slice(3)[0].src;
      this.newListId = data.floors[2].dataList;
      console.log(this.newList)
    })
    //获取热门商品数据
    this.$api.getProducts(this.hotListId).then(({data})=>{
      this.hotList = data.data.list;
    })
    //获取新品数据
    this.$api.getProducts(this.newListId).then(({data})=>{
      this.newList = data.data.list;
      console.log(this.newList)
    })
  }
}
</script>
<style scoped>
  @import url(./index.css);
</style>
<style>
  #app .weui-cells,#app .vux-no-group-title{
        margin-top:0; 
        color:#666666;
        font-size:14px;
        font-weight:bold;
    }
</style>



