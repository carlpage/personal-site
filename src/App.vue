<template>
  <div id="app">
    <navigation />
    <intro />
    <my-experience />
    <work />
    <my-beliefs />
    <contact />
    <app-footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Intro from "./components/Intro.vue";
import MyExperience from "./components/MyExperience.vue";
import Work from "./components/Work.vue";
import MyBeliefs from "./components/MyBeliefs.vue";
import Contact from "./components/Contact.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Intro,
    Work,
    MyExperience,
    MyBeliefs,
    Contact,
    AppFooter
  },
  created() {}
};
</script>
