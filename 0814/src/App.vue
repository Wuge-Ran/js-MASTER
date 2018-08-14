
<template>
    <div>
        <button @click="to">跳转到view</button>
        <router-link :to="{name:'Home'}">去首页</router-link>
        <router-link to='/v'>去view</router-link>
        <hr/>
        <router-view></router-view>
   </div>
</template>

<script>
export default {
    methods: {
        to(){
            console.log(this.$router)
            this.$router.push('/v');
        }
    }
}
</script>


