<template>
    <x-header>
      <span>夏侯商场</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      <x-icon  slot="right" type="ios-search-strong" size="30" slot='right'></x-icon>
    </x-header>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  }
}
</script>
<style>
  @import url(./index.css);
</style>
