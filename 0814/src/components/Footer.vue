<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{countNum}}</strong>
      <span>条未选中</span>
    </span>
    <ul class="filters">
      <li><a href="#/all" :class="{selected:hash === 'all'}">All</a></li> 
      <li><a href="#/active" :class="{selected:hash === 'active'}">Active</a></li> 
      <li><a href="#/completed" :class="{selected:hash === 'completed'}">Completed</a></li>
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
    },
    hash:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      val:''
    }
  }
}
</script>

