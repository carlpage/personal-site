<template>
    <section class="intro" 
    id="intro"
    v-observe-visibility="{
        callback: $store.getters.visibilityChanged,
        throttle: 300,
        intersection: $store.state.intersectionOptions
    }">
        <div class="intro__main">
            <div class="container">
                <h3>Hi, I'm</h3>
                <h1 class="font-weight-bold has-fresh-line">Carl Page</h1>
                <h3>Web Developer / Vue.js / WordPress</h3>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    created() {}
};
</script>
