<template>
    <div id="buyBtn" class="clearfix">
        <div id="tag" class="fl"><img src="@/assets/img/buy/shop.png" alt=""><span>1</span></div>
        <div id="button" class="fl">加入购物车</div>
    </div>
</template>
<script>
import { XButton, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem
  },
}
</script>  
<style scoped>
    #buyBtn{
        position: fixed;
        padding-bottom: .2rem;
        width: 100%;
        bottom: 0;
    }
    #tag{
        position: relative;
        width: 2.5rem;
        padding: 0.5rem;
    }
    #tag img {
        width: 100%;
    }
    #tag span{
        position: absolute;
        top: .2rem;
        right:.2rem;
        width: 1rem;
        height: 1rem;
        font:.6rem/1rem '微软雅黑';
        text-align: center;
        border-radius: 50%;
        background-color:red;
        color: white; 
    }
    #button{
        width: 15rem;
        height: 2.4rem;
        font:1rem/2.4rem '微软雅黑';
        text-align: center;
        background-color:#3f6aec;
        margin: 0.6rem 0 0 0.4rem;
        border-radius: .4rem; 
        color: azure
    }
    #button:active{
        background-color:#264ab8;
    }
</style>

