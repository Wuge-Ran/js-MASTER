<template>
    <div id="search">
        <h4 v-show="!isTap">热门搜索</h4>
        <ul v-show="!isTap" class="hotList">
            <li v-for="(item,index) in hotList" 
            :key="index"
            @touchend="toSL(item)"
            >{{item}}</li>
        </ul>
        <ul v-show="isTap" class="suggestList">
            <li 
            v-for="(item,index) in suggestList" 
            :key="index"
            @touchend="toSL(item)"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hotList:[]
        }
    },
    methods: {
      toSL(item){
          this.$store.commit('changePlaceholder',item);
          this.$api.getResult({keyword:item}).then( ({data}) => {
              console.log(data,35456);
              return data;
          } )
      }  
    },
    computed: {
      isTap(){
          if(this.$store.state.tapVal.trim().length){
              return true;
          }else{
              return false;
          }
      },
      suggestList(){
          return this.$store.state.suggest;
      }
    },
    created () {
        this.$api.getHotPro().then( ({data})=>{
            this.hotList = data.hot;
        } )
    }
}
</script>

<style scoped>
@import url(./search.css); 
</style>

