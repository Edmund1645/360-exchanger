<template>
  <div id="why-us" class="container why-us-section space-top">
    <h2 data-aos="fadeInUp" class="display-4 font-weight-bold text-center">Why do business with us?</h2>
    <div data-aos="fadeInUp" class="col-lg-9 mx-auto">
      <p class="mt-4 delay-1x lead">
        We are not special, we are just your average crypto mallam, but what sets us apart is how easy it is to do business with us.
        With our 24/7 live chat service, you can rest assured that we're always ready to transact.
      </p>
    </div>
    <div class="col-md-10 col-lg-8 mt-5 mx-auto">
      <div class="d-md-flex justify-content-around">
        <div data-aos="fadeInUp" class="delay-2x col-md-4 col-sm-12">
          <img class="why-us-icons one" src="../assets/images/live support.svg" alt="live-chat" />
          <p>Online Live Chat</p>
        </div>
        <div data-aos="fadeInUp" class="delay-3x col-md-4 col-sm-12">
          <img class="img-fluid why-us-icons two" src="../assets/images/Online Discount.svg" alt="discount icon" />
          <p>Best Rates</p>
        </div>
        <div data-aos="fadeInUp " class="delay-4x col-md-4 col-sm-12">
          <img class="why-us-icons three" src="../assets/images/Mobile Payment.svg" alt="fast transactions" />
          <p>Seamless transactions</p>
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
.why-us-icons{
  width: 50px;
  display: block;
  margin: auto;
  margin-top: 30px;

  &+p {
    text-align: center;
    margin-top: 15px;
  }

  &.one{
    width: 100px
    
  }
  &.two{
    width: 80px;
  }
  &.three{
    width: 100px
  }
}
</style>