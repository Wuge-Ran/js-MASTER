<template>
    <div>
        <div v-show="isLoading"><img class="loading" src="@/assets/img/loading.gif" alt=""></div>
        <ul id="sort" v-show="!isLoading">
            <li v-for="(item,index) in list" :key="index">
                <h3>{{item.name}}</h3>
                <div class="imgDiv">
                    <img v-lazy="item.image.src" alt=""/>
                </div>
                <ul class="innerSort">
                    <SortItem v-for="i in item.layout.dataList" 
                    :key="i.sku" 
                    :sku="i.sku"
                    @addOne = 'addOne'
                    />
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import SortItem from '@/views/sort/SortItem'
export default {
    data(){
        return {
            list:[],
            isLoading:true,
            num:0
        }
    },
    components: {
        SortItem
    },
    methods: {
      addOne(){
          this.num++;
          if(this.itemNum === this.num){
              this.isLoading = false;
              this.$store.state.scrollObj.refresh();
          }
      }  
    },
    computed: {
      itemNum(){
          let num = 0;
          this.list.forEach(ele => {
            num += ele.layout.dataList.length;
          });
          return num;
      }  
    },
    created () {
       this.$api.getProductsSort().then(({data}) => {
           this.list = data;
           console.log(this.list)
       })
    }
}
</script>
<style>
@import url(./sort.css);
</style>




