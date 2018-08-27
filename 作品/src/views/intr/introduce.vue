<template>
    <div>
        <img v-if='isLoading' style="width:100%" src="@/assets/img/loading.png" alt="">
        <img style="width:100%" :src="src[+index]?src[+index]:''" alt="" />
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            src:[],
            isLoading:true,
            index:0
        }
    },
    watch: {
      $route:{
          handler(){
            //进入页面默认index为1
            this.index = this.$route.params.index;
            if(!this.index){
                this.$router.history.replace({params:{index:"0"}});
            }
          },
          immediate:true
      }  
    },
    methods: {
       //图片预加载 
      preloadImg(arr) {
        let imgWrap = [];
        for(let i =0; i< arr.length ;i++) {
            imgWrap[i] = new Image();
            imgWrap[i].src = arr[i];
        }
    }  
    },
    created () {
        this.isLoading = true;
        this.$api.getProducts([this.$route.params.id]).then( ({data}) =>{
            if(!data.data.list.length){
                this.$router.history.replace({name:'Index'});
                return;
            } 
            this.src.push(data.data.list[0].shop_info.tpl_content.base.images.ali_mobile.url[0],data.data.list[0].shop_info.tpl_content.base.images.spec_params.url[0]);
            this.preloadImg(this.src)
            
        } ).then( ()=>{
            this.isLoading = false;
        } )
    }
}
</script>
