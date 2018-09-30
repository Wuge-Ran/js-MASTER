<template>
    <li :class="{completed:item.select,editing:selctedIndex===item.id}">
        <div class="view">
            <input class="toggle" type="checkbox" :checked = 'item.select' @change='change'/>
            <label @dblclick=''>{{item.title}}</label>
            <button class="destroy" @click='$emit("dele-li",item.id)'></button>
        </div>
        <input class="edit" />
    </li>
</template>

<script>
    export default {
        name:'Lis',
        props:{
            item:{
                type:Object,
                default(){
                    return {}
                }
            },
            selctedIndex:{
                type:Number,
                default:-1
            }
        },
        methods:{
            change(){
               this.item.select = !this.item.select; 
               this.$emit('change-one',this.item.select,this.item.id)
            }
        }
    }   
</script>