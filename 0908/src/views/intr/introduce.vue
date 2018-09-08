<template>
    <div>
        <img v-if='isLoading' style="width:100%" src="@/assets/img/loading.png" alt="">
        <img @touchstart.prevent ref="imgs" style="width:100%" :src="src[index]?src[index]:''" alt="" />
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
      preloadImages(arr) {
        //已经加载完的图片数量
        let loadeImage = 0
        //存放图片的数组
        let newImages = []
        //处理存入字符串，取得src部分
        //let arr = str.match(/src="(.+)"\s{1}/g)
    
        //返回一个promise对像
        return new Promise((resolve,reject)=>{
        for (let i=0;i < arr.length;i++){
            for(let i = 0; i < arr.length; i++){
            newImages[i] = new Image()
            //设置图片src属性
            newImages[i].src = arr[i]
            //图片绑定onload事件，确保加载完成
            newImages[i].onload = ()=>{
                console.log(1545)
                loadeImage++
                //当全部加载完成后，resove
                if(loadeImage === arr.length){
                resolve()
                }
            }
            newImages[i].onerror = ()=> {
                reject()
            }
            }
        }
        })
    }
  
    },
    created () {
        this.isLoading = true;
        this.$api.getProductIntro(this.$route.params.id).then( ({data}) =>{
            if(!data.data.list.length){
                this.$router.history.replace({name:'Index'});
                return;
            } 
            this.src.push(data.data.list[0].shop_info.tpl_content.base.images.ali_mobile.url[0],data.data.list[0].shop_info.tpl_content.base.images.spec_params_mobile.url[0]);
            this.preloadImages(this.src)
            
        } ).then( ()=>{
            this.isLoading = false;
            this.$refs.imgs.onload = () =>{
                this.$store.state.scrollObj.refresh();
            }
        } )
    }
}
</script>
<style scoped>
div{
    padding-top: 2rem;
}
</style>

