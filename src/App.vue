<template>
  <div id="app">
  </div>
</template>

<script>
  import http from "./lib/http"

  export default {
    name: 'app',
    data() {
      return {
        page: ""
      }
    },

    created() {
//      http("smarthos.system.area.list", {}).then((res) => {
//        console.log("111", res);
//      });
    },


    watch: {
    }
  }
</script>

<style lang="scss"></style>
