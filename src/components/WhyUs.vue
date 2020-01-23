<template>
  <div id="why-us" class="container why-us-section space-top">
    <h2 data-aos="fadeInUp" class="display-text font-weight-bold center-text">Why do business with us?</h2>
    <div data-aos="fadeInUp" class="col-lg-9 mx-auto">
      <p class="mt-4 delay-1x lead">
        We are not special, we are just your average crypto mallam, but what sets us apart is how easy it is to do business with us. With our 24/7 live chat service, you can rest
        assured that we're always ready to transact.
      </p>
    </div>
    <div class="col-md-10 col-lg-10 mt-5 mx-auto">
      <div class="d-md-flex justify-content-between">
        <div data-aos="fadeInUp" class="delay-2x col-md-4 col-sm-12 fast ">
          <img class="why-us-icons one" src="../assets/images/online-support.svg" alt="live-chat" />
          <p><strong>24 hrs live chat</strong></p>
        </div>
        <div data-aos="fadeInUp" class="delay-3x col-md-4 col-sm-12 fast mt-sm-5">
          <img class="img-fluid why-us-icons two" src="../assets/images/online-discount.svg" alt="discount icon" />
          <p><strong>The best rates on the market</strong></p>
        </div>
        <div data-aos="fadeInUp " class="delay-4x col-md-4 col-sm-12 fast">
          <img class="why-us-icons three" src="../assets/images/mobile-payment.svg" alt="fast transactions" />
          <p><strong>Seamless transactions</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyUs'
};
</script>

<style lang="scss" scoped>
.why-us-icons {
  width: 80px;
  display: block;
  margin: auto;
  margin-top: 30px;

  & + p {
    text-align: center;
    margin-top: 15px;
  }

  &.one {
    width: 130px;
  }
  &.two {
    width: 85px;
  }
  &.three {
    width: 100px;
  }
}
</style>
