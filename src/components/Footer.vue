<template>
  <div class="footer space-top">
    <div class="container">
      <div class="footer-content">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="col-md-3 mb-3">
            <h4>Quick Links</h4>
            <ul class="nav flex-column p-0">
              <li class="nav-item">
                <a class="nav-link" href="#services">Our Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#why-us">Why Us?</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-3">
            <h4>Support</h4>
            <ul class="nav flex-column p-0">
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-3">
            <h4>Social Media</h4>
            <ul class="nav flex-column p-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Whatsapp</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Twitter</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <p class="text-center m-0">
          <strong>360Exchanger &copy; Copyright {{ new Date().getFullYear() }}. All Rights Reserved</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
.footer {
  background: url('../assets/images/wavy-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  padding-top: 15rem;
  padding-bottom: 5rem;
}
ul.nav li.nav-item a.nav-link {
  padding-left: 10px;
  color: white;

  &:hover {
    text-decoration: underline;
  }
}
</style>
