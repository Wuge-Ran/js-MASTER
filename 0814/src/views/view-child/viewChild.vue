<template>
    <div>
        这是view的child
        <span></span>
    </div>
</template>
<script>
    let data=[
        {
            id:1,
            name:'leo'
        },
        {
            id:2,
            name:'momo'
        }
    ]
    export default {
        watch: {
            $route:{
                handler(){
                    console.log(this.$route)
                },
                immediate:true
            }
        }
    }
</script>
