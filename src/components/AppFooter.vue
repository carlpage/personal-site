<template>
  <div
  id="contact" 
  v-observe-visibility="{
      callback: $store.getters.visibilityChanged,
      throttle: 300,
      intersection: $store.state.intersectionOptions
  }">
    <footer class="footer bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="footer__copyright">Carl Page © 2019</p>
          </div>
          <div class="col-sm-6">
            <div class="footer__site-social-links">
              <a class="footer__link" href="mailto:crlpage7@gmail.com">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </a>
              <a class="footer__link" target="_blank" href="https://www.linkedin.com/in/carl-page/">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a class="footer__link" target="_blank" href="https://github.com/carlpage">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <!-- end left -->
        </div>
      </div>
      <!-- end container -->
    </footer>
    <!-- end footer -->
    <div class="navigation-buttons d-none d-md-block">
      <span v-scroll-to="aboveSectionId()" class="prev d-flex align-items-center justify-content-center">
        <i class="fa fa-chevron-up text-white"></i>
      </span>
      <span v-scroll-to="lowerSectionId()" class="next d-flex align-items-center justify-content-center">
        <i class="fa fa-chevron-down text-white"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      aboveSectionId() {
        switch(this.$store.state.idInView) {
          case 'intro': 
            return '#intro';
          case 'my-experience': 
            return '#intro';
          case 'work': 
            return '#my-experience';
          case 'my-beliefs': 
            return '#work';
          case 'contact': 
            return '#my-beliefs';
        }
      },
      lowerSectionId() {
        switch(this.$store.state.idInView) {
          case 'intro': 
            return '#my-experience';
          case 'my-experience': 
            return '#work';
          case 'work': 
            return '#my-beliefs';
          case 'my-beliefs': 
            return '#contact';
          case 'contact': 
            return '#contact';
        }
      }
    },
    created() {}
  };
</script>