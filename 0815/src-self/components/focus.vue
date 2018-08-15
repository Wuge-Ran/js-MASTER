<template>
    <div>
        <h2>关注页面</h2>
        <div class="content" v-show="!loading">
            <div class="left-slider">
                <ul class="watch-list">
                    <li v-for='item in list' :key='item.id'
                        @click="toUser(item.id)"
                    >
                        <img :src="item.imgUrl"/>
                        <span>{{item.title}}</span>
                    </li>
                    
                </ul>
            </div>
            <div class="right-slider">
                <div>{{info.name}}</div>
            </div>
        </div>
        <h1 v-show="loading">loading...</h1>
    </div>
</template>

<script>
import axios from 'axios'
 let url = `https://www.easy-mock.com/mock/5b4026faf38b6529a0d572a3/jianshu/look`
    export default{
        data(){
            return {
                list:[],
                loading:true,
                info:{}
            }
        },
        watch:{
            '$route':{
                handler(){
                    let id = this.$route.params.id;
                    if(id){
                        this.info = this.list.find( item => item.id === id ).info;
                    }
                   
                }
            }
        },
        methods:{
            toUser(id){
                this.$router.push({
                    params:{id : id}
                })
            }
        },
        async mounted () {
            let {data} = await axios(url);
            this.loading = false;
            this.list = data.data.list;
            let id = this.$route.params.id;
            console.log(id)
            if(id){   
                let item = this.list.find( item => item.id == id );
                this.info = item.info;
            }
        }
    }
</script>
