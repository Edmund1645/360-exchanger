<template>
  <div id="services" class="container services-section space-top">
    <div class="row">
      <div class="col-md-10 col-lg-6 m-md-auto col-sm-12">
        <h2 data-aos="fadeInUp" class="display-text font-weight-bold">What do we offer?</h2>
        <p data-aos="fadeInUp" class="mt-4 delay-1x lead">
          We offer you, our customers an opportunity to exchange your cryptocurrencies at the best rates on the market. We buy
          <strong class="font-weight-bold">Bitcoin, Ethereum and Litecoin</strong> and with our live chat feature and hassle free transactions, you would certainly be coming back
          for more!
        </p>
      </div>
      <div class="col-md-10 mt-5 mx-md-auto col-lg-5 ml-lg-5 col-sm-8">
        <div class="coin-card-container">
          <div data-aos="fadeInUp" class="coin-card one rounded-lg">
            <img class="img-fluid" src="../assets/images/icons8-litecoin.svg" alt="ltc logo" />
            <p class="text-center bolder text-white mt-3">
              <strong>Litecoin</strong>
            </p>
          </div>
          <div data-aos="fadeInUp" class="coin-card delay-1x two rounded-lg">
            <img class="img-fluid" src="../assets/images/icons8-bitcoin.svg" alt="bitcoin logo" />
            <p class="text-center bolder text-white mt-3">
              <strong>Bitcoin</strong>
            </p>
          </div>
          <div data-aos="fadeInUp" class="coin-card delay-2x three rounded-lg">
            <img class="img-fluid" src="../assets/images/icons8-ethereum.svg" alt="eth logo" />
            <p class="text-center bolder text-white mt-3">
              <strong>Ethreuem</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
};
</script>

<style lang="scss" scoped>
.coin-card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 10px;
  height: 250px;
}
.coin-card {
  height: 100%;
  width: 100%;
  padding: 10px;
  background: var(--white);
  box-shadow: 0 0.3rem 3rem var(--mid-purple);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-20px);
    transition: transform 0.3s;
  }

  & img {
    width: 60%;
    margin: auto;
    display: block;
  }
  // margin-right: 10px;

  &.one {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 4;
    background-color: #fbab7e;
    background-image: linear-gradient(180deg, #ff9f22 20%, #f7ce68 100%);
  }
  &.two {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: #fee140;
    background-image: linear-gradient(0deg, #fee140 0%, #ff8a8c 100%);
  }
  &.three {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    background: linear-gradient(180deg, rgb(25, 131, 230) 34%, rgba(0, 212, 255, 1) 97%);
  }
}
</style>
