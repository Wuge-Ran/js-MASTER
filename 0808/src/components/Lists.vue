<template>
  <section class="main">
      <input class="toggle-all" type="checkbox"  v-model='checkAll'/>
      {{
        list
      }}
      {{checkAll}}
      <ul class="todo-list">
        <Lis :keys='item.id' v-for = 'item in list' :item = 'item' @change-one = 'cOne'/>
      </ul>
  </section>
</template>

<script>
import Lis from './Lis'
export default {
  name:'Lists',
  props:{
    list:{
        type:Array,
        default(){
          return []
        }
    }
  },
  components:{
    Lis
  },
  methods:{
    cOne(sel,id){
      this.$emit('change-one',sel,id)
    }
  },
  data () {
    return {
      val:''
    }
  },
  computed:{
    checkAll(){
        console.log(5646)
        return this.list.every( item => item.select );
      }
  }
}
</script>

