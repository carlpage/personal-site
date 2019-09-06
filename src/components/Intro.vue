<template>
    <section class="intro" 
    id="intro"
    v-waypoint="{
        callback: this.$store.getters.changeIdInView('intro'),
        intersection: {threshold: [0.25, 0.75]}
    }"
    >
        <div class="slick-slider">
            <div class="slider" v-lazy:background-image="require('../../public/img/carl-in-rome.jpg')">
                <div class="slider__testimonials">
                    <div class="container">
                        <h3>Hi, I'm</h3>
                        <h1 class="has-fresh-line">Carl Page</h1>
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
  created() {
      console.log('changeIDin view', this.$store.getters)
  }
};
</script>
