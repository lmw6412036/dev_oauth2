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
                let from = fromCache.get();
                let hostname=url("hostname",from);

                console.log(hostname);
            },
        },

        watch: {}
    }
</script>

<style lang="scss"></style>
