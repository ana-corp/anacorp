<script>
  const navigation = [
    "Profil",
    "Bisnis",
    "Struktur",
    "Peran",
    "Testimoni",
    "Kontak",
  ];
</script>

<!-- <div id="loader">
  <div class="spinner">
    {#each Array(16) as _, i}
      <div class="cube cube{i}"></div>
    {/each}
  </div>
</div> -->

<header>
  <nav class="navbar navbar-default navbar-alt">
    <div id="container">
      <div class="navbar-header">
        <a class="navbar-brand to-top" rel="home" href={"#"}>
          <!-- TODO : Change Logo -->
          <img src="img/assets/logo.png" alt="Visual" class="logo-big" />
          <!-- <img src="img/assets/logo.png" alt="Visual" class="logo-big"> -->
        </a>
        <button
          type="button"
          class="navbar-toggle shadowbg"
          data-toggle="collapse"
          data-target="#main-nav"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="main-nav">
        <ul
          class="nav navbar-nav navbar-right"
          style="background-color: rgba(0, 0, 0, .3);"
        >
          <li class="to-section">
            <a href="#about"> Profil </a>
          </li>
          <li class="to-section">
            <a href="#business"> Produk & Layanan </a>
          </li>
          <li class="to-section">
            <a href="#team"> Struktur </a>
          </li>
          <li class="to-section">
            <a href="#services"> Nilai Inti </a>
          </li>

          <li class="to-section">
            <a href="#contact"> Kontak </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
