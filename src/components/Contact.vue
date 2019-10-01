<template>
    <section class="container pt-5 pb-5 pb-md-0" 
    id="contact" 
    v-observe-visibility="{
        callback: $store.getters.visibilityChanged,
        throttle: 300,
        intersection: $store.state.intersectionOptions
    }">
        <h2 class="text-center mb-4 has-fresh-line has-fresh-line--black">Contact</h2>
        <div class="row">
            <div class="col-md-6 d-flex align-items-end">
                <img 
                    class="img-fluid mb-4 mb-md-0" 
                    :src="require('../../public/img/carl-page-no-bg.png')" 
                    alt="Carl Page"
                />
            </div>
            <div class="col-md-6 d-flex justify-content-center flex-column">
                <h4 class="mb-3">
                    Want to get in contact with me? Whether you would like to chat about
                    the best places to eat in Minneapolis, speak some German, discuss programming, or talk about the best
                    places to bike in Minnesota, feel free to send me a message!
                </h4>
                <h5 class="text-gray">
                    Let's get in touch.
                    <a href="https://www.linkedin.com/in/carl-page/" target="_blank">LinkedIn</a> messages work best.
                </h5>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    created() {},
    methods: {}
};
</script>
