<script>
  import List from "./List.svelte";
  import { peran } from "./data";
</script>

<section id="services" class="parallax-section-1">
  <div class="container">
    <div class="col-md-12 text-center text-white">
      <h3 class="section-title">Nilai-Nilai Inti.</h3>
      <p class="subheading wow fadeInUp"></p>
    </div>
    <div class="row features-row wow fadeInUp" id="peranList">
      <List data={peran} />
    </div>
  </div>
</section>

<style>
  #peranList {
    display: flex;
    flex-wrap: wrap;
  }
</style>
