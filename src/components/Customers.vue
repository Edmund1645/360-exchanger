<template>
  <div id="customers" class="container space-top">
    <h2 data-aos="fade-up" class="display-text center-text font-weight-bold">What our customers think about us</h2>
    <div class="col-sm-12 col-md-10 mx-md-auto px-0">
      <p data-aos="fade-up" data-aos-delay="300" class="lead center-text">
        Still don't think we're worth your time? fine, but don't take our word for it. Hear what our lovely customers have to say about us.
      </p>
    </div>
    <div class="carousel-container col-sm-11 col-md-8 shadow-sm rounded-lg mx-auto mt-5">
      <carousel
        :per-page="1"
        :autoplay="true"
        :autoplay-hover-pause="false"
        :autoplay-timeout="7000"
        :loop="true"
        :pagination-enabled="false"
        pagination-color="var(--light-purple)"
        pagination-active-color="var(--thick-purple)"
        pagination-position="bottom-overlay"
      >
        <slide v-for="(testimonial, index) in testimonials" :key="index">
          <TestimonialCard :testimonial="testimonial" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import TestimonialCard from '../components/TestimonialCard';
export default {
  name: 'customers',
  data() {
    return {
      testimonials: [
        {
          name: 'Edmund Ekott',
          text: 'Everything went so smoothly the first time I did business with 360Exchanger. They are always ready to buy. I love it!!!'
        },
        {
          name: 'Musa Ibrahim',
          text: "At first I wasn't sure about doing business with them. I decided to try them and I found it very nice doing business with them. "
        },
        {
          name: 'David Josiah',
          text: 'I will 100% recommend 360Exchanger to anyone who wants to sell cryptocurrencies. Their rates are very reasonable.'
        },
        {
          name: 'Esther Monday',
          text: '360Exchanger has become my number one crypto buyer. I really enjoy doing business with them.'
        }
      ]
    };
  },
  components: {
    TestimonialCard
  }
};
</script>

<style lang="scss" scoped>
.carousel-container {
  height: 250px;
  background: var(--lighter-grey);
}
</style>
