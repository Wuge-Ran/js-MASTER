<template>
  <div id="app">
    <section class="todoapp">
        <div>
            <Header @add-todu = 'addOne' :list='list'/>
            <Lists :list='list' :selctedIndex='selctedIndex' @change-one = 'cOne' @checked-all='cAll' @dele-li='deleLi'/>
            <Footer :countNum = 'countNum'/>
        </div>
    </section>
  </div>
</template>

<script>
import './assets/css/base.css'
import './assets/css/index.css'
import Header from './components/Header'
import Lists from './components/Lists'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
      Header,
      Lists,
      Footer
  },
  data(){
    return {
      list:[{
        id:1,
        title:'标题1',
        select:false
      },{
        id:2,
        title:'标题2',
        select:true
      }],
      selctedIndex:-1
    }
  },
  methods:{
    addOne(val){
      this.list.push({
        id:Date.now(),
        title:val,
        select:false
      })
    },
    cOne(check,id){
      console.log(check,id)
      let item = this.list.find( (item)=>{
        return item.id === id;
      } );
      item.select = check;
    },
    cAll(check){
      this.list.forEach( item => item.select = check )
    },
    deleLi(id){
      let index = this.list.findIndex( (item)=> item.id === id );
      this.list.splice(index,1);
    }
  },
  computed:{
    countNum(){
      return this.list.filter( (item)=>{
          return !item.select
      } ).length
    }
  }
}
</script>

<style>

</style>
