<template>
  <section class="bg-white py-5"
  id="my-beliefs"
  v-observe-visibility="{
      callback: $store.getters.visibilityChanged,
      throttle: 300,
      intersection: $store.state.intersectionOptions
  }">
    <div class="container">
      <h2 class="text-white text-center mb-4 has-fresh-line">My Core Beliefs</h2>
      <div class="row text-center">
        <div
          v-for="(belief, index) in beliefs"
          :key="index"
          class="h4 w-100 mb-3"
          target="_blank"
        >
          <a :href="belief.link" class="text-white" target="_blank">{{ belief.name }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      beliefs: [
        {
          name: "Pursue Passions, Not Paychecks",
          link: "https://www.quora.com/Is-getting-rich-worth-it-9?redirected_qid=642759"
        },
        {
          name: "Don't Take Yourself Too Seriously",
          link: "https://media.vanityfair.com/photos/54284ab006f2391147572a8b/master/w_1600%2Cc_limit/image.jpg"
        },
        {
          name: "Read Every Day",
          link: "https://www.huffpost.com/entry/the-reading-habits-of-ult_b_9688130"
        },
        {
          name: "Make a Difference",
          link: "https://dev.to/amandasopkin/how-we-can-make-a-difference-as-software-engineers-2di"
        },
        {
          name: "Prioritize the Customer",
          link: "https://jacks.tumblr.com/post/33785796042/lets-reconsider-our-users"
        },
        {
          name: "Be grateful and appreciate what you have",
          link: "https://kentcdodds.com/blog/how-gratitude-can-make-you-a-better-developer"
        },
        {
          name: "Listen to A State of Trance!",
          link: "https://www.youtube.com/channel/UCu5jfQcpRLm9xhmlSd5S8xw"
        }
      ]
    };
  },
  methods: {}
};
</script>
