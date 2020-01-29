<template>
  <div class="testimonial-card rounded-lg py-4 px-sm-0 col-sm-12 col-md-10 mx-auto my-4 mb-5">
    <p class="text-center font-italic testimonial-text">"{{ testimonial.text }}"</p>
    <br />
    <p class="text-center text-muted">
      <em>- {{ testimonial.name }}</em>
    </p>
  </div>
</template>

<script>
export default {
  props: ['testimonial']
};
</script>

<style lang="scss" scoped>
.testimonial-card {
  height: 150px;
}

.testimonial-text {
  font-size: 1.2rem;
}
</style>
