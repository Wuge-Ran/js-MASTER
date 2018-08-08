<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{countNum}}</strong>
      <span>条未选中</span>
    </span>
    <ul class="filters">
      <li><a href="#/all" class="selected">All</a></li> 
      <li><a href="#/active" class="">Active</a></li> 
      <li><a href="#/completed" class="">Completed</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name:'Footer',
  props:{
    countNum:{
      type:Number,
      default:0
    }
  },
  data () {
    return {
      val:''
    }
  }
}
</script>

