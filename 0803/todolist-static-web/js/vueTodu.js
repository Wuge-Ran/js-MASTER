
let data = [
    {
        id:1,
        title: 'hello',
        select: true
    },
    {
        id:2,
        title: 'hello123',
        select: true
    }
]
new Vue({
    el:'.todoapp',
    data:{
        data,
        val:''
    },
    computed:{
        checkAllMethod:{
            get(){
                return this.data.every((item)=>item.select)
            },
            set(allVal){
                this.data.forEach( (item)=>item.select=allVal)
            }
        }
    },
    methods:{
       enterAdd(e){
            if(e.keyCode===13){
                this.data.push({
                    id:Math.random(),
                    title: this.val,
                    select: false
                })
                this.val = '';
            }
       }
    }
})