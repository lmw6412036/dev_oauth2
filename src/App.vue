<template>
  <div id="app">
  </div>
</template>

<script>
  import {fromCache, userCache} from "./lib/cache"
  import {makeUrl} from "./lib/util"

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
        let protocol = url("protocol", from);
        let hostname = url("hostname", from);
        let port = url("port", from);
        let path = url("path", from);
        let query = url("?", from);
        let hash = url("hash", from);

        if (typeof query == "undefined") {
          query = {};
        }
        query.openid = user.id;
        let retUrl = makeUrl({protocol, hostname, port, path, query, hash});
        location.replace(retUrl);
      }
    },

    watch: {}
  }
</script>

<style lang="scss"></style>
