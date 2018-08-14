<template>
    <li :class="{completed:item.select,editing:selctedIndex===item.id}">
        <div class="view">
            <input class="toggle" type="checkbox" :checked = 'item.select' @change='change'/>
            <label @dblclick='editing'>{{item.title}}</label>
            <button class="destroy" @click='$emit("dele-li",item.id)'></button>
        </div>
        <input class="edit" ref='input' v-model='item.title' @keydown.13='rename' @blur='rename'
        @keydown.esc = 'cancelEdit'/>
    </li>
</template>

<script>
    export default {
        name:'Lis',
        data(){
            return{
                beforeName:''
            } 
        },
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
            },
            editing(){
                this.$emit('li-edit',this.item.id)
                this.beforeName = this.item.title;
                this.$nextTick( ()=>{
                    this.$refs.input.focus();
                } )
            },
            rename(){
                if(this.item.title.trim() ===''){
                    this.$emit("dele-li",this.item.id);
                    return;
                }
                this.$emit('li-edit',-1)
            },
            cancelEdit(){
                this.item.title = this.beforeName;
                this.$emit('li-edit',-1)
            }
        }
    }   
</script>