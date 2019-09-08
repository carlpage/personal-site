<template>
    <section class="intro" 
    id="intro"
    v-observe-visibility="{
        callback: $store.getters.visibilityChanged,
        throttle: 300,
        intersection: $store.state.intersectionOptions
    }">
        <div class="slick-slider">
            <div class="slider" v-lazy:background-image="require('../../public/img/carl-in-rome.jpg')">
                <div class="slider__testimonials">
                    <div class="container">
                        <h3>Hi, I'm</h3>
                        <h1 class="font-weight-bold has-fresh-line">Carl Page</h1>
                        <h3>Web Developer / VueJS / WordPress</h3>
                    </div>
                </div>
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
