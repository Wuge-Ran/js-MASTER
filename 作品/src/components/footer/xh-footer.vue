<template>
<tabbar>
    <tabbar-item>
    <img slot="icon" src="@/assets/img/footer/index.png">
    <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item>
    <img slot="icon" src="@/assets/img/footer/classify.png">
    <span slot="label">分类</span>
    </tabbar-item>
    <tabbar-item selected link="/" badge="3">
    <img slot="icon" src="@/assets/img/footer/car.png">
    <span slot="label">购物车</span>
    </tabbar-item>
    <tabbar-item>
    <img slot="icon" src="@/assets/img/footer/personal.png">
    <span slot="label">个人中心</span>
    </tabbar-item>
</tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
  @import url(./footer.css);
</style>
