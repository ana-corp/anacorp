import{s as ge,n as z,r as st,o as lt,x as Le}from"../chunks/scheduler.W2pu3yam.js";import{S as pe,i as ve,m as Me,j as D,g as o,y as je,e as f,b as me,s as b,c as g,d as k,f as fe,h as w,o as i,k as r,l as Ue,u as ie,z as L,v as re,p as K,w as se,t as J,a as Z,x as le,A as oe,B as ce,q as ot,n as ct,C as Se,D as He,E as Ae,F as ut}from"../chunks/index.DiuNv6fT.js";function Ie(u){return(u==null?void 0:u.length)!==void 0?u:Array.from(u)}function Fe(u,e,a){const t=u.slice();return t[1]=e[a],t}function Ye(u){let e,a,t,n=(u[1].title||"Title")+"",l,s,c,h=(u[1].detail||"detail ".repeat(20))+"",d,m;return{c(){e=f("div"),a=f("div"),t=f("h4"),l=me(n),s=b(),c=f("p"),d=me(h),m=b(),this.h()},l(v){e=g(v,"DIV",{class:!0});var p=k(e);a=g(p,"DIV",{class:!0});var _=k(a);t=g(_,"H4",{});var C=k(t);l=fe(C,n),C.forEach(o),s=w(_),c=g(_,"P",{class:!0});var E=k(c);d=fe(E,h),E.forEach(o),_.forEach(o),m=w(p),p.forEach(o),this.h()},h(){i(c,"class","feature-description"),i(a,"class","feature-info"),i(e,"class","col-md-4 col-sm-12 feature-column")},m(v,p){D(v,e,p),r(e,a),r(a,t),r(t,l),r(a,s),r(a,c),r(c,d),r(e,m)},p(v,p){p&1&&n!==(n=(v[1].title||"Title")+"")&&Ue(l,n),p&1&&h!==(h=(v[1].detail||"detail ".repeat(20))+"")&&Ue(d,h)},d(v){v&&o(e)}}}function dt(u){let e,a=Ie(u[0]),t=[];for(let n=0;n<a.length;n+=1)t[n]=Ye(Fe(u,a,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=Me()},l(n){for(let l=0;l<t.length;l+=1)t[l].l(n);e=Me()},m(n,l){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,l);D(n,e,l)},p(n,[l]){if(l&1){a=Ie(n[0]);let s;for(s=0;s<a.length;s+=1){const c=Fe(n,a,s);t[s]?t[s].p(c,l):(t[s]=Ye(c),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=a.length}},i:z,o:z,d(n){n&&o(e),je(t,n)}}}function ht(u,e,a){let{data:t=[]}=e;return u.$$set=n=>{"data"in n&&a(0,t=n.data)},[t]}class Ke extends pe{constructor(e){super(),ve(this,e,ht,dt,ge,{data:0})}}function mt(u){let e,a,t,n='<h3 class="section-title">Tentang Perusahaan.</h3> <p class="subheading" id="overview"></p>',l,s,c,h="VISI",d,m,v,p,_,C,E="MISI",X,T,x,$,P,B,y,M,V,ke="History",N,H,ee,U,G,F='<a href="#contact" class="btn btn-primary btn-md">Hubungi Kami</a>',S;return v=new Ke({props:{data:u[1]}}),x=new Ke({props:{data:u[2]}}),{c(){e=f("section"),a=f("div"),t=f("div"),t.innerHTML=n,l=b(),s=f("div"),c=f("h3"),c.textContent=h,d=b(),m=f("div"),ie(v.$$.fragment),p=b(),_=f("div"),C=f("h3"),C.textContent=E,X=b(),T=f("div"),ie(x.$$.fragment),$=b(),P=f("section"),B=f("div"),y=f("div"),M=f("div"),V=f("h3"),V.textContent=ke,N=b(),H=f("p"),ee=me(u[0]),U=b(),G=f("p"),G.innerHTML=F,this.h()},l(j){e=g(j,"SECTION",{id:!0,class:!0});var Y=k(e);a=g(Y,"DIV",{class:!0});var q=k(a);t=g(q,"DIV",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1nory47"&&(t.innerHTML=n),l=w(q),s=g(q,"DIV",{});var ue=k(s);c=g(ue,"H3",{class:!0,"data-svelte-h":!0}),L(c)!=="svelte-1ybwsth"&&(c.textContent=h),d=w(ue),m=g(ue,"DIV",{class:!0,id:!0});var A=k(m);re(v.$$.fragment,A),A.forEach(o),ue.forEach(o),p=w(q),_=g(q,"DIV",{});var R=k(_);C=g(R,"H3",{class:!0,"data-svelte-h":!0}),L(C)!=="svelte-1y9wd76"&&(C.textContent=E),X=w(R),T=g(R,"DIV",{class:!0,id:!0});var we=k(T);re(x.$$.fragment,we),we.forEach(o),R.forEach(o),q.forEach(o),$=w(Y),P=g(Y,"SECTION",{});var O=k(P);B=g(O,"DIV",{class:!0});var te=k(B);y=g(te,"DIV",{class:!0});var _e=k(y);M=g(_e,"DIV",{class:!0,style:!0});var ne=k(M);V=g(ne,"H3",{class:!0,"data-svelte-h":!0}),L(V)!=="svelte-nmjkkk"&&(V.textContent=ke),N=w(ne),H=g(ne,"P",{class:!0,id:!0});var de=k(H);ee=fe(de,u[0]),de.forEach(o),U=w(ne),G=g(ne,"P",{class:!0,"data-svelte-h":!0}),L(G)!=="svelte-6559xy"&&(G.innerHTML=F),ne.forEach(o),_e.forEach(o),te.forEach(o),O.forEach(o),Y.forEach(o),this.h()},h(){i(t,"class","col-md-12 text-center wow fadeInUp"),i(c,"class","wow fadeInUp text-center visi"),i(m,"class","row features-row wow fadeInUp"),i(m,"id","visiList"),i(C,"class","wow fadeInUp text-center visi"),i(T,"class","row features-row wow fadeInUp"),i(T,"id","misiList"),i(a,"class","container"),i(V,"class","wow fadeInUp"),i(H,"class","wow fadeInUp"),i(H,"id","sejarah"),i(G,"class","wow fadeInUp"),i(M,"class","text-left about-text"),K(M,"padding","4rem"),i(y,"class","row"),i(B,"class","container"),i(e,"id","about"),i(e,"class","parallax-section-1")},m(j,Y){D(j,e,Y),r(e,a),r(a,t),r(a,l),r(a,s),r(s,c),r(s,d),r(s,m),se(v,m,null),r(a,p),r(a,_),r(_,C),r(_,X),r(_,T),se(x,T,null),r(e,$),r(e,P),r(P,B),r(B,y),r(y,M),r(M,V),r(M,N),r(M,H),r(H,ee),r(M,U),r(M,G),S=!0},p:z,i(j){S||(J(v.$$.fragment,j),J(x.$$.fragment,j),S=!0)},o(j){Z(v.$$.fragment,j),Z(x.$$.fragment,j),S=!1},d(j){j&&o(e),le(v),le(x)}}}function ft(u){return[`Perusahaan Kami berdiri pada tanggal 20 September 2019 dengan nama lengkap PT.ALENA NUSANTARA ABADI. Awalnya, Perusahaan Kami hanya melayani Pasar lokal dengan Fokus Pada Pengadaan hasil bumi dan Kimia (Asam Sulfat dan Coustik soda Liquid). 
Untuk Sektor Industri kecil dan menengah. Namun, dengan komitmen untuk memberikan layanan 
berkualitas dan Kepuasan konsumen, kami berhasil tumbuh pesat dan Memperluas jangkauan layanan kami. Pada tahun-tahun berikutnya, Kami Secara Progresif mengembangkan dan menambahkan layanan dan Jasa. Perlahan Kami dalam bidang Penyalur tenaga kerja dan Sudah bekerja Sama dengan beberapa Perusahaan besar 
Selain itu Perusahaan Kami dalam waktu dekat ini 
akan mengeluarkan Produk dalam bentuk Parfume, Karena menurut kami Pada Jaman Ini Parfume Sudah menjadi Kebutuhan publik,
Kini PT. ALENA NUSANTARA ABADI telah menjadi Perusahaan Yang diakui 
dalam industri Pengadaan barang (hasil bumi dan kimia) dan Jasa Penyalur tenaga kerja. 
Sejak tahun 2019 hingga Saat ini Kami Selalu Komitmen memberikan Kualitas dan Jasa Pelayanan terbaik 

`,[{title:"Kualitas",detail:"Menjadi mitra kepercayaan dan pilihan utama dalam penyediaan barang dan jasa yang berkualitas dan profesional"}],[{title:"Integritas",detail:"Memberikan layanan pengadaan barang dan jasa yang unggul dan terpercaya kepada pelanggan dengan profesionalisme dan integritas tinggi"},{title:"Komitmen",detail:"Menjalin kemitraan strategis dengan pemasok terkemuka dan pelaku bisnis lainnya untuk mencapai pertumbuhan bersama"},{title:"Kontribusi jangka panjang",detail:"Menjujung tinggi tanggung jawab perusahaan dengan berkontribusi pada pembangunan berkelanjutan dan lingkungan yang sehat"}]]}class gt extends pe{constructor(e){super(),ve(this,e,ft,mt,ge,{})}}function pt(u){let e,a,t,n,l,s,c;return{c(){e=oe("svg"),a=oe("g"),t=oe("g"),n=oe("g"),l=oe("g"),s=oe("path"),c=oe("path"),this.h()},l(h){e=ce(h,"svg",{id:!0,fill:!0,height:!0,style:!0,width:!0,version:!0,xmlns:!0,"xmlns:xlink":!0,viewBox:!0,"xml:space":!0});var d=k(e);a=ce(d,"g",{id:!0,"stroke-width":!0}),k(a).forEach(o),t=ce(d,"g",{id:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),k(t).forEach(o),n=ce(d,"g",{id:!0});var m=k(n);l=ce(m,"g",{id:!0});var v=k(l);s=ce(v,"path",{id:!0,d:!0});var p=k(s);p.forEach(o),c=ce(v,"path",{id:!0,d:!0});var _=k(c);_.forEach(o),v.forEach(o),m.forEach(o),d.forEach(o),this.h()},h(){i(a,"id","SVGRepo_bgCarrier"),i(a,"stroke-width","0"),i(t,"id","SVGRepo_tracerCarrier"),i(t,"stroke-linecap","round"),i(t,"stroke-linejoin","round"),i(s,"id","XMLID_469_"),i(s,"d","M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"),i(c,"id","XMLID_470_"),i(c,"d","M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"),i(l,"id","XMLID_468_"),i(n,"id","SVGRepo_iconCarrier"),i(e,"id","whatsapp"),i(e,"fill","currentColor"),i(e,"height","1.5em"),K(e,"vertical-align","middle"),i(e,"width","1.5em"),i(e,"version","1.1"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),i(e,"viewBox","-30.8 -30.8 369.60 369.60"),i(e,"xml:space","preserve")},m(h,d){D(h,e,d),r(e,a),r(e,t),r(e,n),r(n,l),r(l,s),r(l,c)},d(h){h&&o(e)}}}function vt(u){let e,a,t;return{c(){e=oe("svg"),a=oe("path"),t=oe("path"),this.h()},l(n){e=ce(n,"svg",{id:!0,width:!0,style:!0,height:!0,xmlns:!0,viewBox:!0,fill:!0});var l=k(e);a=ce(l,"path",{d:!0,fill:!0}),k(a).forEach(o),t=ce(l,"path",{d:!0});var s=k(t);s.forEach(o),l.forEach(o),this.h()},h(){i(a,"d","M0 0h24v24H0z"),i(a,"fill","none"),i(t,"d","M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"),i(e,"id","phone"),i(e,"width","1.5em"),K(e,"vertical-align","middle"),i(e,"height","1.5em"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"viewBox","0 0 24 24"),i(e,"fill","currentColor")},m(n,l){D(n,e,l),r(e,a),r(e,t)},d(n){n&&o(e)}}}function kt(u){let e,a,t;return{c(){e=oe("svg"),a=oe("path"),t=oe("path"),this.h()},l(n){e=ce(n,"svg",{id:!0,width:!0,style:!0,height:!0,xmlns:!0,viewBox:!0,fill:!0,color:!0});var l=k(e);a=ce(l,"path",{d:!0,fill:!0}),k(a).forEach(o),t=ce(l,"path",{d:!0});var s=k(t);s.forEach(o),l.forEach(o),this.h()},h(){i(a,"d","M0 0h24v24H0z"),i(a,"fill","none"),i(t,"d","M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"),i(e,"id","email"),i(e,"width","1.5em"),K(e,"vertical-align","middle"),i(e,"height","1.5em"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"viewBox","0 0 24 24"),i(e,"fill","currentColor"),i(e,"color","#000")},m(n,l){D(n,e,l),r(e,a),r(e,t)},d(n){n&&o(e)}}}function _t(u){let e;function a(l,s){return l[0]==="email"?kt:l[0]==="phone"?vt:pt}let t=a(u),n=t(u);return{c(){n.c(),e=Me()},l(l){n.l(l),e=Me()},m(l,s){n.m(l,s),D(l,e,s)},p(l,[s]){t!==(t=a(l))&&(n.d(1),n=t(l),n&&(n.c(),n.m(e.parentNode,e)))},i:z,o:z,d(l){l&&o(e),n.d(l)}}}function bt(u,e,a){let{i:t}=e;return u.$$set=n=>{"i"in n&&a(0,t=n.i)},[t]}class wt extends pe{constructor(e){super(),ve(this,e,bt,_t,ge,{i:0})}}const $t="Alena Nusantara Abadi",he=[{text:"ALENA NUSANTARA ABADI",img:"img/slides/slide1.jpeg"},{text:"KOMITMEN, KUALITAS, INTEGRITAS TINGGI",img:"img/slides/slide2.jpeg",img_position:"center bottom"},{text:"ALENA NUSANTARA ABADI",img:"img/slides/slide3.jpeg"},{text:"KOMITMEN, KUALITAS, INTEGRITAS TINGGI",img:"img/slides/slide4.jpeg"}],Qe="Berinovasi dan mengadopsi teknologi terbaru untuk memajukan perusahaan",We="Jalan Raya Narogong, Desa Kembang kuning RT. 015/005, Kec. Klapanunggal - Kab. Bogor (16710)",rt="alenanusantaraabadi@gmail.com",It=[{type:"whatsapp",detail:"+6281356965532"},{type:"whatsapp",detail:"+6281380296668"}],xt=[{title:"Pengadaan Barang",detail:"Menyediakan berbagai jenis hasil bumi dan bahan kimia. Mulai dari bahan baku hingga produk jadi untuk berbagai sektor industri "},{title:"Jasa Profesional",detail:`Kami menyediakan layanan penyaluran tenaga Kerja untuk setiap perusahaan, Seperti Perawatan Peralatan, Perbaikan, konsultasi teknis, dan masih banyak lagi.  
        `},{title:"Konsultasi Pengadaan",detail:"Memberikan konsultasi ahli dalam Perencanaan dan Strategi Pengadaan Untuk membantu Pelanggan mencapai efisiensi, dan efektivitas."},{title:"Pemeliharaan & Dukungan Pelanggan",detail:"Menyediakan layanan purna jual, perawatan, dan dukungan teknis untuk memastikan kepuasan pelanggan atau mitra"}],yt=[{title:"Kualitas",detail:"Kami berkomitmen untuk memberiken Produk dan layanan berkualitas tinggi kepada Pelanggan kami. Kualitas adalah prioritas utama dalam Setiap langkah operational kami"},{title:"Kepuasan pelanggan dan mitra",detail:"Pelaggan/mitra adalah aset berharga kami. Kami selalu berusaha Untuk memahami dan memenuhi kebutuhan mereka dengan baik, Serta memberikan pelayanan terbaik "},{title:"Integritas",detail:"Kami bertindak dengan jujur, adil dan etis dalam Setiap aspek bisnis kami. menjaga Kepercayaan pelanggan, mitra, dan karyawan "},{title:"Inovasi",detail:"Kami selalu mencari cara baru untuk meningkatkan layanan kami, berinovasi, dan mengadopsi teknologi terbaru untuk memajukan perusahaan"},{title:"Kemitraan",detail:"Kami memahami pentingnya kerjasama yang kuat dengan pelanggan, pemasok, mitra bisnis lainnya. Kami percaya bahwa kemitraan yang saling menguntungkan adalah kunci kesuksesan jangka panjang."}],Et=[{img:"img/struktur/1.png",name:"Khaerunisa",title:"Direktur Utama",detail:"Bertanggung jawab atas visi, arah, dan strategi perusahaan. Memimpin tim manajemen dan memastikan kelancaran operasional perusahaan"},{img:"img/struktur/2.png",name:"Riansyahroni",title:"Wakil Direktur",detail:"Bertanggung jawab atas proses pengadaan barang dan jasa mulai dari pemilihan, pemasok, negosiasi, hingga pengiriman dan penerimaan barang"},{img:"img/struktur/3.png",name:"Zakiyatul Muhandisa",title:"Divisi Keuangan",detail:"Menangani aspek keuangan perusahaan, termasuk pengelolaan anggaran, akuntansi, dan pelapor keuangan"},{img:"img/struktur/4.png",name:"Nurul Aisa",title:"Divisi PPIC",detail:"Bertugas mengelola sumber daya  manusia perusahaan, termasuk perekrutan, pelatihan, dan pengembangan karyawan"},{img:"img/struktur/5.png",name:"Ogie Permana",title:"Divisi Marketing",detail:`Memiliki strategi pemasaran yang komprehensif.
        Dan memastikan semua strategi pemasaran mulai dari saluran distribusi.
        ( video, blog, media cetak, media sosial, Dll )
        Berjalan selaras menyampaikan pesan yang sama kepada Mitra dan calon mitra.`}],Ct=(u=null,e="John Doe",a="random")=>u||`https://ui-avatars.com/api/?name=${(e||"John Doe").split(" ").join("+")}&background=${a||"random"}&size=256`;function Ze(u,e,a){const t=u.slice();return t[2]=e[a],t}function et(u){let e,a,t,n,l=u[2].detail+"",s,c,h;return a=new wt({props:{i:u[2].type}}),{c(){e=f("a"),ie(a.$$.fragment),t=b(),n=f("span"),s=me(l),c=b(),this.h()},l(d){e=g(d,"A",{title:!0,href:!0,style:!0});var m=k(e);re(a.$$.fragment,m),t=w(m),n=g(m,"SPAN",{});var v=k(n);s=fe(v,l),v.forEach(o),c=w(m),m.forEach(o),this.h()},h(){i(e,"title",u[2].type+" "+u[2].detail),i(e,"href",""+((u[0][u[2].type]||"")+u[2].detail)),K(e,"display","flex"),K(e,"gap","1rem"),K(e,"color","black"),K(e,"font-size","18px"),K(e,"margin-bottom","0.5em")},m(d,m){D(d,e,m),se(a,e,null),r(e,t),r(e,n),r(n,s),r(e,c),h=!0},p:z,i(d){h||(J(a.$$.fragment,d),h=!0)},o(d){Z(a.$$.fragment,d),h=!1},d(d){d&&o(e),le(a)}}}function Mt(u){let e,a,t=Ie(u[1]),n=[];for(let s=0;s<t.length;s+=1)n[s]=et(Ze(u,t,s));const l=s=>Z(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=Me()},l(s){for(let c=0;c<n.length;c+=1)n[c].l(s);e=Me()},m(s,c){for(let h=0;h<n.length;h+=1)n[h]&&n[h].m(s,c);D(s,e,c),a=!0},p(s,[c]){if(c&3){t=Ie(s[1]);let h;for(h=0;h<t.length;h+=1){const d=Ze(s,t,h);n[h]?(n[h].p(d,c),J(n[h],1)):(n[h]=et(d),n[h].c(),J(n[h],1),n[h].m(e.parentNode,e))}for(ot(),h=t.length;h<n.length;h+=1)l(h);ct()}},i(s){if(!a){for(let c=0;c<t.length;c+=1)J(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)Z(n[c]);a=!1},d(s){s&&o(e),je(n,s)}}}function jt(u){const e={phone:"tel:",email:"mailto:",whatsapp:"https://wa.me/"},a=[...It,{type:"email",detail:rt}];return[e,a]}class Tt extends pe{constructor(e){super(),ve(this,e,jt,Mt,ge,{})}}function Pt(u){let e,a,t,n,l='<h3 class="section-title wow fadeInUp">Hubungi Kami.</h3> <p class="subheading wow fadeInUp"></p>',s,c,h,d,m,v,p,_,C,E,X="Kirim Pesan",T,x,$,P="Alamat :",B,y,M,V='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" height="1.5em" width="1.5em" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.28 29.28 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0zm0 13.9c8.806 0 15.808 6.986 15.808 15.766c0 8.78-7.002 15.763-15.808 15.763c-8.805 0-15.81-6.982-15.81-15.763c0-8.78 7.005-15.765 15.81-15.765z" fill="currentColor"></path><path d="M68.913 48.908l-.048.126c.015-.038.027-.077.042-.115l.006-.011z" fill="currentColor"></path><path d="M34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143c-17.673 0-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174c-.645-1.114-1.294-2.226-1.94-3.341z" fill="currentColor"></path></g></svg>',ke,N,H,ee,U,G="Kontak :",F,S,j,Y,q,ue;return j=new Tt({}),{c(){e=f("section"),a=f("div"),t=f("div"),n=f("div"),n.innerHTML=l,s=b(),c=f("div"),h=f("div"),d=f("div"),m=f("input"),v=b(),p=f("div"),_=f("textarea"),C=b(),E=f("button"),E.textContent=X,T=b(),x=f("div"),$=f("h4"),$.textContent=P,B=b(),y=f("address"),M=f("span"),M.innerHTML=V,ke=b(),N=f("span"),H=me(We),ee=b(),U=f("h4"),U.textContent=G,F=b(),S=f("div"),ie(j.$$.fragment),this.h()},l(A){e=g(A,"SECTION",{id:!0,style:!0});var R=k(e);a=g(R,"DIV",{class:!0});var we=k(a);t=g(we,"DIV",{class:!0});var O=k(t);n=g(O,"DIV",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-8s6zau"&&(n.innerHTML=l),s=w(O),c=g(O,"DIV",{class:!0});var te=k(c);h=g(te,"DIV",{id:!0,class:!0});var _e=k(h);d=g(_e,"DIV",{});var ne=k(d);m=g(ne,"INPUT",{name:!0,type:!0,id:!0,placeholder:!0}),ne.forEach(o),v=w(_e),p=g(_e,"DIV",{});var de=k(p);_=g(de,"TEXTAREA",{name:!0,cols:!0,rows:!0,id:!0,placeholder:!0}),k(_).forEach(o),C=w(de),E=g(de,"BUTTON",{class:!0,id:!0,style:!0,"data-svelte-h":!0}),L(E)!=="svelte-1lxhfjj"&&(E.textContent=X),de.forEach(o),_e.forEach(o),T=w(te),x=g(te,"DIV",{class:!0});var Q=k(x);$=g(Q,"H4",{"data-svelte-h":!0}),L($)!=="svelte-15a9i2"&&($.textContent=P),B=w(Q),y=g(Q,"ADDRESS",{style:!0,title:!0});var xe=k(y);M=g(xe,"SPAN",{"data-svelte-h":!0}),L(M)!=="svelte-1ggbwt5"&&(M.innerHTML=V),ke=w(xe),N=g(xe,"SPAN",{id:!0});var Ee=k(N);H=fe(Ee,We),Ee.forEach(o),xe.forEach(o),ee=w(Q),U=g(Q,"H4",{"data-svelte-h":!0}),L(U)!=="svelte-cpa3pc"&&(U.textContent=G),F=w(Q),S=g(Q,"DIV",{id:!0});var be=k(S);re(j.$$.fragment,be),be.forEach(o),Q.forEach(o),te.forEach(o),O.forEach(o),we.forEach(o),R.forEach(o),this.h()},h(){i(n,"class","col-md-12 text-center"),i(m,"name","subject"),i(m,"type","text"),i(m,"id","subject"),i(m,"placeholder","Subject"),i(_,"name","comments"),i(_,"cols","40"),i(_,"rows","3"),i(_,"id","comments"),i(_,"placeholder","Message"),i(E,"class","btn btn-primary btn-md"),i(E,"id","submit"),K(E,"margin-bottom","6rem"),i(h,"id","contactform"),i(h,"class","col-md-7 wow fadeInUp"),i(N,"id","alamat"),K(y,"font-size","18px"),K(y,"display","flex"),K(y,"gap","1rem"),i(y,"title","Alamat"),i(S,"id","kontak"),i(x,"class","col-md-5 wow fadeInLeft"),i(c,"class","d-flex"),i(t,"class","row"),i(a,"class","container"),i(e,"id","contact"),K(e,"padding-bottom","8rem")},m(A,R){D(A,e,R),r(e,a),r(a,t),r(t,n),r(t,s),r(t,c),r(c,h),r(h,d),r(d,m),Se(m,u[0]),r(h,v),r(h,p),r(p,_),Se(_,u[1]),r(p,C),r(p,E),r(c,T),r(c,x),r(x,$),r(x,B),r(x,y),r(y,M),r(y,ke),r(y,N),r(N,H),r(x,ee),r(x,U),r(x,F),r(x,S),se(j,S,null),Y=!0,q||(ue=[He(m,"input",u[3]),He(_,"input",u[4]),He(E,"click",u[2])],q=!0)},p(A,[R]){R&1&&m.value!==A[0]&&Se(m,A[0]),R&2&&Se(_,A[1])},i(A){Y||(J(j.$$.fragment,A),Y=!0)},o(A){Z(j.$$.fragment,A),Y=!1},d(A){A&&o(e),le(j),q=!1,st(ue)}}}function Dt(u,e,a){let t="",n="";function l(){window.open(`mailto:${rt}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(n)}`,"_blank")}function s(){t=this.value,a(0,t)}function c(){n=this.value,a(1,n)}return[t,n,l,s,c]}class St extends pe{constructor(e){super(),ve(this,e,Dt,Pt,ge,{})}}function Lt(u){let e,a='<nav class="navbar navbar-default navbar-alt"><div id="container"><div class="navbar-header"><a class="navbar-brand to-top" rel="home" href="#"><img src="img/assets/logo.png" alt="Visual" class="logo-big"/></a> <button type="button" class="navbar-toggle shadowbg" data-toggle="collapse" data-target="#main-nav"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button></div> <div class="collapse navbar-collapse" id="main-nav"><ul class="nav navbar-nav navbar-right" style="background-color: rgba(0, 0, 0, .3);"><li class="to-section"><a href="#about">Profil</a></li> <li class="to-section"><a href="#business">Produk &amp; Layanan</a></li> <li class="to-section"><a href="#team">Struktur</a></li> <li class="to-section"><a href="#services">Nilai Inti</a></li> <li class="to-section"><a href="#contact">Kontak</a></li></ul></div></div></nav>';return{c(){e=f("header"),e.innerHTML=a},l(t){e=g(t,"HEADER",{"data-svelte-h":!0}),L(e)!=="svelte-1mjhirn"&&(e.innerHTML=a)},m(t,n){D(t,e,n)},p:z,i:z,o:z,d(t){t&&o(e)}}}function At(u){return[]}class Kt extends pe{constructor(e){super(),ve(this,e,At,Lt,ge,{})}}function Vt(u){let e,a,t,n='<h3 class="section-title">Nilai-Nilai Inti.</h3> <p class="subheading wow fadeInUp"></p>',l,s,c,h;return c=new Ke({props:{data:yt}}),{c(){e=f("section"),a=f("div"),t=f("div"),t.innerHTML=n,l=b(),s=f("div"),ie(c.$$.fragment),this.h()},l(d){e=g(d,"SECTION",{id:!0,class:!0});var m=k(e);a=g(m,"DIV",{class:!0});var v=k(a);t=g(v,"DIV",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-upe74p"&&(t.innerHTML=n),l=w(v),s=g(v,"DIV",{class:!0,id:!0});var p=k(s);re(c.$$.fragment,p),p.forEach(o),v.forEach(o),m.forEach(o),this.h()},h(){i(t,"class","col-md-12 text-center text-white"),i(s,"class","row features-row wow fadeInUp svelte-1ag2muv"),i(s,"id","peranList"),i(a,"class","container"),i(e,"id","services"),i(e,"class","parallax-section-1")},m(d,m){D(d,e,m),r(e,a),r(a,t),r(a,l),r(a,s),se(c,s,null),h=!0},p:z,i(d){h||(J(c.$$.fragment,d),h=!0)},o(d){Z(c.$$.fragment,d),h=!1},d(d){d&&o(e),le(c)}}}class Nt extends pe{constructor(e){super(),ve(this,e,null,Vt,ge,{})}}function Ht(u){let e,a,t,n='<h3 class="section-title">Produk &amp; Layanan.</h3> <p class="subheading wow fadeInUp"></p>',l,s,c,h;return c=new Ke({props:{data:xt}}),{c(){e=f("section"),a=f("div"),t=f("div"),t.innerHTML=n,l=b(),s=f("div"),ie(c.$$.fragment),this.h()},l(d){e=g(d,"SECTION",{id:!0,class:!0});var m=k(e);a=g(m,"DIV",{class:!0});var v=k(a);t=g(v,"DIV",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-i993an"&&(t.innerHTML=n),l=w(v),s=g(v,"DIV",{class:!0,id:!0});var p=k(s);re(c.$$.fragment,p),p.forEach(o),v.forEach(o),m.forEach(o),this.h()},h(){i(t,"class","col-md-12 text-center text-white"),i(s,"class","row features-row wow fadeInUp"),i(s,"id","produkList"),i(a,"class","container"),i(e,"id","business"),i(e,"class","parallax-section-1")},m(d,m){D(d,e,m),r(e,a),r(a,t),r(a,l),r(a,s),se(c,s,null),h=!0},p:z,i(d){h||(J(c.$$.fragment,d),h=!0)},o(d){Z(c.$$.fragment,d),h=!1},d(d){d&&o(e),le(c)}}}class Ut extends pe{constructor(e){super(),ve(this,e,null,Ht,ge,{})}}function tt(u,e,a){const t=u.slice();return t[1]=e[a],t}function at(u,e,a){const t=u.slice();return t[1]=e[a],t}function nt(u){let e,a;return{c(){e=f("img"),this.h()},l(t){e=g(t,"IMG",{class:!0,src:!0,alt:!0,style:!0,"data-text":!0}),this.h()},h(){i(e,"class","main svelte-7rezr5"),Le(e.src,a=u[1].img)||i(e,"src",a),i(e,"alt",""),K(e,"object-position",u[1].img_position||"center"),i(e,"data-text",u[1].text),Ae(e,"active",u[1]==he[u[0]])},m(t,n){D(t,e,n)},p(t,n){n&1&&Ae(e,"active",t[1]==he[t[0]])},d(t){t&&o(e)}}}function it(u){let e,a=he[u[0]].text+"",t,n;return{c(){e=f("h2"),t=me(a),n=b(),this.h()},l(l){e=g(l,"H2",{class:!0});var s=k(e);t=fe(s,a),n=w(s),s.forEach(o),this.h()},h(){i(e,"class","home-heading op-2 svelte-7rezr5"),Ae(e,"active",u[1]==he[u[0]])},m(l,s){D(l,e,s),r(e,t),r(e,n)},p(l,s){s&1&&a!==(a=he[l[0]].text+"")&&Ue(t,a),s&1&&Ae(e,"active",l[1]==he[l[0]])},d(l){l&&o(e)}}}function Rt(u){let e,a,t,n,l='Scroll down or click here to see the content <br/> <span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="svelte-7rezr5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>',s=Ie(he),c=[];for(let m=0;m<s.length;m+=1)c[m]=nt(at(u,s,m));let h=Ie(he),d=[];for(let m=0;m<h.length;m+=1)d[m]=it(tt(u,h,m));return{c(){e=f("div");for(let m=0;m<c.length;m+=1)c[m].c();a=b();for(let m=0;m<d.length;m+=1)d[m].c();t=b(),n=f("a"),n.innerHTML=l,this.h()},l(m){e=g(m,"DIV",{class:!0});var v=k(e);for(let p=0;p<c.length;p+=1)c[p].l(v);a=w(v);for(let p=0;p<d.length;p+=1)d[p].l(v);t=w(v),n=g(v,"A",{href:!0,class:!0,"data-svelte-h":!0}),L(n)!=="svelte-19gb8cn"&&(n.innerHTML=l),v.forEach(o),this.h()},h(){i(n,"href","#about"),i(n,"class","svelte-7rezr5"),i(e,"class","svelte-7rezr5")},m(m,v){D(m,e,v);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(e,null);r(e,a);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(e,null);r(e,t),r(e,n)},p(m,[v]){if(v&1){s=Ie(he);let p;for(p=0;p<s.length;p+=1){const _=at(m,s,p);c[p]?c[p].p(_,v):(c[p]=nt(_),c[p].c(),c[p].m(e,a))}for(;p<c.length;p+=1)c[p].d(1);c.length=s.length}if(v&1){h=Ie(he);let p;for(p=0;p<h.length;p+=1){const _=tt(m,h,p);d[p]?d[p].p(_,v):(d[p]=it(_),d[p].c(),d[p].m(e,t))}for(;p<d.length;p+=1)d[p].d(1);d.length=h.length}},i:z,o:z,d(m){m&&o(e),je(c,m),je(d,m)}}}function zt(u,e,a){let t=0;return lt(()=>{setInterval(()=>{a(0,t=t==he.length-1?0:t+1)},6e3)}),[t]}class Bt extends pe{constructor(e){super(),ve(this,e,zt,Rt,ge,{})}}function Gt(u,e,a){const t=u.slice();return t[0]=e[a],t}function Ot(u){let e,a,t=`<div class="img"><img src="${u[0].img||Ct(u[0].img,u[0].name)}" class="img-responsive svelte-pio9fa" alt="" style="width:100%;aspect-ratio:1;object-fit:contain;"/></div>`,n,l,s,c=(u[0].name||"Nama")+"",h,d,m,v=(u[0].title||"Jabatan")+"",p,_,C,E=(u[0].detail||"detail ".repeat(16))+"",X,T;return{c(){e=f("div"),a=f("div"),a.innerHTML=t,n=b(),l=f("div"),s=f("h4"),h=me(c),d=b(),m=f("h5"),p=me(v),_=b(),C=f("p"),X=me(E),T=b(),this.h()},l(x){e=g(x,"DIV",{class:!0});var $=k(e);a=g($,"DIV",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-6aqcxx"&&(a.innerHTML=t),n=w($),l=g($,"DIV",{class:!0});var P=k(l);s=g(P,"H4",{});var B=k(s);h=fe(B,c),B.forEach(o),d=w(P),m=g(P,"H5",{class:!0});var y=k(m);p=fe(y,v),y.forEach(o),_=w(P),C=g(P,"P",{style:!0});var M=k(C);X=fe(M,E),M.forEach(o),P.forEach(o),T=w($),$.forEach(o),this.h()},h(){i(a,"class","effect effects wow fadeInUp"),i(m,"class","highlight"),K(C,"text-align","left"),i(l,"class","member-info wow fadeInUp"),i(e,"class","col-sm-4 team-member")},m(x,$){D(x,e,$),r(e,a),r(e,n),r(e,l),r(l,s),r(s,h),r(l,d),r(l,m),r(m,p),r(l,_),r(l,C),r(C,X),r(e,T)},p:z,d(x){x&&o(e)}}}function qt(u){let e,a,t,n='<h3 class="section-title">Struktur.</h3> <p class="subheading"></p>',l,s,c=Ie(Et),h=[];for(let d=0;d<c.length;d+=1)h[d]=Ot(Gt(u,c,d));return{c(){e=f("section"),a=f("div"),t=f("div"),t.innerHTML=n,l=b(),s=f("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=g(d,"SECTION",{id:!0,class:!0});var m=k(e);a=g(m,"DIV",{class:!0});var v=k(a);t=g(v,"DIV",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1eughd7"&&(t.innerHTML=n),l=w(v),s=g(v,"DIV",{class:!0,id:!0});var p=k(s);for(let _=0;_<h.length;_+=1)h[_].l(p);p.forEach(o),v.forEach(o),m.forEach(o),this.h()},h(){i(t,"class","col-md-12 text-center wow fadeInUp"),i(s,"class","row features-row wow fadeInUp svelte-pio9fa"),i(s,"id","strukturList"),i(a,"class","container"),i(e,"id","team"),i(e,"class","parallax-section-1")},m(d,m){D(d,e,m),r(e,a),r(a,t),r(a,l),r(a,s);for(let v=0;v<h.length;v+=1)h[v]&&h[v].m(s,null)},p:z,i:z,o:z,d(d){d&&o(e),je(h,d)}}}class Jt extends pe{constructor(e){super(),ve(this,e,null,qt,ge,{})}}function Xt(u){let e,a,t,n,l,s="",c,h,d="",m,v,p="",_,C,E,X,T,x,$,P,B,y,M,V,ke,N,H,ee,U,G,F,S,j,Y,q,ue,A,R,we,O,te,_e=$t+"",ne,de,Q,xe="",Ee,be,Ve,ye,Ne,$e,Re='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="svelte-1ot6ma0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>',Te;return E=new Kt({}),T=new Bt({}),P=new gt({}),y=new Ut({}),V=new Jt({}),be=new Nt({}),ye=new St({}),{c(){e=f("link"),a=f("link"),t=f("link"),n=f("link"),l=f("script"),l.innerHTML=s,h=f("script"),h.innerHTML=d,v=f("script"),v.innerHTML=p,C=b(),ie(E.$$.fragment),X=b(),ie(T.$$.fragment),x=b(),$=f("div"),ie(P.$$.fragment),B=b(),ie(y.$$.fragment),M=b(),ie(V.$$.fragment),ke=b(),N=f("section"),H=f("div"),ee=f("div"),U=f("div"),G=f("div"),F=f("div"),S=f("blockquote"),j=f("i"),Y=b(),q=f("span"),ue=me(Qe),A=b(),R=f("i"),we=b(),O=f("strong"),te=f("em"),ne=me(_e),de=b(),Q=f("strong"),Q.innerHTML=xe,Ee=b(),ie(be.$$.fragment),Ve=b(),ie(ye.$$.fragment),Ne=b(),$e=f("a"),$e.innerHTML=Re,this.h()},l(I){const W=ut("svelte-14av2zf",document.head);e=g(W,"LINK",{rel:!0,href:!0,type:!0}),a=g(W,"LINK",{rel:!0,href:!0,type:!0}),t=g(W,"LINK",{rel:!0,href:!0,type:!0}),n=g(W,"LINK",{rel:!0,href:!0,id:!0}),l=g(W,"SCRIPT",{type:!0,src:!0,"data-svelte-h":!0}),L(l)!=="svelte-1hlxo04"&&(l.innerHTML=s),h=g(W,"SCRIPT",{type:!0,src:!0,"data-svelte-h":!0}),L(h)!=="svelte-jtag0a"&&(h.innerHTML=d),v=g(W,"SCRIPT",{type:!0,src:!0,"data-svelte-h":!0}),L(v)!=="svelte-1iy4u5p"&&(v.innerHTML=p),W.forEach(o),C=w(I),re(E.$$.fragment,I),X=w(I),re(T.$$.fragment,I),x=w(I),$=g(I,"DIV",{class:!0});var ae=k($);re(P.$$.fragment,ae),B=w(ae),re(y.$$.fragment,ae),M=w(ae),re(V.$$.fragment,ae),ke=w(ae),N=g(ae,"SECTION",{id:!0,class:!0});var ze=k(N);H=g(ze,"DIV",{class:!0});var Be=k(H);ee=g(Be,"DIV",{class:!0});var Ge=k(ee);U=g(Ge,"DIV",{class:!0,style:!0});var Oe=k(U);G=g(Oe,"DIV",{id:!0});var qe=k(G);F=g(qe,"DIV",{id:!0});var Pe=k(F);S=g(Pe,"BLOCKQUOTE",{});var Ce=k(S);j=g(Ce,"I",{class:!0}),k(j).forEach(o),Y=w(Ce),q=g(Ce,"SPAN",{});var Je=k(q);ue=fe(Je,Qe),Je.forEach(o),A=w(Ce),R=g(Ce,"I",{class:!0}),k(R).forEach(o),Ce.forEach(o),we=w(Pe),O=g(Pe,"STRONG",{style:!0});var De=k(O);te=g(De,"EM",{class:!0});var Xe=k(te);ne=fe(Xe,_e),Xe.forEach(o),de=w(De),Q=g(De,"STRONG",{"data-svelte-h":!0}),L(Q)!=="svelte-1lep0i2"&&(Q.innerHTML=xe),De.forEach(o),Pe.forEach(o),qe.forEach(o),Oe.forEach(o),Ge.forEach(o),Be.forEach(o),ze.forEach(o),Ee=w(ae),re(be.$$.fragment,ae),Ve=w(ae),re(ye.$$.fragment,ae),Ne=w(ae),$e=g(ae,"A",{id:!0,href:!0,class:!0,"data-svelte-h":!0}),L($e)!=="svelte-1ilf8bl"&&($e.innerHTML=Re),ae.forEach(o),this.h()},h(){i(e,"rel","stylesheet"),i(e,"href","/bootstrap/css/bootstrap.min.css"),i(e,"type","text/css"),i(a,"rel","stylesheet"),i(a,"href","/css/font-awesome/css/font-awesome.css"),i(a,"type","text/css"),i(t,"rel","stylesheet"),i(t,"href","/css/style.css"),i(t,"type","text/css"),i(n,"rel","stylesheet"),i(n,"href","/css/colors/green.css"),i(n,"id","color-skins"),i(l,"type","text/javascript"),l.defer=!0,Le(l.src,c="/js/plugins/jquery.min.js")||i(l,"src",c),i(h,"type","text/javascript"),h.defer=!0,Le(h.src,m="/bootstrap/js/bootstrap.min.js")||i(h,"src",m),i(v,"type","text/javascript"),v.defer=!0,Le(v.src,_="/js/scripts.js")||i(v,"src",_),i(j,"class","icon-left ion-quote ion-2x highlight"),i(R,"class","icon-right ion-quote ion-2x highlight"),i(te,"class","highlight"),K(O,"text-align","center"),K(O,"display","block"),i(F,"id","moto"),i(G,"id","quote-slider"),i(U,"class","col-lg-12 wow fadeInUp"),K(U,"z-index","3"),i(ee,"class","row wow fadeInUp"),i(H,"class","container"),i(N,"id","quote"),i(N,"class","parallax-section-6"),i($e,"id","back-to-top"),i($e,"href","#"),i($e,"class","svelte-1ot6ma0"),i($,"class","site-wrapper content")},m(I,W){r(document.head,e),r(document.head,a),r(document.head,t),r(document.head,n),r(document.head,l),r(document.head,h),r(document.head,v),D(I,C,W),se(E,I,W),D(I,X,W),se(T,I,W),D(I,x,W),D(I,$,W),se(P,$,null),r($,B),se(y,$,null),r($,M),se(V,$,null),r($,ke),r($,N),r(N,H),r(H,ee),r(ee,U),r(U,G),r(G,F),r(F,S),r(S,j),r(S,Y),r(S,q),r(q,ue),r(S,A),r(S,R),r(F,we),r(F,O),r(O,te),r(te,ne),r(O,de),r(O,Q),r($,Ee),se(be,$,null),r($,Ve),se(ye,$,null),r($,Ne),r($,$e),Te=!0},p:z,i(I){Te||(J(E.$$.fragment,I),J(T.$$.fragment,I),J(P.$$.fragment,I),J(y.$$.fragment,I),J(V.$$.fragment,I),J(be.$$.fragment,I),J(ye.$$.fragment,I),Te=!0)},o(I){Z(E.$$.fragment,I),Z(T.$$.fragment,I),Z(P.$$.fragment,I),Z(y.$$.fragment,I),Z(V.$$.fragment,I),Z(be.$$.fragment,I),Z(ye.$$.fragment,I),Te=!1},d(I){I&&(o(C),o(X),o(x),o($)),o(e),o(a),o(t),o(n),o(l),o(h),o(v),le(E,I),le(T,I),le(P),le(y),le(V),le(be),le(ye)}}}class Qt extends pe{constructor(e){super(),ve(this,e,null,Xt,ge,{})}}export{Qt as component};
