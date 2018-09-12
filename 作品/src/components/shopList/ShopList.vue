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
            <img v-lazy="item.shop_info.ali_image" alt="" class="fl">
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
    <div class="upLoading" v-show="upLoading" ref="upLoading">{{loadingMess}}</div>
</div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    data(){
        return{
            list:[],
            title:'',
            hotListId:'',
            newListId:'',
            isDataBack:false,
            upLoading:false,
            itemId:'',
            thisPage:1,
            loadingMess:'正在加载...'
        }
    },
    mounted() {
        this.$nextTick(() => {
            if(this.$route.params.index !== '0'&&!this.$route.params.index !== '1'){
                this.$store.state.scrollObj.openPullUp({
                    threshold:0
                });
                // this.$store.state.scrollObj.on('beforeScrollStart',function (){
                //     this.refresh();
                // });
                let vm = this;
                this.$store.state.scrollObj.on('pullingUp',async function (){
                    vm.upLoading = true;
                    let {data} = await vm.$api.getProductsIntro({category_id:vm.itemId,page:++vm.thisPage});                    let list = data.data.list;
                    if(list.length){
                        vm.list = vm.list.concat(list);
                    }else{
                        vm.$refs.upLoading.style.background = "none";
                        vm.loadingMess = "没有更多了"
                    }
                }); 
            }
        })
    },
    updated () {
        //告诉better-scroll加载完毕了，可以再次进行下拉刷新了
        this.$store.state.scrollObj.finishPullUp()
        //ajax请求回来后要refresh一项
        this.$store.state.scrollObj.refresh();
    },
    beforeDestroy () {
        this.$store.state.scrollObj.closePullUp();
    },
    methods:{
        async require(i){
            //展示商品数据
            await this.$api.getBanner().then( ({data})=>{
            this.hotListId = data.floors[0].dataList;
            this.newListId = data.floors[2].dataList;
            })
            if(i === 0){
                //获取热门商品数据
                this.$api.getProducts(this.hotListId).then(({data})=>{
                    this.list = this.list.concat(data.data.list);
                }).then( ()=>{
                    this.isDataBack = true;
                } )
            }else if(i === 1){
                //获取新品数据
                this.$api.getProducts(this.newListId).then(({data})=>{
                   this.list = this.list.concat(data.data.list);
                }).then( ()=>{
                    this.isDataBack = true;
                } )
            }else {
                //获取nav商品列表信息
                this.$api.getProductsIntro({category_id:i,page:this.thisPage}).then( ({data})=>{
                    this.itemId = i;
                    this.list = data.data.list;
                } ).then( ()=>{
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
                case '64':
                    vm.title = '手机专区';
                    vm.require(64);
                    break;
                case '77':
                    vm.title = '空气净化器';
                    vm.require(77);
                    break;
                case '60':
                    vm.title = '官方配件';
                    vm.require(60);
                    break;
                case '69':
                    vm.title = '品牌周边';
                    vm.require(69);
                    break;
                case '61':
                    vm.title = '好物优选';
                    vm.require(61);
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

