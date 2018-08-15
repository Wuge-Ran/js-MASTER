
<template>
<div id="main">
  <div class="header-box">
    <ul class="nav-list">
          <router-link 
            tag="li"
            v-for="item in routesMess" 
            :key="item.path"
            :to="{name: item.name}"
          >
            <a>{{item.title}}</a>
          </router-link>
				</ul>
  </div>
  <router-view></router-view>
</div>  
</template>

<script>
import routesMess from './router/routersMess'
export default {
  data(){
    return{
      routesMess
    }
  }
}

</script>

<style>

</style>
