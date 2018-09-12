<template>
    <div id="shopCar">
        <img class="loading" src="@/assets/img/buy/loading.gif" alt="" v-if="!isDataBack">
        <div class="noPro" v-if="isDataBack&&isZero">
            <img src="@/assets/img/buy/shop.png" alt="">
            <p>还没有购物哦！！</p>
            <router-link to='/' tag="button">去购物</router-link>
        </div>
		<div class="body1" v-if="isDataBack&&!isZero">
			<div class="b_b" @click="Settlement()">
                <h3>我的购物车</h3>
				<div class="b_body">
					<div class="list">
						<ul>
							<li v-for="(item,index) in mydata" :class="{active1:item.off}" :key="index">
							<input type="checkbox" :checked="item.off" @click="onff(index)" class="checkItem">
							<div class="img1">
								<img :src="item.url" >
							</div>
							<span class="proName">{{item.title}}</span>
							<div class="danjia">
								￥{{item.dan}}
							</div>
							<div class="jishuan">
								<div>
									<a href="javascript:;" @click="jian(index,item.id)">-</a>
									<input type="text"   v-model="item.nume"  class="textItem">
									<a href="javascript:;" @click="add(index,item.id)">+</a>
								</div>
							</div>
							<div class="num">
								<b>￥{{item.xj}}</b>
							</div>
							<button @click="del(index,item.id)" class="del">删除</button>
							</li>
						</ul>
					</div>
					<div class="zhongji">
						<div class="left">
							<input type="checkbox" class="qx" :checked="off1"  @click="all()">
							全选
						</div>
						<div class="right">
							<b></b>
							<span>总价<span>{{money}}</span></span>
							<i>已选择<span class="numm">{{num}}</span>件商品</i>
                            <button :disabled="isDisabled">购买</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Checklist } from 'vux'

export default {
    data(){
        return {
            mydata:[],
            num:0,
            money:'¥0.00',
            off1:false,
            isDataBack:false,
            isZero:true	
        }
    },
    watch: {
       mydata:{
           handler(){
               window.localStorage.setItem('myData',JSON.stringify(this.mydata));
           },
           deep:true
       } 
    },
    computed: {
      isDisabled(){
          let bl = this.mydata.some( item =>{
              return item.off
          } )
          return !bl;
      }  
    }, 
    methods:{
        del(index,id){
            this.mydata.splice(index,1);
            let arr = JSON.parse(window.localStorage.getItem('car'));
            arr = arr.filter((item,index) => {
                return item != id
            } )
            window.localStorage.setItem('car',JSON.stringify(arr));
            if(!arr.length){
                this.isZero = true;	
            }
        },
        jian(index,id){
            if(this.mydata[index].nume>1){
                this.mydata[index].nume--;
                this.mydata[index].off=true;
                let arr = JSON.parse(window.localStorage.getItem('car'));
                arr.forEach( (item,index) => {
                    console.log(item)
                    if(item == id){
                        arr.splice(index,1);
                        return;
                    }
                } )
                window.localStorage.setItem('car',JSON.stringify(arr));
            }	
            this.mydata[index].xj=parseInt(this.mydata[index].dan)*this.mydata[index].nume;			
            },
        add(index,id){
            if(this.mydata[index].nume<200){
                this.mydata[index].nume++;
                this.mydata[index].off=true;
                let arr = JSON.parse(window.localStorage.getItem('car'));
                arr.push(id);
                window.localStorage.setItem('car',JSON.stringify(arr));
            }				
            this.mydata[index].xj=parseInt(this.mydata[index].dan)*this.mydata[index].nume;
            },
        onff(index){				
            this.mydata[index].off=!this.mydata[index].off;
        },
        all(){
            this.off1?this.off1=false:this.off1=true;
            if(this.off1){
                for(var i in this.mydata){
                    this.mydata[i].off=true
                }
            }else{
                for(var i in this.mydata){
                    this.mydata[i].off=false;
                }
            }
        },
        Settlement(){
            var j=0;
            var k=0;
            var a=false;
            for(var i in this.mydata){
                if(!this.mydata[i].off){
                    a=true;
                    break;
                }					
            }
            a?this.off1=false:this.off1=true;
            for(var i in this.mydata){
                if(this.mydata[i].off){
                j+=Number(this.mydata[i].nume);					
                k+=parseInt(this.mydata[i].xj);
            }
            }
            this.num=j;
            this.money='¥'+k+'.00';
        },
        filterRepeat(arr,id){
            let obj = {};
            let num = 0; 
            for(let i = 0;i < arr.length;i++){
                if(arr[i] == id){
                    num++;
                }
            }
            return num
        }
    },
    created () {
        let arr = JSON.parse(window.localStorage.getItem('car'));
        if(arr.length){
            this.isZero = false;
            this.$api.getResultList(arr).then( ({data}) => {
                let list = data.data.list;
                for(let key in list ){
                    let num = this.filterRepeat(arr,list[key].id);
                    this.mydata.push({
                        id:list[key].id,
                        title:list[key].name,
                        url:list[key].sku_info[0].ali_image,
                        nume:num,
                        dan:''+list[key].price,
                        xj:''+list[key].price*num,
                        off:false
                    })
                }
            } ).then( ()=>{
                this.mydata = JSON.parse(window.localStorage.getItem('myData'));
                this.isDataBack  = true;
            } )
        }else{
            this.isZero = true;
            this.isDataBack  = true;
        }
    }
}
</script>
<style scoped>
    @import url(./car.css);
</style>


