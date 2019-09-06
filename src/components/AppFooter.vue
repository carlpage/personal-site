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

    <div class="navigation-buttons strikingly-fixed" style="bottom: 20px;">
      <span v-scroll-to="'#intro'" class="prev d-flex align-items-center justify-content-center">
        <i class="fa fa-chevron-up text-white"></i>
      </span>
      <span v-scroll-to="'#contact'" class="next d-flex align-items-center justify-content-center">
        <i class="fa fa-chevron-down text-white"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false
      }
    },
    computed: {
      scrollToHigherId() {
        this.checked = false;
      },
      scrollToLowerId() {
        this.checked = false;
      }
    }
  };
</script>