<template>
  <section class="container bg-white my-experience py-5" 
  id="my-experience" 
  v-observe-visibility="{
    callback: $store.getters.visibilityChanged,
    throttle: 300,
    intersection: $store.state.intersectionOptions
  }">
    <h2 class="text-center mb-5 has-fresh-line has-fresh-line--black">My Experience</h2>
    <div v-for="(item, index) in whatIveDone" :key="index" class="row mb-4" data-aos="fade-up">
        <div class="col-md-3 col-md-offset-1 d-flex align-items-start align-items-lg-center justify-content-center">
            <img 
                class="img-fluid my-experience__img mb-3 mb-md-0" 
                height="200" 
                width="200" 
                :src="require(`../../public/img/${item.image}`)" 
                :alt="item.name"
            />
        </div>
        <div class="col-md-8">
            <h3>
                <a :href="item.link" class="text-dark" target="_blank">{{ item.name }}</a>
            </h3>
            <h5 class="text-green">{{ item.title }}</h5>
            <h5>{{ item.location }}</h5>
            <p>{{ item.description }}</p>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      whatIveDone: [
        {
          name: "MJ Kretsinger",
          title: "Web Developer, May 2018 to August 2019",
          link: "https://mjkretsinger.com/",
          location: "Edina, MN",
          image: "MJK.png",
          description:
            "During my time as a Web Developer at MJ Kretsinger, a large portion of my time was spent building an offline-capable progressive web application built in Vue.js using Firebase and Node.js for the back-end. My primary responsibility was building the front-end and reporting capability of the application. I was also a primary developer on a couple other sizeable projects built in Vue.js. Furthermore, I have sharpened my PHP skills by building several WordPress sites for companies such as New Horizon Academy, Kinderberry Hill, and Lifelink III."
        },
        {
          name: "Comfy Chair Consulting",
          title: "Web Developer Intern, October 2017 to February 2018",
          link: "https://comfychair.biz/",
          location: "Minneapolis, MN",
          image: "comfy-chair.svg",
          description:
            "Collaborated closely with a senior developer to build sites by constructing our own HTML/CSS templates from the ground up and converted them into WordPress using PHP. We also built our own WordPress template in Vue.js."
        },
        {
          name: "Prime Digital Academy",
          title: "Full Stack Software Engineering Degree, earned August 2017",
          link: "https://primeacademy.io",
          location: "Minneapolis, MN",
          image: "prime.png",
          description: "I discovered my love for programming shortly after graduating from college. After spending countless late nights going through freeCodeCamp challenges, I figured I should make a career out of it."
        },
        {
          name: "Metropolitan State University",
          title: "B.S. in International Business, earned December 2016",
          link: "https://www.metrostate.edu/",
          location: "Minneapolis, MN",
          image: "metro-state.jpg",
          description: "I graduated Magna Cum Laude with a 3.85 GPA."
        }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>
