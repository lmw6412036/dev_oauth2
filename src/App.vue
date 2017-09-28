<template>
  <div id="app">
  </div>
</template>

<script>
  import {fromCache, userCache} from "./lib/cache"
  import {makeUrl, getParamsFromUrl} from "./lib/util"

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
        let user = userCache.get();
        let from = fromCache.get();
        let {protocol, hostname, port, path, query, hash} = getParamsFromUrl(from);
        //console.log(getParamsFromUrl(from).hostname);
        if (typeof query == "undefined") {
          query = {};
        }
        query.openid = user.id;
        let retUrl = makeUrl({protocol, hostname, port, path, query, hash});
        //console.log(retUrl)
        location.replace(retUrl);
      }
    },

    watch: {}
  }
</script>

<style lang="scss"></style>
