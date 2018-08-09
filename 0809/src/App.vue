<template>
  <div id="app">
    <button>------</button>
    <span>{{$store.state.n}}</span>
    <button @click='add'>++++++</button>
  </div>
</template>
<script>
  export default {
    methods: {
      add(){
        this.$store.dispatch('addAction',999)
      }
    }
  }
</script>


