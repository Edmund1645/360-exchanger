<template>
  <header>
    <Navigation />

    <!-- main header content -->
    <div class="container">
      <div class="row position-relative mx-auto header-section">
        <div class="col-sm-10 col-lg-6 pt-4 position-relative">
          <!-- animated logos -->
          <div class="animated-container bitcoin">
            <img
              class="animated-logos animated-bitcoin"
              src="../assets/images/Bitcoin.svg"
              alt="bitcoin logo"
            />
          </div>
          <div class="animated-container eth">
            <img
              class="animated-logos animated-eth"
              src="../assets/images/Ethereum.svg"
              alt="ethereum logo"
            />
          </div>
          <div class="animated-container ripple">
            <img
              class="animated-logos animated-ripple"
              src="../assets/images/Ripple.svg"
              alt="ripple logo"
            />
          </div>

          <!-- normal content -->
          <h1 class="display-text font-weight-bold animated fadeInDown">Convert cash</h1>
          <h1 class="display-text font-weight-bold animated delay-1x fadeInDown">into crypto,</h1>
          <h1 class="display-text font-weight-bold animated delay-2x fadeInDown">with ease.</h1>
          <p
            class="lead animated fadeInDown delay-3x"
          >A better way to sell or cash out cryptocurrencies instantly.</p>
        </div>
        <div class="col-md-6 col-12 col-lg-5 mx-auto ml-md-auto pt-md-4">
          <!-- <img
            class="img-fluid"
            src="../assets/images/currency conversion.svg"
            alt="Cryptocurrency conversion"
          />-->
          <img
            class="img-fluid deal-image"
            src="../assets/images/undraw_business_deal_cpi9.svg"
            alt="deal"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation';
export default {
  name: 'Header',
  components: {
    Navigation
  }
};
</script>

<style scoped lang="scss">
.header-section {
  margin-top: 5rem;
}
.animated-container {
  display: inline-block;
  position: absolute;
  z-index: -1;

  &.bitcoin {
    top: -20px;
  }
  &.eth {
    top: 30px;
    right: 30px;
  }
  &.ripple {
    bottom: 50px;
    left: 50%;
  }
}
.animated-logos {
  width: 40px;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.animated {
  &-bitcoin {
    animation-duration: 10s;
  }
  &-eth {
    // animation-delay: 1000ms;
    animation-duration: 11s;
  }
  &-ripple {
    // animation-delay: 3000ms;
    animation-duration: 9s;
  }
}

.display-text {
  font-size: 4.4rem;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate(-50px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(-50px) rotate(-360deg);
  }
}
@media screen and (max-width: 425px) {
  .display-text {
    font-size: 3.5rem;
  }
}
</style>
