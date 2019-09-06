<template>
  <div id="app">
    <intro />
    <what-ive-done />
    <work />
    <my-beliefs />
    <contact />
    <app-footer />
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import WhatIveDone from "./components/WhatIveDone.vue";
import Work from "./components/Work.vue";
import MyBeliefs from "./components/MyBeliefs.vue";
import Contact from "./components/Contact.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "app",
  components: {
    Intro,
    Work,
    WhatIveDone,
    MyBeliefs,
    Contact,
    AppFooter
  },
  created() {}
};
</script>
