<template>
  <div id="app">
  </div>
</template>

<script>
  import {fromCache, userCache} from "./lib/cache"

  export default {
    name: 'app',
    data() {
      return {
        page: ""
      }
    },
    created() {
      this.goBack();
    },
    methods: {
      goBack() {
          
      },
    },

    watch: {}
  }
</script>

<style lang="scss"></style>
