<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" :active-name="active">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem :name="item.params.tab" v-for='item in nav' 
                        :key='item.params.tab'
                        :to ='{params:item.params} '
                        >
                            <Icon :type="item.icon"></Icon>
                            {{item.title}}
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{position:'relative', margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <Spin size="large" fix v-if="spinShow"></Spin>
                <item v-for='item in list' 
                :key='item.id'
                :option='item'
                />
            </Content>
            <Page :total="100" @on-change='onChange' :current='current'/>
        </Layout>
    </div>
    
</template>
<script>
import nav from '@/route/navConfig'
import item from '@/views/list/list_item'
    export default {
        data () {
            return {
                list:[],
                nav,
                active:'ask',
                spinShow:true,
                current:1
            }
        },
        components: {
            item
        },
        watch: {
          $route:{
              handler(){
                  if(!this.$route.query.page){
                      this.$route.query.page = 1;
                  }
                  if(!this.$route.params.tab){
                      this.$route.params.tab = 'ask';
                  }else if(!this.nav.some( item=>item.params.tab === this.$route.params.tab )){
                     this.$router.push({params: {tab:'ask'}})
                  }
                let tab = {
                    page:this.$route.query.page,
                    tab :this.$route.params.tab,
                    limit :40,
                }
                
               this.current = +this.$route.query.page
                this.active =this.$route.params.tab
                this.spinShow = true
                
                this.$.getTopics(tab).then( ({data})=>{
                    this.list = data.data
                } ).then(item=>{
                    this.spinShow = false
                })
            },
            immediate:true
            }   
        },
        methods: {
           onChange(num){
            this.$router.push({query:{page:num}})
           }
        }
    }
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
