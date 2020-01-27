<template>
  <div class="footer space-top">
    <div class="container">
      <div class="footer-content">
        <div class="row">
          <div class="col-md-3">
            <h4>Quick Links</h4>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#services">Our Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#why-us">Why Us?</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Support</h4>
          </div>
          <div class="col-md-3">
            <h4>Social Media</h4>
          </div>
        </div>
      </div>

      <hr />
      <p class="text-center">
        <strong>360Exchanger &copy; Copyright {{ new Date().getFullYear()}}. All Rights Reserved</strong>
      </p>
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
  height: 500px;
  background: url('../assets/images/wavy-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 425px) {
  }
}
.footer-content {
  padding: 1rem;
  height: 80px;
  margin-bottom: 45px;
}
</style>