<script>
  import iconContainer from '$assets/gfx_icon-container.svg';

  export let urls = [
    ["MyChart","https://mychart.uwhealth.org/"],
    ["Patient & Visitor Guide", "https://patient.uwhealth.org/patient-family-visitor-guide"],
    ["Gift Shop", "https://secure.uwhealth.org/giftshop/index?shop=main"],
    ["Guest Services", "tel:608-263-0315"]
  ];

  export let qrCodes = [];

</script>

<div class="root">
  <h3>
    Self-Service Links
  </h3>
  <div class="body">
    {#each urls as [title, url], i}
      <div class="qr-container">
        <img alt="" src={qrCodes[i]}/>
        {title}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import '../styles/functions';

  .root {
    border: .5px solid rgba(white, .8);
    padding: space(2);
  }

  h3 {
    font-family: 'bennet-banner';
    font-weight: 900;
    font-size: type(9);
    line-height: space(9.25);
    font-size: type(3);
    line-height: space(3.5);
    padding-bottom: space(1);
    border-bottom: .5px solid rgba(white, .8);
  }

  .body {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: space(10);
    gap: space(2);
    text-align: center;
  }

  img {
    display: block;
    max-width: 100%;
  }

</style>
