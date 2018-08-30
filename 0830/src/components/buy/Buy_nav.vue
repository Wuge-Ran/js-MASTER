<template>
    <tab>
        <tab-item :selected="nowIndex === '0'" @on-item-click="handler">商品</tab-item>
        <tab-item :selected="nowIndex === '1'" @on-item-click="handler">详情</tab-item>
        <tab-item :selected="nowIndex === '2'" @on-item-click="handler">参数</tab-item>
    </tab>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  data () {
    return {
      nowIndex:-1
    }
  },
  components: {
    Tab,
    TabItem
  },
  methods: {
    handler(i){
      this.$router.history.replace({params:{index:i}})
      this.nowIndex = i;
    }
  },
  mounted () {
    console.log(this.$route.params.index,"qq");
    if(!this.$route.params.index){
      this.$router.history.replace({params:{index:'0'}})
    }
    this.nowIndex = this.$route.params.index;
    console.log(this.nowIndex)
  }
}
</script>

