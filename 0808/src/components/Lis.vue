<template>
    <li :class="{completed:item.select}">
        <div class="view">
            <input class="toggle" type="checkbox" :checked = 'item.select' @change='change'/>
            <label>{{item.title}}</label>
            <button class="destroy"></button>
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