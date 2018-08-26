<template>
    <x-header>
      <span>夏侯商场</span>
      <x-icon type="navicon" 
      slot="overwrite-left"
      size="35"  
      style="fill:#fff;position:relative;top:-8px;left:-3px;" 
      class="cell-x-icon" 
      @click="isNavshow"></x-icon>
      <x-icon  slot="right" type="ios-search-strong" size="30" v-show=''></x-icon>
    </x-header>
</template>

<script>
import { XHeader } from 'vux'

export default {
  props:{
    
  },
  components: {
    XHeader
  },
  methods: {
    isNavshow(){
      this.$emit('isNavshow')
    }
  }
}
</script>
<style>
  @import url(./header.css);
</style>
