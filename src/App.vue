<template>
  <div id="app">
    <Header />
    <Services />
    <WhyUs />
    <Customers />
    <ContactUs />
    <Faq />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Customers from './components/Customers';
import ContactUs from './components/ContactUs';
import Faq from './components/Faq';
import Footer from './components/Footer';
export default {
  name: 'app',
  components: {
    Header,
    Services,
    WhyUs,
    Customers,
    ContactUs,
    Faq,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  background-image: url('./assets/images/vector-bg.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0px 100px;

  @media screen and (max-width: 425px) {
    background-size: 110%;
    background-position: 0 420px;
  }
}
</style>
