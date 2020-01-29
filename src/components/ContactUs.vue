<template>
  <div id="contact" class="container contact-section space-top mb-5">
    <h2 data-aos="fade-up" class="display-text center-text font-weight-bold">Contact Us?</h2>
    <p data-aos="fade-up" data-aos-delay="300" class="lead center-text">Need to make enquiries or reach out to us? Do shoot us an email by filling the form below.</p>
    <div class="form-section col-12 col-md-10 col-lg-8 shadow mx-auto p-3 p-md-5  rounded-lg">
      <form id="fs-frm" name="360-Exchanger-form" accept-charset="utf-8" action="https://formspree.io/darlington@360exchanger.com" method="post">
        <fieldset id="fs-frm-inputs">
          <!-- name -->
          <div class="form-group">
            <label for="full-name">
              Full Name
              <span class="text-danger">*</span>
            </label>
            <input type="text" class="form-control" name="name" id="full-name" placeholder="Mark Jones" required />
          </div>

          <!-- email -->
          <div class="form-group">
            <label for="email-address">
              Email Address
              <span class="text-danger">*</span>
            </label>
            <input type="email" class="form-control" name="_replyto" id="email-address" placeholder="mark_jones@example.com" required />
          </div>

          <div class="form-group">
            <label for="message">Message <span class="text-danger">*</span></label>
            <textarea rows="5" class="form-control" name="message" id="message" placeholder="Hello, I'm Mark and I'm look to make enquiries..." required></textarea>
          </div>
          <input type="hidden" name="_next" value="https://360exchanger.com/#contact" />
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
        </fieldset>
        <!-- <input type="submit" value="Submit" /> -->
        <button type="submit" class="btn btn-lg btn-block send-button">
          <span class="text">
            Shoot
            <unicon name="fast-mail" width="29" height="29" fill="currentColor" />
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
};
</script>

<style lang="scss" scoped>
.contact-section {
  background: url('../assets/images/svg-blob-1.svg');
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 425px) {
    background-position: right 20px;
  }
}
.send-button {
  border: 1px solid var(--thick-purple);
  color: var(--thick-purple);
  cursor: pointer;
  transition: color 0.3s, background 0.3s;
  position: relative;

  span {
    position: relative;
    z-index: 2;
  }

  &::before {
    position: absolute;
    display: block;
    visibility: hidden;
    content: '';
    height: 100%;
    width: 0%;
    transition: width 0.3s;
    z-index: 1;
    background: var(--thick-purple);
    top: 0;
    left: 0;
    border-top-right-radius: 25rem;
    border-bottom-right-radius: 25rem;
  }

  &:hover {
    color: var(--white);
    &::before {
      visibility: visible;
      width: 100%;
      transition: width 0.5s, border-top-right-radius 0.3s 0.2s, border-bottom-right-radius 0.3s 0.2s;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
.form-section {
  background: var(--lighter-grey);
}
</style>
