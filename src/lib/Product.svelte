<script>
  import List from "./List.svelte";
  import { produkDanLayanan } from "./data";
</script>

<section id="business" class="parallax-section-1">
  <div class="container">
    <div class="col-md-12 text-center text-white">
      <h3 class="section-title">Produk & Layanan.</h3>
      <p class="subheading wow fadeInUp"></p>
    </div>
    <div class="row features-row wow fadeInUp" id="produkList">
      <List data={produkDanLayanan} />
    </div>
  </div>
</section>
