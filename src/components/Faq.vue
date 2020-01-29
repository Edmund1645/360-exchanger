<template>
  <div class="container space-top" id="faq">
    <h2 data-aos="fade-up" class="display-text center-text font-weight-bold">Questions asked frequently</h2>
    <p data-aos="fade-up" data-aos-delay="300" class="lead center-text">Need to ask some questions? we've got you. Here are some questions frequently asked by our customers.</p>
    <div class="faqs px-0 col-md-10 mx-md-auto">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header py-md-3" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <div class="question">
              <h5 class="mb-0">How can I sell my cryptocurrency?</h5>
              <unicon name="plus" fill="var(--thick-purple)" />
            </div>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <p>
                You can sell your cryptocurrencies by either chatting with us on the website or reaching us on our social media handles. To use the live chat, just click the chat
                icon on the bottom right of your screen.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header py-md-3" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <div class="question">
              <h5 class="mb-0">What kind of crypto do you buy?</h5>
              <unicon name="plus" fill="var(--thick-purple)" />
            </div>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              <p>At this moment, we only buy <strong>Bitcoin</strong>, <strong>Litecoin</strong> and <strong>Ethereum.</strong></p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header py-md-3" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <div class="question">
              <h5 class="mb-0">What are the modes of payment?</h5>
              <unicon name="plus" fill="var(--thick-purple)" />
            </div>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              <p>You can only receive payments via bank transfers for now.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq'
};
</script>

<style lang="scss" scoped>
.question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
</style>
