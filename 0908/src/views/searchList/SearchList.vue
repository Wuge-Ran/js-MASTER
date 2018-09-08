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
            this.$store.state.scrollObj.openPullUp({
                threshold:0
            });
            // this.$store.state.scrollObj.on('beforeScrollStart',function (){
            //     this.refresh();
            // });
            let vm = this;
            this.$store.state.scrollObj.on('pullingUp',async function (){
                vm.upLoading = true;
                let {data} = await vm.$api.getResult({
                    keyword:this.$store.state.Placeholder,
                    page:++thisPage
                });
                let list = data.data.list;
                if(list.length){
                    vm.list = vm.list.concat(list);
                }else{
                    vm.$refs.upLoading.style.background = "none";
                    vm.loadingMess = "没有更多了"
                }
            }); 
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
    }
}
</script>
<style scope>
@import url(./searchList.css);
</style>