<template>
    <nav>
        <router-link tag='div' :to='{params:{index:"0"}}'>概览</router-link>
        <router-link tag='div' :to='{params:{index:"1"}}'>参数</router-link>
    </nav>
</template>

<style scoped>
    nav{
        height: 2rem;
        background: black;
    }
    nav div{
        float: left;
        color: gray;
        font: 0.6666rem/2rem '微软雅黑';
        padding: 0 1rem;
    }
    .router-link-exact-active{
        color:white;
    }
</style>
