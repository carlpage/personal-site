<template>
    <section class="bg-light py-5" 
    id="work" 
    v-observe-visibility="{
        callback: $store.getters.visibilityChanged,
        throttle: 300,
        intersection: $store.state.intersectionOptions
    }">
        <div class="container">
            <h2 class="text-center mb-4 has-fresh-line has-fresh-line--black">My Work</h2>
            <div class="row mb-4 justify-content-center">
                <div
                    v-for="(work, index) in all_work"
                    :key="index"
                    class="col-sm-6 col-lg-4 mb-4"
                >
                    <div class="card d-flex align-items-center">
                        <a v-if="work.link" :href="work.link" target="_blank" class="d-flex justify-content-center">
                            <img v-if="work.image" 
                                :src="require(`../../public/img/${work.image}`)"
                                :alt="work.title"
                                class="card-img-top"
                            >
                        </a>
                        <img v-else-if="work.image && !work.link"
                            :src="require(`../../public/img/${work.image}`)"
                            :data-src="require(`../../public/img/${work.image}`)"
                            :alt="work.title"
                            class="card-img-top"
                        >
                        <div class="card-body">
                            <a v-if="work.link" :href="work.link" class="h5 card-title d-inline-block text-dark" target="_blank">{{ work.title }}</a>
                            <div v-else class="h5 card-title">{{ work.title }}</div>
                            <p class="card-text">{{ work.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            all_work: [
                {
                    title: "Life Link III",
                    image: 'lifelinkiii.png',
                    link: "https://www.lifelinkiii.com/",
                    description: 'I was the primary developer that completed the marketing site for the helicopter EMT company, Lifelink III. This site was built in WordPress using a module-based approach.'
                },
                {
                    title: "Kinderberry Hill",
                    image: 'kbh.png',
                    link: "https://www.kinderberryhill.com/",
                    description: 'I was the primary developer that converted this popular childcare site into WordPress Gutenberg. I performed extensive additions to this site such as adding a blog as well as a tour scheduling functionality.'
                },
                {
                    title: "Facial Recognition App",
                    image: 'facial_recognition.png',
                    link: null,
                    description: 'I developed an application as a side project that allows users to upload an image, and then it will display a box around the faces of the people in the image. This app was built in React, Redux, Node.js, Postgresql, Redis, and Docker.'
                },
                {
                    title: "New Horizon Academy",
                    image: 'nha.png',
                    link: "https://newhorizonacademy.net/",
                    description: 'I have performed extensive maintenance on this high-traffic childcare site built in WordPress.'
                },
                {
                    title: "Mayo Clinic Epilepsy Care Center",
                    image: 'mayo_clinic.png',
                    link: "https://links.e.response.mayoclinic.org/epilepsyemail",
                    description: 'An email subscription and informational site that I built in HTML, CSS, and Oracle Eloqua. I also built the emails for this service as well.'
                },
                {
                    title: "Patterns of Evidence",
                    image: 'poe.png',
                    link: "https://patternsofevidence.com/",
                    description: 'I built this site from the ground-up using WordPress Gutenberg. I used the WordPress API extensively and learned the power of using WP Template.'
                },
                {
                    title: "Ready for more?",
                    image: '',
                    link: null,
                    description: "Due to client NDA's, I'm not able to publicly display all of my work. If you would like to learn more, feel free to contact me and I would love to provide a description of some of my other work."
                }
            ]
        };
    },
    methods: {}
};
</script>