<script>
  import { avatar, struktur } from "./data";
</script>

<section id="team" class="parallax-section-1">
  <div class="container">
    <div class="col-md-12 text-center wow fadeInUp">
      <h3 class="section-title">Struktur.</h3>
      <p class="subheading"></p>
    </div>
    <div class="row features-row wow fadeInUp" id="strukturList">
      {#each struktur as s}
        <div class="col-sm-4 team-member">
          <div class="effect effects wow fadeInUp">
            <div class="img">
              <img
                src={s.img || avatar(s.img, s.name)}
                class="img-responsive"
                alt=""
                style="width:100%;aspect-ratio:1;object-fit:contain;"
              />
            </div>
          </div>
          <div class="member-info wow fadeInUp">
            <h4>{s.name || "Nama"}</h4>
            <h5 class="highlight">{s.title || "Jabatan"}</h5>
            <p style="text-align:left">{s.detail || "detail ".repeat(16)}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #strukturList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #strukturList > div img:hover {
    scale: 1;
  }
</style>
