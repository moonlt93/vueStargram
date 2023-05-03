<template>

<div @click="fire" :class="[`${names} filter-item`]" :style="`background-image: url(${url})`">
    <slot name="a"></slot>
    
</div>       
    
</template>
<script>
export default {
    name : 'filterbox',
    props: {
        url:String,
        names:String,
    },
    methods:{
        fire(){
            this.emitter.emit('fire',this.names);
        }
    }
}
</script>
<style>
 @import '../assets/css/filterStyle.css';   
</style>