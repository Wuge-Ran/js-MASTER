<template>
    <router-link tag="li" :to="{name:'Buy',params:{id:item.spu_id}}" v-if="isShow">
        <img :src="item.shop_info.ali_image" alt="" class="fl">
        <h4 class="fl">{{item.shop_info.title}}</h4>
        <i class="fr"></i>
    </router-link>
</template>

<script>
export default {
    props:{
        sku:String
    },
    data(){
      return {
          item:'',
          isShow:false
      }  
    },
    created(){
        this.$api.getProducts(+this.sku).then(({data})=>{
            this.item = data.data.list[0];
        }).then( ()=>{
            this.isShow = true;
            this.$emit('addOne');
        } )
    }   
}       
</script>

