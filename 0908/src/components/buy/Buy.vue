<template>
    <div id="buyBox">
        <div id="shop" v-show="index==0">
            <div class='showImg'>
                <img src="@/assets/img/loading.png" alt="" v-if="!dataBack">
                <img :src="ali_images" alt="" v-if="dataBack">
            </div>
            <div v-if="dataBack">
                <h3>商品信息</h3>
                <div class="intro">
                    <h4>{{data.name}}</h4>
                    <p>{{data.shop_info.highlights}}</p>
                    <span>¥ {{data.price}}.00</span>
                </div>
            </div>
        </div>
        <div v-show="index==1">
            <img src="@/assets/img/buy/loading.gif" alt="" v-if="!imgload">
            <img ref="imgs" :src="imgWrap[0]" alt="" v-if="imgload"/>
            <p v-if="noIntro">暂时没有详情介绍。。。</p>
        </div>
        <div v-show="index==2">
            <img src="@/assets/img/buy/loading.gif" alt="" v-if="!imgload">
            <img :src="imgWrap[1]" alt="" v-if="!isTable&&imgload"/>
            <ul v-if="isTable" class="list">
                <li v-for="item in attr_list" :key="item.name" class="clearfix">
                    <h4 class="fl">{{item.name}}</h4>
                    <span class="fr">{{item.value}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            data:[],
            dataBack:false,
            index:-1,
            imgWrap:[],
            isTable:false,
            attr_list:[],
            imgload:false,
            noIntro:false
        }
    },
    computed: {
        ali_images(){
            //捕获一下错误，如果报错就进入catch
            let img = '';
            try{
              img = this.data.sku_info[0].ali_image
            }catch(e){
                return e
            }
            return img
        }
    },
    methods: {
        //预加载
      preloadImg(arr) {
            for(let i =0; i< arr.length ;i++) {
                let iamge = new Image();
                iamge.src = arr[i];
                iamge.onload = () => {
                    //设置双向绑定
                    this.$set(this.imgWrap,i,arr[i]);
                    //防止出现大图无法滚动的现象
                    this.$store.state.scrollObj.refresh();
                    this.imgload = true;
                }
            }
        }  
    },
    watch: {
        '$route':{
            handler(){
                this.index = this.$route.params.index;
            },
            immediate:true
        }  
    },
  async beforeRouteEnter(to,from,next){
    let id = to.params.id;
    next( async (vm)=>{
        vm.dataBack = false;
        vm.isTable = false;
        let {data} = await vm.$api.getProductIntro(id);
        if(!data.data.list.length){
           return vm.$router.history.replace('/index');
        }
        let title = data.data.list[0].name;
        let imgArr = [];
        let img2 = data.data.list[0].shop_info.tpl_content.base.images;
        if(!img2.spec_params_mobile){
            img2 = '';
            imgArr.push(data.data.list[0].shop_info.tpl_content.base.images.ali_mobile.url[0])
            vm.attr_list = data.data.list[0].shop_info.tpl_content.base.attributes[0].list;
            vm.isTable = true;
        }else{
            imgArr.push(data.data.list[0].shop_info.tpl_content.base.images.ali_mobile.url[0],
            img2.spec_params_mobile.url[0]);
        }
        
        vm.preloadImg(imgArr);
        if(imgArr[0].length<5){
            vm.noIntro = true;
            vm.imgload = true;
        }
        vm.dataBack = true;
        vm.data = data.data.list[0];
        vm.$store.commit('changeTitle',title);
    } )
  }
}
</script>
<style scoped>
    @import url(./buy.css);
</style>

