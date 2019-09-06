<template>
  <div>
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
              <a class="footer__link" target="_blank" href="https://www.facebook.com/carl.page.7">
                <i class="fa fa-facebook" aria-hidden="true"></i>
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

    <div class="navigation-buttons">
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
      return {
        // nextElement: false
      }
    },
    methods: {
      aboveSectionId() {
        console.log('HIT aboveSectionId')
        let id;
        if(this.$store.state.idInView === 'what-ive-done') {
          id = '#intro';
        } else if(this.$store.state.idInView === 'work') {
          id = '#what-ive-done';
        } else if(this.$store.state.idInView === 'my-beliefs') {
          id = '#work';
        } else if(this.$store.state.idInView === 'contact') {
          id = '#my-beliefs';
        } 
        console.log('id', id)
        return id;
      },
      lowerSectionId() {
        console.log('HIT lowerSectionId')
        if(this.$store.state.idInView === 'intro') {
          return '#what-ive-done';
        } else if(this.$store.state.idInView === 'what-ive-done') {
          return '#work';
        } else if(this.$store.state.idInView === 'work') {
          return '#my-beliefs';
        } else if(this.$store.state.idInView === 'my-beliefs') {
          return '#contact';
        } 
      }
    },
    created() {
      console.log('store', this.$store);
      console.log('idInView', this.$store.state.idInView);
    }
  };
</script>