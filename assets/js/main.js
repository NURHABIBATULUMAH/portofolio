/**
 * Portofolio Mahasiswa Teknik Informatika - Universitas Trunojoyo Madura
 * Target: Magang Industri / PKL / Studi Independen
 * Logic: Project Filters, Detail Modals, Theme Toggling, Print/PDF, Image Fallbacks
 */

// ==========================================
// IMAGE FALLBACK & USER REPLACEMENT HANDLERS
// ==========================================
// ==========================================
// IMAGE FALLBACK & USER REPLACEMENT HANDLERS
// ==========================================
function handleImageError(img, type) {
  const container = img.parentElement;
  if (!container) return;

  const icons = {
    profile: "fa-solid fa-user-graduate",
    apotek: "fa-solid fa-kit-medical",
    retrieval: "fa-solid fa-magnifying-glass-chart",
    hotel: "fa-solid fa-hotel",
    kedaiku: "fa-solid fa-mug-hot",
    toefl: "fa-solid fa-mug-hot",
    psd: "fa-solid fa-chart-pie",
    pendata: "fa-solid fa-database",
    datascience: "fa-solid fa-chart-pie"
  };

  const titles = {
    profile: "Foto Profil Mahasiswa",
    apotek: "Sistem Manajemen Apotek",
    retrieval: "DocuSearch: arXiv Academic Lens",
    hotel: "Sistem Pemesanan Hotel (Project PAW)",
    kedaiku: "Kedaiku - Biji Kopi Jombang (Project RPL)",
    toefl: "Kedaiku - Biji Kopi Jombang (Project RPL)",
    psd: "Proyek Sains Data (PSD)",
    pendata: "Penambangan Data (Pendata)",
    datascience: "Data Science & ML Repository"
  };

  const imageFiles = {
    profile: "habiba-porto.jpeg",
    apotek: "apotek.png",
    retrieval: "information.png",
    hotel: "hotel.png",
    kedaiku: "kedaiku.png",
    toefl: "kedaiku.png",
    psd: "psd.png",
    pendata: "pendata.png"
  };

  const iconClass = icons[type] || "fa-solid fa-laptop-code";
  const titleText = titles[type] || "Screenshot Proyek";
  const fileName = imageFiles[type] || `${type}.png`;

  if (type === "profile") {
    container.innerHTML = `
      <div class="profile-placeholder-box">
        <div class="profile-placeholder-icon">
          <i class="${iconClass}"></i>
        </div>
        <div class="profile-placeholder-text">
          <h4>${titleText}</h4>
          <p>Letakkan foto Anda di:<br><code>assets/images/${fileName}</code></p>
        </div>
      </div>
      <span class="photo-hint-badge"><i class="fa-solid fa-camera"></i> assets/images/${fileName}</span>
    `;
  } else {
    container.innerHTML = `
      <div class="project-placeholder-box">
        <div class="project-placeholder-icon">
          <i class="${iconClass}"></i>
        </div>
        <div class="project-placeholder-title">${titleText}</div>
        <div class="project-placeholder-hint"><i class="fa-solid fa-image"></i> assets/images/${fileName}</div>
      </div>
      <span class="photo-hint-badge"><i class="fa-solid fa-pen"></i> assets/images/${fileName}</span>
    `;
  }
}

function handleModalImageError(img, projectId) {
  const container = img.parentElement;
  if (!container) return;

  const icons = {
    apotek: "fa-solid fa-kit-medical",
    retrieval: "fa-solid fa-magnifying-glass-chart",
    hotel: "fa-solid fa-hotel",
    kedaiku: "fa-solid fa-mug-hot",
    toefl: "fa-solid fa-mug-hot",
    psd: "fa-solid fa-chart-pie",
    pendata: "fa-solid fa-database"
  };

  const imageFiles = {
    apotek: "apotek.png",
    retrieval: "information.png",
    hotel: "hotel.png",
    kedaiku: "kedaiku.png",
    toefl: "kedaiku.png",
    psd: "psd.png",
    pendata: "pendata.png"
  };

  const iconClass = icons[projectId] || "fa-solid fa-laptop-code";
  const project = projectsData[projectId];
  const title = project ? project.title : "Preview Proyek";
  const fileName = imageFiles[projectId] || `${projectId}.png`;

  img.outerHTML = `
    <div class="project-placeholder-box" style="aspect-ratio: 16/7; padding: 2.5rem 1.5rem;">
      <div class="project-placeholder-icon" style="font-size: 3rem;"><i class="${iconClass}"></i></div>
      <div class="project-placeholder-title" style="font-size: 1.1rem; margin-top: 0.5rem;">${title}</div>
      <div class="project-placeholder-hint">Screenshot di: <code>assets/images/${fileName}</code></div>
    </div>
  `;
}

// ==========================================
// 1. DATA PROYEK KOMPREHENSIF (6 REPOSITORI RESMI)
// ==========================================
const projectsData = {
  apotek: {
    id: "apotek",
    title: "Sistem Manajemen Apotek (Pharmacy Management System)",
    category: "web",
    categoryLabel: "Web Development / Sistem Informasi",
    teamType: "Proyek Kelompok (Tugas Besar Rekayasa Perangkat Lunak)",
    role: "Lead Database Designer & Backend Developer",
    image: "assets/images/apotek.png",
    github: "https://github.com/NURHABIBATULUMAH/Sistem-Manajemen-Apotek",
    summary: "Sistem informasi apotek berbasis web untuk manajemen operasional apotek: transaksi Point of Sale (POS) kasir, manajemen inventaris obat, resep dokter, data supplier & pelanggan, serta rekapitulasi laporan keuangan dan stok.",
    problemStatement: "Pencatatan inventaris dan penjualan obat secara manual sering menimbulkan ketidaksinkronan stok fisik, risiko obat kedaluwarsa tanpa terdeteksi, serta kesulitan rekapitulasi omset harian kasir.",
    contributions: [
      "Merancang skema relasi basis data (apotek_db) terstruktur mencakup master obat, supplier, pelanggan, resep dokter, serta transaksi pembelian dan penjualan.",
      "Mengembangkan backend logic PHP untuk validasi transaksi kasir (Point of Sale) dengan kalkulasi otomatis dan pemotongan stok obat secara real-time.",
      "Membangun modul pengelolaan master obat, kategori, satuan, serta penyesuaian stok inventaris apotek.",
      "Mengimplementasikan modul ekspor laporan penjualan harian dan bulanan ke format cetak untuk mempermudah audit operasional.",
      "Menerapkan sistem autentikasi multi-user dengan pemisahan hak akses antara Administrator dan Kasir/Apoteker."
    ],
    techStack: ["PHP Native", "MySQL", "JavaScript", "Bootstrap 5", "HTML5 & CSS3", "Git & GitHub"],
    features: [
      "Point of Sale (POS) Kasir Interaktif dengan perhitungan diskon dan kembalian",
      "Inventarisasi Obat Real-time dengan kontrol ketersediaan stok",
      "Pengelolaan Resep Dokter dan Riwayat Transaksi Pelanggan",
      "Pencatatan Pembelian Obat ke Supplier dan Faktur Masuk",
      "Laporan Omset & Grafik Rekapitulasi Penjualan Siap Cetak",
      "Autentikasi Multi-Role: Admin dan Kasir/Apoteker"
    ],
    results: "Sistem berhasil mengintegrasikan seluruh alur kerja apotek dari pengadaan hingga transaksi kasir secara efisien, bebas redundansi data, dan siap diaplikasikan pada operasional apotek UMKM."
  },

  retrieval: {
    id: "retrieval",
    title: "DocuSearch: arXiv Academic Lens - Dense Retrieval System",
    category: "data-ai",
    categoryLabel: "AI & NLP / Dense Retrieval",
    teamType: "Proyek Tugas Akhir Semester (UAS) - Temu Kembali Informasi",
    role: "AI & Fullstack Engineer (Sole Developer)",
    image: "assets/images/information.png",
    github: "https://github.com/NURHABIBATULUMAH/InformationRetrieval-DenseRetrieval",
    summary: "Sistem pencarian semantik jurnal ilmiah arXiv menggunakan metode Dense Retrieval berbasis Sentence Transformers (all-MiniLM-L6-v2) dan indexing spasial FAISS, mengintegrasikan Python Flask REST API di backend dengan antarmuka web dinamis PHP.",
    problemStatement: "Pencarian artikel ilmiah konvensional berbasis kata kunci leksikal gagal memahami makna kontekstual dan sinonim istilah ilmiah. Dibutuhkan representasi vektor dense berdimensi tinggi untuk menangkap semantik judul dan abstrak makalah.",
    contributions: [
      "Merancang arsitektur sistem hybrid: backend Python Flask di port 5000 untuk inferensi model AI dan frontend PHP untuk antarmuka pencarian.",
      "Membangun representasi teks kaya konteks (Title + Abstract) dan encoding menjadi vektor dense menggunakan model SentenceTransformer ('all-MiniLM-L6-v2').",
      "Mengimplementasikan spatial vector indexing FAISS dengan normalisasi L2 untuk perankingan Cosine Similarity berkecepatan sub-detik pada korpus dataset arXiv.",
      "Menerapkan saringan keamanan thresholding skor relevansi (>= 0.18) untuk memastikan hanya dokumen berkualitas tinggi dan relevan yang ditampilkan ke pengguna.",
      "Mengembangkan antarmuka pencarian responsif dengan visualisasi kategori arXiv, cuplikan abstrak, skor kemiripan, dan tautan dokumen asli."
    ],
    techStack: ["Python 3", "Flask API", "Sentence-Transformers (all-MiniLM-L6-v2)", "FAISS Vector Search", "NumPy & Pandas", "PHP Frontend", "Bootstrap 5"],
    features: [
      "Pencarian Semantik Cerdas (Dense Retrieval) berbasis model bahasa AI",
      "Indexing vektor spasial FAISS untuk temu kembali dokumen berkecepatan tinggi",
      "Mekanisme Relevance Score Thresholding (skor >= 0.18)",
      "Arsitektur Hybrid Flask REST API backend & PHP frontend",
      "Tampilan metadata lengkap: Judul, Abstrak, Kategori arXiv, dan Tautan Publikasi"
    ],
    results: "Sistem berhasil menemukan dokumen ilmiah yang relevan secara konseptual meski tanpa kesamaan kata kunci persis, dengan waktu respons kueri sub-detik."
  },

  hotel: {
    id: "hotel",
    title: "Sistem Pemesanan Kamar Hotel Online (Project PAW)",
    category: "web",
    categoryLabel: "Web Development / Sistem Transaksi",
    teamType: "Proyek Kelompok (Praktikum Pemrograman Aplikasi Web)",
    role: "Backend & Database Developer",
    image: "assets/images/hotel.png",
    github: "https://github.com/NURHABIBATULUMAH/Project-PAW-Sistem-Pemesanan-Kamar-Hotel",
    summary: "Platform reservasi kamar hotel berbasis web online lengkap dengan katalog kamar, validasi ketersediaan tanggal, pencegahan double-booking, alur upload bukti bayar, ulasan pelanggan, dan dashboard manajemen admin terintegrasi.",
    problemStatement: "Risiko konflik reservasi kamar ganda (double-booking) pada tanggal yang sama dan kebutuhan sistem reservasi yang terotomatisasi secara transparan antara tamu dan front-desk hotel.",
    contributions: [
      "Merancang skema relasi basis data MySQL (db_hotel) untuk multi-entitas: rooms, room types, bookings, users, fasilitas, dan review pelanggan.",
      "Membangun logika backend verifikasi rentang tanggal check-in dan check-out untuk mengeliminasi potensi reservasi tumpang tindih (zero double-booking).",
      "Mengembangkan alur booking kamar, kalkulasi dinamis tarif kamar dan lama menginap, serta formulir unggah bukti pembayaran transfer.",
      "Membangun panel dashboard Admin: manajemen status reservasi, verifikasi pembayaran, pengelolaan kamar dan tipe kamar, serta kelola ulasan tamu.",
      "Mengimplementasikan fitur customer review & rating kepuasan pelanggan setelah menyelesaikan masa inap."
    ],
    techStack: ["PHP Native", "MySQL", "JavaScript ES6", "HTML5 & CSS3", "XAMPP / Laragon", "Git & GitHub"],
    features: [
      "Katalog interaktif tipe kamar lengkap dengan galeri foto, fasilitas, dan tarif per malam",
      "Logika pencegahan double booking kamar berbasis verifikasi rentang tanggal check-in/out",
      "Kalkulasi biaya otomatis dan sistem unggah bukti transfer pembayaran",
      "Sistem ulasan (review) dan rating kepuasan tamu terhadap fasilitas kamar",
      "Dashboard Admin Front-Desk lengkap untuk mengelola reservasi dan operasional hotel",
      "Website aktif dan ter-hosting di server publik (Live Demo: https://hotels.gajahweb.tech/)"
    ],
    results: "Sistem sukses diluncurkan pada domain hosting publik (https://hotels.gajahweb.tech/) dan membuktikan kehandalan validasi transaksi bebas konflik kamar."
  },

  kedaiku: {
    id: "kedaiku",
    title: "Kedaiku - Sistem Penjualan & Pemesanan Biji Kopi Jombang (Project RPL)",
    category: "web",
    categoryLabel: "Web Development / E-Commerce",
    teamType: "Proyek Kelompok (Tugas Besar Rekayasa Perangkat Lunak)",
    role: "Backend, Database & Security Authentication Developer",
    image: "assets/images/kedaiku.png",
    github: "https://github.com/jaidan2212/Project_RPL",
    summary: "Platform e-commerce pemesanan biji kopi premium khas Wonosalam Jombang berbasis web, dilengkapi fitur autentikasi aman Verifikasi OTP Email, keranjang belanja, validasi stok checkout, pelacakan alur pesanan, serta cetak nota PDF.",
    problemStatement: "UMKM penjualan biji kopi lokal menghadapi keterbatasan jangkauan pemasaran dan pencatatan manual yang rawan selisih stok, serta membutuhkan perlindungan dari pesanan fiktif.",
    contributions: [
      "Merancang arsitektur basis data relasional (kopi_db.sql) mencakup tabel users, produk, pesanan_header, dan pesanan_detail.",
      "Mengimplementasikan sistem keamanan autentikasi dengan Verifikasi OTP (One-Time Password) via Email untuk registrasi akun dan pemulihan lupa sandi.",
      "Membangun fitur keranjang belanja dan mekanisme checkout dengan validasi ketersediaan stok produk secara real-time.",
      "Mengembangkan alur manajemen status transaksi: verifikasi pesanan, unggah bukti pembayaran, ambil pesanan, hingga opsi pembatalan pesanan.",
      "Membuat generator cetak nota/struk pesanan resmi format PDF (cetak_pdf.php) untuk dokumentasi transaksi pelanggan dan kasir.",
      "Mengembangkan dashboard panel admin untuk pengelolaan katalog produk (CRUD produk, update stok & harga) serta konfirmasi pesanan masuk."
    ],
    techStack: ["PHP Native", "MySQL", "JavaScript ES6", "Bootstrap 5", "OTP Email Verification", "FPDF (PDF Export)", "Git & GitHub"],
    features: [
      "Katalog etalase aneka biji kopi premium lokal dengan informasi deskripsi, stok, dan harga",
      "Sistem Keamanan Akun dengan Verifikasi OTP Email pada pendaftaran & pemulihan password",
      "Keranjang belanja interaktif dan validasi stok otomatis saat proses checkout",
      "Pelacakan siklus pesanan: verifikasi pembayaran, proses ambil pesanan, hingga nota transaksi",
      "Fitur ekspor dan cetak nota struk belanja format PDF resmi",
      "Panel Admin untuk pengelolaan master produk, stok biji kopi, dan verifikasi pesanan"
    ],
    results: "Aplikasi berhasil menyelesaikan tahapan siklus rekayasa perangkat lunak (SDLC), memberikan pengalaman belanja kopi online yang aman dengan OTP, serta mempermudah UMKM mengelola stok dan pesanan."
  },

  psd: {
    id: "psd",
    title: "Proyek Sains Data - Analisis Spasial Polutan, Citra Satelit, dan Klasifikasi Audio",
    category: "data-ai",
    categoryLabel: "Data Science & Machine Learning",
    teamType: "Proyek Mata Kuliah Proyek Sains Data (Jupyter Book Documentation)",
    role: "Data Scientist & Machine Learning Modeler",
    image: "assets/images/psd.png",
    github: "https://github.com/NURHABIBATULUMAH/PSD",
    summary: "Buku kerja interaktif (Jupyter Book) komprehensif sains data yang mencakup analisis spasial-temporal polutan lingkungan di Kabupaten Tuban & Kecamatan Kerek, ekstraksi fitur time-series TSFEL, clustering polutan, reduksi dimensi, serta klasifikasi machine learning citra satelit sawah dan audio.",
    problemStatement: "Dataset spasial lingkungan dan sinyal audio memiliki dimensionalitas tinggi serta noise yang memerlukan pra-pemrosesan khusus dan ekstraksi fitur domain (TSFEL untuk time-series dan MFCC untuk audio) sebelum dilakukan pemodelan machine learning.",
    contributions: [
      "Melakukan akuisisi, pra-pemrosesan, dan analisis data polutan spasial-temporal di wilayah Kabupaten Tuban dan Kecamatan Kerek.",
      "Menerapkan teknik ekstraksi fitur time series menggunakan pustaka TSFEL untuk mengekstrak karakteristik spektral dan temporal polutan.",
      "Mengimplementasikan clustering data polutan serta teknik reduksi dimensi fitur untuk analisis klaster lingkungan.",
      "Membangun model klasifikasi citra geospasial/satelit untuk pemetaan tutupan lahan sawah.",
      "Mengembangkan pipeline ekstraksi fitur sinyal audio (MFCC - Mel Frequency Cepstral Coefficients, Chroma, Spektrogram) dan klasifikasi audio menggunakan Scikit-Learn.",
      "Menyusun dokumentasi pembelajaran interaktif berbasis Jupyter Book dengan alur eksperimen yang dapat direproduksi (reproducible data science)."
    ],
    techStack: ["Python 3", "Jupyter Book", "Pandas & NumPy", "TSFEL (Time Series Features)", "Scikit-Learn", "Audio Processing (Librosa/MFCC)", "Matplotlib & Seaborn"],
    features: [
      "Buku dokumentasi daring interaktif terstruktur berbasis Jupyter Book",
      "Analisis Spasial Polutan Lingkungan & Wordcloud Polutan Wilayah Tuban & Kerek",
      "Ekstraksi Fitur Kompleks Time-Series Menggunakan TSFEL & Clustering Polutan",
      "Reduksi Dimensi Fitur Lingkungan untuk Optimasi Pemodelan",
      "Pemodelan Klasifikasi Citra Satelit Pemetaan Lahan Sawah",
      "Pipeline Ekstraksi Fitur Akustik Audio (MFCC) dan Klasifikasi Audio"
    ],
    results: "Seluruh eksperimen sains data terdokumentasi secara terstruktur dalam format Jupyter Book, membuktikan kapabilitas end-to-end dari data ingestion, ekstraksi fitur domain-specific, hingga evaluasi model klasifikasi."
  },

  pendata: {
    id: "pendata",
    title: "Penambangan Data - Data Mining, Preprocessing, & Supervised Learning Pipeline",
    category: "data-ai",
    categoryLabel: "Data Mining & Knowledge Discovery",
    teamType: "Proyek Mata Kuliah Penambangan Data (Jupyter Book Documentation)",
    role: "Data Mining Engineer & Algorithm Modeler",
    image: "assets/images/pendata.png",
    github: "https://github.com/NURHABIBATULUMAH/Pendata",
    summary: "Buku kerja terstruktur (Jupyter Book) eksplorasi teknik penambangan data tingkat lanjut: penghitungan metrik jarak data (Euclidean, Manhattan, Minkowski), pembersihan & normalisasi missing value, klasifikasi (Decision Tree, Random Forest, Naive Bayes), regresi linier, dan studi kasus prediksi kesuburan tanah.",
    problemStatement: "Ekstraksi pola pengetahuan dari dataset tabular mentah memerlukan pemahaman mendalam mengenai karakter data, penanganan nilai hilang, normalisasi fitur numerik, serta perbandingan kinerja algoritma klasifikasi dan regresi yang tepat.",
    contributions: [
      "Mengimplementasikan implementasi matematis metrik pengukuran jarak data (Euclidean, Manhattan, dan Minkowski Distance) pada dataset riil (Student Performance & Titanic).",
      "Membangun pipeline pembersihan data: deteksi dan imputasi missing value, serta normalisasi fitur numerik (Min-Max Scaling & Z-score).",
      "Mengembangkan model klasifikasi supervised learning: Decision Tree (Pohon Keputusan), Random Forest, dan Naive Bayes (Play Tennis & Kesuburan Tanah).",
      "Menerapkan algoritma Regresi Linier (Linear Regression) untuk analisis tren hubungan antar-variabel data kontinu.",
      "Melakukan studi kasus penambangan data komprehensif pada proyek akhir (project_pendat) dengan evaluasi metrik akurasi, confusion matrix, dan interpretasi pola.",
      "Mempublikasikan seluruh modul analisis ke dalam format Jupyter Book yang rapi dan terstandarisasi."
    ],
    techStack: ["Python 3", "Jupyter Book", "Scikit-Learn", "Pandas & NumPy", "Decision Tree & Random Forest", "Naive Bayes", "Linear Regression", "Matplotlib & Seaborn"],
    features: [
      "Dokumentasi interaktif berbasis Jupyter Book dengan alur pembelajaran data mining komprehensif",
      "Implementasi Matematis Metrik Jarak Data (Euclidean, Manhattan, Minkowski)",
      "Pipeline Pembersihan Data: Penanganan Missing Values & Teknik Normalisasi Data",
      "Studi Kasus Klasifikasi Nyata: Prediksi Kesuburan Tanah, Titanic, dan Play Tennis",
      "Benchmarking Algoritma: Decision Tree, Random Forest, Naive Bayes, dan Linear Regression",
      "Evaluasi Kinerja Model Prediktif dan Visualisasi Pola Keputusan"
    ],
    results: "Repositori berhasil memetakan fondasi data mining secara matematis dan implementatif dalam Python, menghasilkan model prediksi teruji dengan dokumentasi komprehensif yang mudah dipahami."
  }
};

// ==========================================
// 2. DATA SERTIFIKASI PROFESIONAL
// ==========================================
const certsData = {
  bnsp: {
    id: "bnsp",
    title: "Sertifikasi Kompetensi BNSP - Pemrogram Junior",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia",
    schema: "Standar Kompetensi Kerja Nasional Indonesia (SKKNI)",
    date: "Tersertifikasi Kompeten",
    details: [
      "Uji kompetensi resmi tingkat nasional yang diakui oleh Kementerian Ketenagakerjaan RI.",
      "Unit Kompetensi 1: Mengimplementasikan Algoritma Pemrograman ke dalam kode sumber.",
      "Unit Kompetensi 2: Membuat dan Memanipulasi Basis Data Relasional menggunakan SQL.",
      "Unit Kompetensi 3: Menggunakan Struktur Data dan Prinsip Pemrograman Terstruktur.",
      "Unit Kompetensi 4: Menulis Kode Program sesuai dengan pedoman dan standar industri (Clean Code)."
    ],
    badgeType: "bnsp"
  },
  dicoding: {
    id: "dicoding",
    title: "Sertifikat Kelulusan Dicoding Indonesia",
    issuer: "Dicoding Indonesia (Google Authorized Training Partner)",
    schema: "Pengembangan Web & Dasar Pemrograman Python / Data",
    date: "Lulus Ujian & Submission Proyek",
    details: [
      "Menyelesaikan kurikulum industri resmi yang disupervisi langsung oleh reviewer profesional.",
      "Pemahaman mendalam mengenai standar semantic HTML5, modern CSS flex/grid, dan manipulasi DOM JavaScript.",
      "Pemrograman Dasar Python untuk manipulasi data dan pemecahan masalah algoritma.",
      "Lulus submission kode akhir dengan validasi review baris-per-baris standar industri (Grade Bintang 5)."
    ],
    badgeType: "dicoding"
  }
};

// ==========================================
// 3. INISIALISASI & DOM EVENT HANDLERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initProjectFilters();
  initModalHandlers();
  initContactActions();
  initMobileMenu();
  initScrollSpy();
});

// ==========================================
// THEME SWITCHER (DARK / LIGHT MODE)
// ==========================================
function initThemeToggle() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem("portfolio-theme") || "light";
  
  applyTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = activeTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
      showToast(`Mode ${newTheme === "dark" ? "Gelap (Dark)" : "Terang (Light)"} aktif`);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.innerHTML = theme === "dark" 
      ? '<i class="fa-solid fa-sun" title="Ubah ke Mode Terang"></i>' 
      : '<i class="fa-solid fa-moon" title="Ubah ke Mode Gelap"></i>';
  }
}

// ==========================================
// PROJECT FILTER LOGIC
// ==========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// ==========================================
// MODAL DETAIL PROYEK & SERTIFIKAT
// ==========================================
function initModalHandlers() {
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  // Tombol buka modal proyek
  document.querySelectorAll("[data-open-project]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute("data-open-project");
      openProjectModal(projectId);
    });
  });

  // Tombol buka modal sertifikat
  document.querySelectorAll("[data-open-cert]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const certId = btn.getAttribute("data-open-cert");
      openCertModal(certId);
    });
  });

  // Close modal events
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const modalOverlay = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalDynamicContent");

  const contributionsHtml = project.contributions.map(item => `
    <li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>
  `).join("");

  const featuresHtml = project.features.map(item => `
    <li><i class="fa-solid fa-check"></i> <span>${item}</span></li>
  `).join("");

  const techTagsHtml = project.techStack.map(tag => `
    <span class="tech-tag">${tag}</span>
  `).join("");

  modalContent.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-header-img" onerror="handleModalImageError(this, '${project.id}')" />
    <div class="modal-body">
      <span class="modal-tag">${project.categoryLabel}</span>
      <h2 class="modal-title">${project.title}</h2>
      
      <div class="modal-role-pill">
        <i class="fa-solid fa-user-gear"></i>
        <span><strong>Peran Saya:</strong> ${project.role} (${project.teamType})</span>
      </div>

      <h4 class="modal-section-title"><i class="fa-solid fa-bullseye"></i> Latar Belakang & Masalah</h4>
      <p class="modal-text">${project.problemStatement}</p>

      <h4 class="modal-section-title"><i class="fa-solid fa-lightbulb"></i> Solusi & Ringkasan Proyek</h4>
      <p class="modal-text">${project.summary}</p>

      <h4 class="modal-section-title"><i class="fa-solid fa-laptop-code"></i> Kontribusi Spesifik Saya dalam Tim</h4>
      <p class="modal-text" style="font-size: 0.875rem; color: var(--accent-secondary); margin-bottom: 0.5rem;">
        <em>Meskipun merupakan proyek kelompok, berikut adalah tanggung jawab dan implementasi teknis mandiri saya:</em>
      </p>
      <ul class="modal-list">
        ${contributionsHtml}
      </ul>

      <h4 class="modal-section-title"><i class="fa-solid fa-list-check"></i> Fitur Utama Sistem</h4>
      <ul class="modal-list">
        ${featuresHtml}
      </ul>

      <h4 class="modal-section-title"><i class="fa-solid fa-microchip"></i> Teknologi yang Digunakan</h4>
      <div class="project-tags" style="margin-bottom: 1.5rem;">
        ${techTagsHtml}
      </div>

      <h4 class="modal-section-title"><i class="fa-solid fa-trophy"></i> Hasil & Pencapaian</h4>
      <p class="modal-text">${project.results}</p>
    </div>
    <div class="modal-footer">
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i class="fa-brands fa-github"></i> Buka Repository GitHub
      </a>
      <button class="btn btn-secondary btn-sm" onclick="closeModal()">Tutup</button>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function openCertModal(certId) {
  const cert = certsData[certId];
  if (!cert) return;

  const modalOverlay = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalDynamicContent");

  const detailsHtml = cert.details.map(item => `
    <li><i class="fa-solid fa-certificate"></i> <span>${item}</span></li>
  `).join("");

  modalContent.innerHTML = `
    <div class="modal-body" style="padding-top: 3rem;">
      <span class="modal-tag">${cert.issuer}</span>
      <h2 class="modal-title">${cert.title}</h2>
      
      <div class="modal-role-pill" style="color: var(--accent-success); border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.1);">
        <i class="fa-solid fa-shield-halved"></i>
        <span><strong>Status:</strong> ${cert.date} • ${cert.schema}</span>
      </div>

      <h4 class="modal-section-title"><i class="fa-solid fa-list-check"></i> Validasi Kompetensi Terverifikasi</h4>
      <ul class="modal-list">
        ${detailsHtml}
      </ul>

      <div class="highlight-box">
        <p><strong>Catatan untuk Rekruiter:</strong> Sertifikat fisik/digital resmi ber-barcode dan kredensial lengkap siap dilampirkan atau ditunjukkan saat proses seleksi wawancara magang.</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary btn-sm" onclick="copyContact('email')">
        <i class="fa-solid fa-paper-plane"></i> Minta Salinan Dokumen Sertifikat
      </button>
      <button class="btn btn-secondary btn-sm" onclick="closeModal()">Tutup</button>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modalOverlay = document.getElementById("projectModal");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================
// CONTACT ACTIONS & WHATSAPP / PDF GENERATOR
// ==========================================
function initContactActions() {
  // Tombol Cetak / Simpan PDF
  const printPdfBtns = document.querySelectorAll(".btn-export-pdf");
  printPdfBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Menyiapkan tata letak PDF Portofolio...");
      setTimeout(() => {
        window.print();
      }, 350);
    });
  });

  // Tombol WhatsApp Magang
  const waBtns = document.querySelectorAll(".btn-open-wa");
  waBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      sendWhatsAppInternshipMessage();
    });
  });
}

function sendWhatsAppInternshipMessage() {
  const phoneNumber = "6285847730295"; // Dapat disesuaikan user
  const message = `Halo Nurhabibatul Umah, saya melihat portofolio magang Teknik Informatika Anda dan tertarik untuk mendiskusikan peluang magang di perusahaan kami.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function copyContact(type) {
  let textToCopy = "";
  let label = "";

  if (type === "email") {
    textToCopy = "nurhabibatulumah@gmail.com";
    label = "Alamat Email";
  } else if (type === "phone") {
    textToCopy = "+6285847730295";
    label = "Nomor WhatsApp";
  } else {
    textToCopy = window.location.href;
    label = "Tautan Portofolio";
  }

  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast(`${label} berhasil disalin ke clipboard!`);
  }).catch(() => {
    showToast(`Gagal menyalin. Silakan salin manual: ${textToCopy}`);
  });
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--accent-primary)"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuBtn.innerHTML = navLinks.classList.contains("open") 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Tutup otomatis saat link diklik
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }
}

// ==========================================
// SCROLL SPY ACTIVE NAV
// ==========================================
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop;
      const sectionId = sec.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}
