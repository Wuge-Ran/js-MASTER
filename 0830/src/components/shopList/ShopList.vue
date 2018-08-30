<template>
<div id="shoplist">
    <h3>{{title}}</h3>
    <img src="@/assets/img/buy/loading.gif" alt="" v-if="!isDataBack">
    <ul v-if="isDataBack" class="shoplist">
        <router-link 
            v-for="item in list" 
            :key="item.id" 
            class="clearfix"
            tag='li'
            :to="{name:'Buy',params:{id:item.spu_id}}"
        >
            <img :src="item.shop_info.ali_image" alt="" class="fl">
            <div class="fr">
                <h4>{{item.shop_info.title}}</h4>
                <p class="intro">{{item.shop_info.sku_mobile_sub_title}}</p>
                <ul class="specList clearfix" v-if="item.shop_info.spec_v2[1]">
                    <li class="fl" v-for="i in item.shop_info.spec_v2[1].spec_values" :key="i.id">{{i.show_name}}</li>
                </ul>
                <ul class="colorList clearfix" v-if="item.shop_info.spec_v2[0].spec_values[0].image">
                    <li class="fl" v-for="i in item.shop_info.spec_v2[0].spec_values" :key="i.id">
                        <img :src="i.image" alt="">
                    </li>
                </ul>
                <div class="price">￥ {{item.price}}.00</div>
            </div>
        </router-link>
    </ul>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            list:[],
            title:'',
            hotListId:'',
            newListId:'',
            isDataBack:false
        }
    },
    methods:{
        async require(i){
            //展示商品数据
            await this.$api.getBanner().then( ({data})=>{
            console.log(data)
            this.hotListId = data.floors[0].dataList;
            this.newListId = data.floors[2].dataList;
            })
            if(i === 0){
                //获取热门商品数据
                this.$api.getProducts(this.hotListId).then(({data})=>{
                    this.list = data.data.list;
                }).then( ()=>{
                    this.isDataBack = true;
                } )
            }else{
                //获取新品数据
                this.$api.getProducts(this.newListId).then(({data})=>{
                    this.list = data.data.list;
                }).then( ()=>{
                    this.isDataBack = true;
                } )
            }
        }
    },
    beforeRouteEnter(to,from,next){
        next(async (vm)=>{
            let index = to.params.index;
            switch(index){
                case '0':
                    vm.title = '热销商品';
                    vm.require(0);
                    break;
                case '1':
                    vm.title = '新品首发';
                    vm.require(1);
                    break;
                default:
                    vm.$router.history.push('/index');        
            }
        } );
    }
}
</script>
<style scope>
@import url(./shopList.css);
</style>

