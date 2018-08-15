<template>
  <div id="main">
    <div class="header-box">
				<ul class="nav-list">
          <router-link 
            :exact="item.name === 'Find' ? true : false"
            tag="li"
            v-for="item in routerConfig" 
            :key="item.path"
            :to="getName(item)"
          >
            <a>{{item.title}}</a>
          </router-link>
				</ul>
			</div>
      <div class="container">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import { routerConfig} from '@/router/routerConfig'
export default {
  name: 'App',
  data(){
    return {
      routerConfig
    }
  },
  methods:{
    getName(item){
      return {name: item.name ? item.name : item.children[0].name}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content .router-link-exact-active {
  background: yellow;
}

.router-link-active {
  background: red;
}

.content .jingquejihuo {
  background: yellow;
}

.jihuo {
  background: red;
}

</style>
