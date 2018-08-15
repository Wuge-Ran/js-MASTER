<template>
  <div>
    <h3>这是user页面</h3>
    <ul>
      <li>
        <router-link to="/users/1"> leo</router-link>
      </li>
      <li>
        <router-link to="/users/2"> momo</router-link>
      </li>
    </ul>
    <hr> 
    <h3>这里展示用户的信息</h3>
    <p>姓名：{{info.name}}</p>
    <p>性别：{{info.sex}}</p>
  </div>
</template>
<script>
  let usersInfo = [
    {
      name: 'leo',
      sex: '男',
      id:1
    },
    {
      name: 'momo',
      sex: '男',
      id:2
    }
  ]
  export default {
    data(){
      return {
        info: {
          name: 'XXXX',
          sex: 'XXXX'
        }
      }
    },
    watch:{
      $route:{
        handler(){
          console.log('路由信息变了',this.$route)
          let id = this.$route.params.abc;
          if(id){
            let item = usersInfo.find(item => item.id == id);
            console.log(item)
            this.info = item;
          }

          //this.$route.path = 123;
        },
        immediate: true
      }
    },
    /* mounted() {
      // 地址栏中的动态路径参数
      console.log(this.$router) 
      console.log(this.$route); // 地址栏中的路由信息，vue-router提供的
      let id = this.$route.params.abc;
      if(id){
        let item = usersInfo.find(item => item.id == id);
        console.log(item)
        this.info = item;
      }
    } */
  }
</script>
