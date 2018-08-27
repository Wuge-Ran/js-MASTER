<template>
    <tab>
      <tab-item selected>商品</tab-item>
      <tab-item>详情</tab-item>
      <tab-item>参数</tab-item>
      <tab-item>推荐</tab-item>
    </tab>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
    data(){
        return {
            data:[]
        }
    },
  async beforeRouteEnter(to,from,next){
    let id = to.params.id;
    next( async (vm)=>{
        let {data} = await vm.$api.getProducts([id]);
        let title = data.data.list[0].shop_info.title;
        console.log(title)
        vm.data = data.data.list;
        vm.$store.commit('changeTitle',title)
    } )
  },  
  components: {
    Tab,
    TabItem
  }
}
</script>
