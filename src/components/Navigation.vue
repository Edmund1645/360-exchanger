<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/logos/360 EXCHANGER 350X170.svg" alt />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <unicon name="bars" fill="var(--thick-purple)" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#services">Our Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#why-us">Why us?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Social media
              <unicon name="angle-down" fill="currentColor" />
            </a>
            <div class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                <span class>
                  <unicon name="whatsapp" fill="#43d854" />
                </span>
                <span class="ml-2">Whatsapp</span>
              </a>
              <a class="dropdown-item" href="#">
                <unicon name="twitter" fill="#00aced" />
                <span class="ml-2">Twitter</span>
              </a>
              <a class="dropdown-item" href="#">
                <span class>
                  <unicon name="instagram-alt" fill="#d6249f" />
                </span>
                <span class="ml-2">Instagram</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.show > .dropdown-menu {
  display: block;
  opacity: 1;
  max-height: 209px;
  visibility: visible;
}

.dropdown-menu {
  display: block;
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  border: none;
}
a.dropdown-toggle::after {
  display: none;
}
a.dropdown-item:hover {
  background: var(--mid-purple);
  color: var(--white);
  transition: background 0.2s, color 0.2s;
}
</style>
