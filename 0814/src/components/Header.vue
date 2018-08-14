<template>
  <header class="header" >
      <h1>todos</h1>
      <input class="new-todo" placeholder="请输入内容" 
      @keydown.13='add'
      v-model = 'val'
      />
  </header>
</template>

<script>
export default {
  name:'Header',
  data(){
    return {
      val:''
    }
  },
  methods:{
      add(){
        if(this.val !== ''){
          this.$emit("add-todu",this.val)
          this.val = '';
        }
      }
    }
}
</script>

