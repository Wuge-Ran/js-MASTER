

let data = JSON.parse(localStorage.getItem('data-12')) || [];
console.log(data)
new Vue({
    el:'.todoapp',
    data:{
        data,
        val:'',
        editId:-1,
        beforeVal:'',
        hash:'all'
    },
    computed:{
        checkAllMethod:{
            get(){
                return this.data.every((item)=>item.select)
            },
            set(allVal){
                this.data.forEach( (item)=>item.select = allVal)
            }
        },
        unCheckedNum(){
            return this.data.filter( item => item.select === false ).length
        },
        filterData(){
            if( this.hash === 'all'){
                return this.data;
            }else if(this.hash === 'active'){
                return this.data.filter( (item) => {
                    return !item.select
                } )
            }else if(this.hash === 'completed'){
                return this.data.filter((item) => {
                    return item.select
                })
            }
        }
    },
    watch:{
        data:{
            handler(){
                console.log(123)
                localStorage.setItem('data-12',JSON.stringify(this.data));
            },
            deep:true
        }
    },
    methods:{
       enterAdd(e){
           if(!this.val.trim()) return;
            if(e.keyCode===13){
                this.data.push({
                    id:Math.random(),
                    title: this.val,
                    select: false
                })
                this.val = '';
            }
       },
       deleLi(i){
        this.data = this.data.filter( (item) => item.id !== i );
        console.log(this.data)
       },
       showEdit(id,i){
            let li = this.data.find( (item)=> item.id === id );
            this.editId = li.id;
            this.beforeVal = li.title;
            this.$nextTick( ()=>{
                this.$refs.editInput[i].focus();
            } )
            this.editVal = li.title;
       },
       renameTitle(item){
            if(!item.title.trim()){
                console.log(item.id)
                this.deleLi(item.id)
            }
            this.editId = -1;
        },
        cancelEdit(id){
            let li = this.data.find( (item)=> item.id === id );
            this.editId = -1;
            li.title = this.beforeVal;
        }
    },
    mounted(){
        var changehash = () => {
            var hash = window.location.hash;
        
            if(!hash){
                hash = 'all'
            }else {
                hash = hash.slice(2)
            }
            // 改变根实例的数据
            this.hash = hash;
            
        }
        window.addEventListener('hashchange',changehash)
        changehash();
    }
})