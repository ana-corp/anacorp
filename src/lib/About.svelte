<script>
  import List from "./List.svelte";

  const sejarahPerusahaan = `Perusahaan Kami berdiri pada tanggal 20 September 2019 dengan nama lengkap PT.ALENA NUSANTARA ABADI. Awalnya, Perusahaan Kami hanya melayani Pasar lokal dengan Fokus Pada Pengadaan hasil bumi dan Kimia (Asam Sulfat dan Coustik soda Liquid). 
Untuk Sektor Industri kecil dan menengah. Namun, dengan komitmen untuk memberikan layanan 
berkualitas dan Kepuasan konsumen, kami berhasil tumbuh pesat dan Memperluas jangkauan layanan kami. Pada tahun-tahun berikutnya, Kami Secara Progresif mengembangkan dan menambahkan layanan dan Jasa. Perlahan Kami dalam bidang Penyalur tenaga kerja dan Sudah bekerja Sama dengan beberapa Perusahaan besar 
Selain itu Perusahaan Kami dalam waktu dekat ini 
akan mengeluarkan Produk dalam bentuk Parfume, Karena menurut kami Pada Jaman Ini Parfume Sudah menjadi Kebutuhan publik,
Kini PT. ALENA NUSANTARA ABADI telah menjadi Perusahaan Yang diakui 
dalam industri Pengadaan barang (hasil bumi dan kimia) dan Jasa Penyalur tenaga kerja. 
Sejak tahun 2019 hingga Saat ini Kami Selalu Komitmen memberikan Kualitas dan Jasa Pelayanan terbaik 

`;

  const visi = [
    {
      title: "Kualitas",
      detail:
        "Menjadi mitra kepercayaan dan pilihan utama dalam penyediaan barang dan jasa yang berkualitas dan profesional",
    },
  ];

  const misi = [
    {
      title: "Integritas",
      detail:
        "Memberikan layanan pengadaan barang dan jasa yang unggul dan terpercaya kepada pelanggan dengan profesionalisme dan integritas tinggi",
    },
    {
      title: "Komitmen",
      detail:
        "Menjalin kemitraan strategis dengan pemasok terkemuka dan pelaku bisnis lainnya untuk mencapai pertumbuhan bersama",
    },
    {
      title: "Kontribusi jangka panjang",
      detail:
        "Menjujung tinggi tanggung jawab perusahaan dengan berkontribusi pada pembangunan berkelanjutan dan lingkungan yang sehat",
    },
  ];
</script>

<section id="about" class="parallax-section-1">
  <div class="container">
    <div class="col-md-12 text-center wow fadeInUp">
      <h3 class="section-title">Tentang Perusahaan.</h3>
      <p class="subheading" id="overview"></p>
    </div>

    <!-- VISI -->
    <div>
      <h3 class="wow fadeInUp text-center visi">VISI</h3>
      <div class="row features-row wow fadeInUp" id="visiList">
        <List data={visi} />
      </div>
    </div>

    <!-- MISI -->
    <div>
      <h3 class="wow fadeInUp text-center visi">MISI</h3>
      <div class="row features-row wow fadeInUp" id="misiList">
        <List data={misi} />
      </div>
    </div>
  </div>

  <section>
    <div class="container">
      <div class="row">
        <div class="text-left about-text" style="padding: 4rem;">
          <h3 class="wow fadeInUp">History</h3>
          <p class="wow fadeInUp" id="sejarah">
            {sejarahPerusahaan}
          </p>
          <p class="wow fadeInUp">
            <a href="#contact" class="btn btn-primary btn-md">Hubungi Kami</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</section>
