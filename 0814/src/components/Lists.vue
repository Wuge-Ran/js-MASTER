<template>
  <section class="main">
      <input class="toggle-all" type="checkbox"  v-model='checkAll'/>
      <ul class="todo-list">
        <Lis :key='item.id' 
        v-for = 'item in list' 
        :item = 'item' 
        :selctedIndex = 'selctedIndex'
        @change-one = 'cOne'
        @dele-li = 'deleLi'
        @li-edit= 'changeEdting'/>
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
    },
    selctedIndex:{
      type:Number,
      default:-1
    }
  },
  components:{
    Lis
  },
  methods:{
    cOne(sel,id){
      this.$emit('change-one',sel,id)
    },
    deleLi(id){
       this.$emit('dele-li',id)
    },
    changeEdting(id){
       this.$emit('li-edit',id)
    }
  },
  data () {
    return {
      val:''
    }
  },
  computed:{
    checkAll:{
      get:function () {
        return this.list.every( item => item.select );
      },
      set: function(checked){
        this.$emit('checked-all',checked);
      }  
      }
  }
}
</script>

