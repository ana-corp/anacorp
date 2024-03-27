import { c as create_ssr_component, d as each, e as escape, v as validate_component, f as add_attribute } from "../../chunks/ssr.js";
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(data, (d) => {
    return `<div class="col-md-4 col-sm-12 feature-column"><div class="feature-info"><h4>${escape(d.title || "Title")}</h4> <p class="feature-description">${escape(d.detail || "detail ".repeat(20))}</p></div> </div>`;
  })}`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      detail: "Menjadi mitra kepercayaan dan pilihan utama dalam penyediaan barang dan jasa yang berkualitas dan profesional"
    }
  ];
  const misi = [
    {
      title: "Integritas",
      detail: "Memberikan layanan pengadaan barang dan jasa yang unggul dan terpercaya kepada pelanggan dengan profesionalisme dan integritas tinggi"
    },
    {
      title: "Komitmen",
      detail: "Menjalin kemitraan strategis dengan pemasok terkemuka dan pelaku bisnis lainnya untuk mencapai pertumbuhan bersama"
    },
    {
      title: "Kontribusi jangka panjang",
      detail: "Menjujung tinggi tanggung jawab perusahaan dengan berkontribusi pada pembangunan berkelanjutan dan lingkungan yang sehat"
    }
  ];
  return `<section id="about" class="parallax-section-1"><div class="container"><div class="col-md-12 text-center wow fadeInUp" data-svelte-h="svelte-1nory47"><h3 class="section-title">Tentang Perusahaan.</h3> <p class="subheading" id="overview"></p></div>  <div><h3 class="wow fadeInUp text-center visi" data-svelte-h="svelte-1ybwsth">VISI</h3> <div class="row features-row wow fadeInUp" id="visiList">${validate_component(List, "List").$$render($$result, { data: visi }, {}, {})}</div></div>  <div><h3 class="wow fadeInUp text-center visi" data-svelte-h="svelte-1y9wd76">MISI</h3> <div class="row features-row wow fadeInUp" id="misiList">${validate_component(List, "List").$$render($$result, { data: misi }, {}, {})}</div></div></div> <section><div class="container"><div class="row"><div class="text-left about-text" style="padding: 4rem;"><h3 class="wow fadeInUp" data-svelte-h="svelte-nmjkkk">History</h3> <p class="wow fadeInUp" id="sejarah">${escape(sejarahPerusahaan)}</p> <p class="wow fadeInUp" data-svelte-h="svelte-6559xy"><a href="#contact" class="btn btn-primary btn-md">Hubungi Kami</a></p></div></div></div></section></section>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { i } = $$props;
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  return `${i === "email" ? `<svg id="email" width="1.5em" style="vertical-align: middle;" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>` : `${i === "phone" ? `<svg id="phone" width="1.5em" style="vertical-align: middle;" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>` : `<svg id="whatsapp" fill="currentColor" height="1.5em" style="vertical-align: middle;" width="1.5em" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.8 -30.8 369.60 369.60" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="XMLID_468_"><path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path><path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path></g></g></svg>`}`}`;
});
const namaPerusahaan = "Alena Nusantara Abadi";
const slides = [
  {
    text: "ALENA NUSANTARA ABADI",
    img: "img/slides/slide1.jpeg"
  },
  {
    text: "KOMITMEN, KUALITAS, INTEGRITAS TINGGI",
    img: "img/slides/slide2.jpeg",
    img_position: "center bottom"
  },
  {
    text: "ALENA NUSANTARA ABADI",
    img: "img/slides/slide3.jpeg"
  },
  {
    text: "KOMITMEN, KUALITAS, INTEGRITAS TINGGI",
    img: "img/slides/slide4.jpeg"
  }
];
const motoPerusahaan = "Berinovasi dan mengadopsi teknologi terbaru untuk memajukan perusahaan";
const alamat = "Jalan Raya Narogong, Desa Kembang kuning RT. 015/005, Kec. Klapanunggal - Kab. Bogor (16710)";
const email = "alenanusantaraabadi@gmail.com";
const kontak = [
  {
    type: "whatsapp",
    detail: "+6281356965532"
  },
  {
    type: "whatsapp",
    detail: "+6281380296668"
  }
];
const produkDanLayanan = [
  {
    title: "Pengadaan Barang",
    detail: `Menyediakan berbagai jenis hasil bumi dan bahan kimia. Mulai dari bahan baku hingga produk jadi untuk berbagai sektor industri `
  },
  {
    title: "Jasa Profesional",
    detail: `Kami menyediakan layanan penyaluran tenaga Kerja untuk setiap perusahaan, Seperti Perawatan Peralatan, Perbaikan, konsultasi teknis, dan masih banyak lagi.  
        `
  },
  {
    title: "Konsultasi Pengadaan",
    detail: `Memberikan konsultasi ahli dalam Perencanaan dan Strategi Pengadaan Untuk membantu Pelanggan mencapai efisiensi, dan efektivitas.`
  },
  {
    title: "Pemeliharaan & Dukungan Pelanggan",
    detail: `Menyediakan layanan purna jual, perawatan, dan dukungan teknis untuk memastikan kepuasan pelanggan atau mitra`
  }
];
const peran = [
  {
    title: "Kualitas",
    detail: `Kami berkomitmen untuk memberiken Produk dan layanan berkualitas tinggi kepada Pelanggan kami. Kualitas adalah prioritas utama dalam Setiap langkah operational kami`
  },
  {
    title: "Kepuasan pelanggan dan mitra",
    detail: `Pelaggan/mitra adalah aset berharga kami. Kami selalu berusaha Untuk memahami dan memenuhi kebutuhan mereka dengan baik, Serta memberikan pelayanan terbaik `
  },
  {
    title: "Integritas",
    detail: `Kami bertindak dengan jujur, adil dan etis dalam Setiap aspek bisnis kami. menjaga Kepercayaan pelanggan, mitra, dan karyawan `
  },
  {
    title: "Inovasi",
    detail: `Kami selalu mencari cara baru untuk meningkatkan layanan kami, berinovasi, dan mengadopsi teknologi terbaru untuk memajukan perusahaan`
  },
  {
    title: "Kemitraan",
    detail: `Kami memahami pentingnya kerjasama yang kuat dengan pelanggan, pemasok, mitra bisnis lainnya. Kami percaya bahwa kemitraan yang saling menguntungkan adalah kunci kesuksesan jangka panjang.`
  }
];
const struktur = [
  {
    img: "img/struktur/1.png",
    name: "Khaerunisa",
    title: "Direktur Utama",
    detail: "Bertanggung jawab atas visi, arah, dan strategi perusahaan. Memimpin tim manajemen dan memastikan kelancaran operasional perusahaan"
  },
  {
    img: "img/struktur/2.png",
    name: "Riansyahroni",
    title: "Wakil Direktur",
    detail: "Bertanggung jawab atas proses pengadaan barang dan jasa mulai dari pemilihan, pemasok, negosiasi, hingga pengiriman dan penerimaan barang"
  },
  {
    img: "img/struktur/3.png",
    name: "Zakiyatul Muhandisa",
    title: "Divisi Keuangan",
    detail: "Menangani aspek keuangan perusahaan, termasuk pengelolaan anggaran, akuntansi, dan pelapor keuangan"
  },
  {
    img: "img/struktur/4.png",
    name: "Nurul Aisa",
    title: "Divisi PPIC",
    detail: "Bertugas mengelola sumber daya  manusia perusahaan, termasuk perekrutan, pelatihan, dan pengembangan karyawan"
  },
  {
    img: "img/struktur/5.png",
    name: "Ogie Permana",
    title: "Divisi Marketing",
    detail: `Memiliki strategi pemasaran yang komprehensif.
        Dan memastikan semua strategi pemasaran mulai dari saluran distribusi.
        ( video, blog, media cetak, media sosial, Dll )
        Berjalan selaras menyampaikan pesan yang sama kepada Mitra dan calon mitra.`
  }
];
const avatar = (img = null, name = "John Doe", bg = "random") => {
  if (img)
    return img;
  return `https://ui-avatars.com/api/?name=${(name || "John Doe").split(" ").join("+")}&background=${bg || "random"}&size=256`;
};
const ContackInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const kontakPrefix = {
    phone: "tel:",
    email: "mailto:",
    whatsapp: "https://wa.me/"
  };
  const kt = [...kontak, { type: "email", detail: email }];
  return `${each(kt, (k) => {
    return `<a title="${escape(k.type, true) + " " + escape(k.detail, true)}" href="${escape(kontakPrefix[k.type] || "", true) + escape(k.detail, true)}" style="display:flex; gap:1rem; color:black; font-size:18px; margin-bottom:0.5em">${validate_component(Icon, "Icon").$$render($$result, { i: k.type }, {}, {})} <span>${escape(k.detail)}</span> </a>`;
  })}`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subject = "";
  return `<section id="contact" style="padding-bottom: 8rem;"><div class="container"><div class="row"><div class="col-md-12 text-center" data-svelte-h="svelte-8s6zau"><h3 class="section-title wow fadeInUp">Hubungi Kami.</h3> <p class="subheading wow fadeInUp"></p></div> <div class="d-flex"><div id="contactform" class="col-md-7 wow fadeInUp"><div><input name="subject" type="text" id="subject" placeholder="Subject"${add_attribute("value", subject, 0)}></div> <div><textarea name="comments" cols="40" rows="3" id="comments" placeholder="Message">${escape("")}</textarea> <button class="btn btn-primary btn-md" id="submit" style="margin-bottom: 6rem;" data-svelte-h="svelte-1lxhfjj">Kirim Pesan</button></div></div> <div class="col-md-5 wow fadeInLeft"><h4 data-svelte-h="svelte-15a9i2">Alamat :</h4> <address style="font-size: 18px; display: flex;gap: 1rem;" title="Alamat"><span data-svelte-h="svelte-1ggbwt5"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" height="1.5em" width="1.5em" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.28 29.28 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0zm0 13.9c8.806 0 15.808 6.986 15.808 15.766c0 8.78-7.002 15.763-15.808 15.763c-8.805 0-15.81-6.982-15.81-15.763c0-8.78 7.005-15.765 15.81-15.765z" fill="currentColor"></path><path d="M68.913 48.908l-.048.126c.015-.038.027-.077.042-.115l.006-.011z" fill="currentColor"></path><path d="M34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143c-17.673 0-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174c-.645-1.114-1.294-2.226-1.94-3.341z" fill="currentColor"></path></g></svg></span> <span id="alamat">${escape(alamat)}</span></address> <h4 data-svelte-h="svelte-cpa3pc">Kontak :</h4> <div id="kontak">${validate_component(ContackInfo, "ContackInfo").$$render($$result, {}, {}, {})}</div></div></div></div></div></section>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <header data-svelte-h="svelte-1mjhirn"><nav class="navbar navbar-default navbar-alt"><div id="container"><div class="navbar-header"><a class="navbar-brand to-top" rel="home"${add_attribute("href", "#", 0)}> <img src="img/assets/logo.png" alt="Visual" class="logo-big"> </a> <button type="button" class="navbar-toggle shadowbg" data-toggle="collapse" data-target="#main-nav"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button></div> <div class="collapse navbar-collapse" id="main-nav"><ul class="nav navbar-nav navbar-right" style="background-color: rgba(0, 0, 0, .3);"><li class="to-section"><a href="#about">Profil</a></li> <li class="to-section"><a href="#business">Produk &amp; Layanan</a></li> <li class="to-section"><a href="#team">Struktur</a></li> <li class="to-section"><a href="#services">Nilai Inti</a></li> <li class="to-section"><a href="#contact">Kontak</a></li></ul></div></div></nav></header>`;
});
const css$3 = {
  code: "#peranList.svelte-1ag2muv{display:flex;flex-wrap:wrap}",
  map: null
};
const Point = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="services" class="parallax-section-1"><div class="container"><div class="col-md-12 text-center text-white" data-svelte-h="svelte-upe74p"><h3 class="section-title">Nilai-Nilai Inti.</h3> <p class="subheading wow fadeInUp"></p></div> <div class="row features-row wow fadeInUp svelte-1ag2muv" id="peranList">${validate_component(List, "List").$$render($$result, { data: peran }, {}, {})}</div></div> </section>`;
});
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="business" class="parallax-section-1"><div class="container"><div class="col-md-12 text-center text-white" data-svelte-h="svelte-i993an"><h3 class="section-title">Produk &amp; Layanan.</h3> <p class="subheading wow fadeInUp"></p></div> <div class="row features-row wow fadeInUp" id="produkList">${validate_component(List, "List").$$render($$result, { data: produkDanLayanan }, {}, {})}</div></div></section>`;
});
const css$2 = {
  code: "div.svelte-7rezr5{display:grid;place-items:center;position:relative;min-height:100svh;overflow:hidden}.main.svelte-7rezr5{width:100vw;height:100vh;position:absolute;inset:0;object-fit:cover;overflow:hidden;opacity:0;will-change:opacity;transition:opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1)}svg.svelte-7rezr5{vertical-align:middle}.main.active.svelte-7rezr5{opacity:1;transition:opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1)}h2.svelte-7rezr5{content:attr(data-text);text-align:center;font-weight:bolder;color:white;position:absolute;transform:translateY(100vh);opacity:0;top:50%;will-change:transform;transition:transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)}h2.active.svelte-7rezr5{opacity:1;transform:translateY(-50%);transition:transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)}a.svelte-7rezr5{position:absolute;bottom:1rem;text-align:center;background-color:rgba(0, 0, 0, 0.3);color:white;font-weight:600;font-size:small;text-transform:uppercase;padding-inline:1rem}a.svelte-7rezr5:hover{background-color:#1c1c1c;color:#91da32}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentSlide = 0;
  $$result.css.add(css$2);
  return `<div class="svelte-7rezr5">${each(slides, (s) => {
    return `<img class="${["main svelte-7rezr5", s == slides[currentSlide] ? "active" : ""].join(" ").trim()}"${add_attribute("src", s.img, 0)} alt="" style="${"object-position: " + escape(s.img_position || "center", true) + ";"}"${add_attribute("data-text", s.text, 0)}>`;
  })} ${each(slides, (s) => {
    return `<h2 class="${["home-heading op-2 svelte-7rezr5", s == slides[currentSlide] ? "active" : ""].join(" ").trim()}">${escape(slides[currentSlide].text)} </h2>`;
  })}  <a href="#about" class="svelte-7rezr5" data-svelte-h="svelte-19gb8cn">Scroll down or click here to see the content <br> <span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="svelte-7rezr5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span></a> </div>`;
});
const css$1 = {
  code: "#strukturList.svelte-pio9fa.svelte-pio9fa{display:flex;flex-wrap:wrap;justify-content:center}#strukturList.svelte-pio9fa>div img.svelte-pio9fa:hover{scale:1}",
  map: null
};
const Struktur = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section id="team" class="parallax-section-1"><div class="container"><div class="col-md-12 text-center wow fadeInUp" data-svelte-h="svelte-1eughd7"><h3 class="section-title">Struktur.</h3> <p class="subheading"></p></div> <div class="row features-row wow fadeInUp svelte-pio9fa" id="strukturList">${each(struktur, (s) => {
    return `<div class="col-sm-4 team-member"><div class="effect effects wow fadeInUp" data-svelte-h="svelte-6aqcxx"><div class="img"><img${add_attribute("src", s.img || avatar(s.img, s.name), 0)} class="img-responsive svelte-pio9fa" alt="" style="width:100%;aspect-ratio:1;object-fit:contain;"> </div></div> <div class="member-info wow fadeInUp"><h4>${escape(s.name || "Nama")}</h4> <h5 class="highlight">${escape(s.title || "Jabatan")}</h5> <p style="text-align:left">${escape(s.detail || "detail ".repeat(16))}</p></div> </div>`;
  })}</div></div> </section>`;
});
const css = {
  code: "html{scroll-behavior:smooth}SVG.svelte-1ot6ma0{vertical-align:middle}#back-to-top.svelte-1ot6ma0{position:fixed;bottom:3.5rem;right:3.5rem;transform:translateY(10vh);opacity:0;will-change:transform;transition:transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1),\n      opacity 350ms cubic-bezier(0.19, 1, 0.22, 1)}#back-to-top.active{transform:translateY(0);opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-14av2zf_START --><link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" type="text/css"><link rel="stylesheet" href="/css/font-awesome/css/font-awesome.css" type="text/css"><link rel="stylesheet" href="/css/style.css" type="text/css"><link rel="stylesheet" href="/css/colors/green.css" id="color-skins"><script type="text/javascript" defer src="/js/plugins/jquery.min.js" data-svelte-h="svelte-1hlxo04"><\/script><script type="text/javascript" defer src="/bootstrap/js/bootstrap.min.js" data-svelte-h="svelte-jtag0a"><\/script><script type="text/javascript" defer src="/js/scripts.js" data-svelte-h="svelte-1iy4u5p"><\/script><!-- HEAD_svelte-14av2zf_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})} <div class="site-wrapper content">${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Product, "Product").$$render($$result, {}, {}, {})} ${validate_component(Struktur, "Struktur").$$render($$result, {}, {}, {})} <section id="quote" class="parallax-section-6"><div class="container"><div class="row wow fadeInUp"><div class="col-lg-12 wow fadeInUp" style="z-index:3"><div id="quote-slider"><div id="moto"><blockquote><i class="icon-left ion-quote ion-2x highlight"></i> <span>${escape(motoPerusahaan)}</span> <i class="icon-right ion-quote ion-2x highlight"></i></blockquote> <strong style="text-align:center; display:block;"><em class="highlight">${escape(namaPerusahaan)}</em> <strong data-svelte-h="svelte-1lep0i2"></strong></strong></div></div></div></div></div></section> ${validate_component(Point, "Point").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} <a id="back-to-top"${add_attribute("href", "#", 0)} class="svelte-1ot6ma0" data-svelte-h="svelte-1ilf8bl"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="svelte-1ot6ma0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg></a> </div>`;
});
export {
  Page as default
};
