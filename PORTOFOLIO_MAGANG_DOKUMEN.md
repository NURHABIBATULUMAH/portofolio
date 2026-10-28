# DOKUMEN PORTOFOLIO MAHASISWA TEKNIK INFORMATIKA
## Kesiapan Magang Industri / PKL / Studi Independen (Semester Genap)

---

### I. DATA PRIBADI & PROFIL SINGKAT
- **Nama Lengkap**: Nurhabibatul Umah
- **Program Studi**: S1 Teknik Informatika
- **Perguruan Tinggi**: Universitas Trunojoyo Madura (UTM)
- **Status Akademik**: Semester 5 Aktif (Tahun Masuk: 2022)
- **Minat Posisi Magang**: Junior Web Developer (Frontend / Backend / Fullstack), Junior Data Analyst / Data Science Intern, Quality Assurance (QA) Intern
- **GitHub**: [github.com/NURHABIBATULUMAH](https://github.com/NURHABIBATULUMAH)
- **Email**: nurhabibatulumah.ti@gmail.com
- **Lokasi**: Jawa Timur (Bersedia Onsite Surabaya/Madura, Hybrid, maupun Remote)

---

### II. RINGKASAN EKSEKUTIF (EXECUTIVE SUMMARY)
Saya adalah mahasiswa semester 5 Teknik Informatika di Universitas Trunojoyo Madura yang memiliki minat mendalam pada **Pengembangan Aplikasi Web**, **Sistem Temu Kembali Informasi (Information Retrieval)**, serta **Sains Data & Machine Learning**. 

Sepanjang perkuliahan, saya aktif menyelesaikan berbagai proyek perangkat lunak berskala nyata yang sebagian besar dikerjakan secara kolaboratif dalam tim. Saya terbiasa memegang peranan krusial seperti perancangan skema basis data relasional (ERD 3NF), pengembangan logika backend transaksi, implementasi pipeline algoritma cerdas, serta manajemen alur kerja Git/GitHub. 

Kompetensi teknis saya telah tersertifikasi secara resmi oleh **Badan Nasional Sertifikasi Profesi (BNSP)** pada skema **Pemrogram Junior** berstandar SKKNI, serta kelulusan submission kode dari **Dicoding Indonesia** (Google Authorized Training Partner). Saya siap berkontribusi secara produktif dan berkomitmen penuh dalam pelaksanaan magang industri.

---

### III. MATRIKS KEAHLIAN TEKNIS (TECHNICAL SKILLS)

| Kategori | Teknologi & Tools |
| :--- | :--- |
| **Pemrograman Web** | PHP, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, REST API, JSON |
| **Basis Data** | MySQL, Relational Database Modeling (ERD), Normalisasi 3NF, Query Optimization, phpMyAdmin |
| **Data Science & AI** | Python 3, Pandas, NumPy, Scikit-Learn, Information Retrieval (TF-IDF, Cosine Similarity, Vector Space Model), NLP Sastrawi, Matplotlib, Seaborn |
| **Tools & Version Control** | Git, GitHub, Visual Studio Code, Jupyter Notebook, Postman, Laragon / XAMPP, Figma |
| **Soft Skills** | Team Collaboration, Problem Solving, Clean Code Mindset, Adaptabilitas Tinggi, Komunikasi Teknis |

---

### IV. SERTIFIKASI & KOMPETENSI RESMI

#### 1. Sertifikasi Kompetensi BNSP — Pemrogram Junior
- **Penerbit**: Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia
- **Acuan Standar**: Standar Kompetensi Kerja Nasional Indonesia (SKKNI) Bidang Software Development
- **Status**: Kompeten Terverifikasi
- **Unit Kompetensi yang Diuji**:
  - Mengimplementasikan Algoritma Pemrograman ke dalam bahasa pemrograman terstruktur.
  - Membuat dan Mengelola Basis Data Relasional menggunakan Structured Query Language (SQL).
  - Menerapkan Struktur Data serta Prinsip Akses Memori yang Efisien.
  - Menulis Kode Program Sesuai Pedoman Rekayasa Perangkat Lunak (Clean Code).

#### 2. Sertifikat Kelulusan Dicoding Indonesia
- **Penerbit**: Dicoding Academy (Google Authorized Training Partner)
- **Topik**: Belajar Dasar Pemrograman Web & Memulai Pemrograman Dengan Python
- **Status**: Lulus Ujian Teori & Submission Proyek Akhir
- **Validasi**: Lolos review kode ketat oleh Code Reviewer Industri (skala bintang 5) mencakup semantic HTML5, styling responsif CSS Grid/Flexbox, dan algoritma komputasi Python.

---

### V. DETAIL PROYEK REKAYASA & KONTRIBUSI INDIVIDU

> **Catatan Penting untuk Rekruiter:** Proyek di bawah ini sebagian besar merupakan proyek tugas kelompok perkuliahan. Penjelasan difokuskan pada peran dan kontribusi nyata yang saya kerjakan secara mandiri dalam tim.

---

#### 1. Sistem Manajemen Apotek (Pharmacy POS & Inventory System)
- **Kategori**: Web Application / Sistem Informasi Manajemen
- **Konteks**: Tugas Besar Mata Kuliah Rekayasa Perangkat Lunak & Basis Data
- **Peran Saya**: **Lead Database Designer & Backend Developer** (Tim 4 Orang)
- **Teknologi**: PHP Native, MySQL, JavaScript, Bootstrap 5, HTML5/CSS3, Git/GitHub
- **Repositori**: [github.com/NURHABIBATULUMAH/Sistem-Manajemen-Apotek](https://github.com/NURHABIBATULUMAH/Sistem-Manajemen-Apotek)

##### Masalah & Solusi:
- **Masalah**: Apotek masih mencatat transaksi penjualan dan stok obat menggunakan buku kas manual. Hal ini rawan terjadi selisih stok, obat kadaluwarsa terlewat dari pengawasan, dan lamanya rekapitulasi laporan pendapatan bulanan.
- **Solusi**: Membangun sistem Point of Sale (POS) dan inventaris terpadu dengan deteksi masa kedaluwarsa dini dan kalkulasi stok otomatis saat transaksi berlangsung.

##### Kontribusi Spesifik Saya dalam Tim:
1. Merancang arsitektur basis data relasional (ERD) terdiri dari 8 tabel yang dinormalisasi hingga tahap 3NF guna mencegah redundansi data dan anomali transaksi.
2. Mengembangkan backend logic PHP untuk pemrosesan keranjang belanja kasir, validasi stok minimum secara real-time, dan pengurangan stok obat otomatis.
3. Mengimplementasikan algoritma sistem deteksi obat kadaluwarsa (alert otomatis ketika sisa masa aktif obat < 90 hari).
4. Membuat modul ekspor laporan penjualan harian/bulanan ke format siap cetak/PDF untuk mempermudah audit owner apotek.
5. Mengelola repositori GitHub tim, memfasilitasi integrasi kode antarmuka dengan modul backend.

##### Hasil:
Sistem diuji dengan blackbox testing (100% test case lulus) dan berhasil dipresentasikan dengan nilai akhir A.

---

#### 2. Information Retrieval & Dense Retrieval System
- **Kategori**: Artificial Intelligence / Natural Language Processing / Search Engine
- **Konteks**: Tugas Mata Kuliah Temu Kembali Informasi
- **Peran Saya**: **Core Algorithm & Retrieval Pipeline Engineer**
- **Teknologi**: Python, Dense Retrieval, Vector Space Model, Sastrawi NLP, Cosine Similarity
- **Repositori**: [github.com/NURHABIBATULUMAH/InformationRetrieval-DenseRetrieval](https://github.com/NURHABIBATULUMAH/InformationRetrieval-DenseRetrieval)

##### Masalah & Solusi:
- **Masalah**: Pencarian dokumen konvensional berbasis leksikal hanya mencocokkan kata persis tanpa mempertimbangkan makna semantik, sinonim, maupun variasi morfologi kata dalam Bahasa Indonesia.
- **Solusi**: Membangun search engine dokumen berbasis Dense Retrieval dan Vector Space Model dengan pipeline text preprocessing lengkap (Nazief & Adriani Stemming) serta kalkulasi kesamaan semantik.

##### Kontribusi Spesifik Saya dalam Tim:
1. Membangun pipeline preprocessing teks otomatis: Case Folding, Tokenizing, Stopwords Removal (kamus Tala), dan Stemming Bahasa Indonesia.
2. Mengimplementasikan model Dense Retrieval untuk pemetaan query dan dokumen ke dalam ruang vektor berdimensi padat.
3. Mengembangkan algoritma Cosine Similarity untuk mengukur kedekatan sudut antara vektor query pengguna dengan seluruh vektor dokumen korpus.
4. Menghubungkan algoritma dengan antarmuka web yang menampilkan ranking dokumen berurutan dari skor relevansi tertinggi dan snippet konten terbaik.

##### Hasil:
Mesin pencari mampu memproses pencarian semantik dalam waktu sub-detik dengan hasil dokumen yang relevan secara kontekstual.

---

#### 3. Sistem Pemesanan Kamar Hotel (Project PAW)
- **Kategori**: Web Development / Transaction Processing
- **Konteks**: Tugas Praktikum Pemrograman Aplikasi Web (PAW)
- **Peran Saya**: **Backend & Business Logic Developer**
- **Teknologi**: PHP, MySQL, JavaScript ES6, CSS Flexbox & Grid, Laragon
- **Repositori**: [github.com/NURHABIBATULUMAH/Project-PAW-Sistem-Pemesanan-Kamar-Hotel](https://github.com/NURHABIBATULUMAH/Project-PAW-Sistem-Pemesanan-Kamar-Hotel)

##### Masalah & Solusi:
- **Masalah**: Risiko terjadinya tumpang tindih pemesanan (double booking) kamar pada rentang tanggal yang sama dan perlunya alur reservasi yang ramah pengguna.
- **Solusi**: Mengembangkan platform reservasi dengan mekanisme pengecekan ketersediaan tanggal dinamis, sistem checkout invoice, dan manajemen status reservasi hotel.

##### Kontribusi Spesifik Saya dalam Tim:
1. Merancang logika backend validasi tanggal (date-range overlap query) untuk memastikan kamar yang dipilih berstatus bebas pada rentang tanggal tamu.
2. Mengembangkan modul kalkulasi otomatis total tagihan berdasarkan tarif kamar (Standard, Deluxe, Suite), lama malam inap, dan pajak layanan.
3. Membangun sistem autentikasi sesi aman (User Authentication & Session Management) untuk tamu dan panel front-desk admin.
4. Mengembangkan modul invoice digital dan dashboard monitoring reservasi (Pending, Confirmed, Cancelled).

##### Hasil:
Aplikasi berhasil mengeliminasi potensi tabrakan reservasi 100% pada simulasi pengujian multi-user.

---

#### 4. Platform Simulasi & Ujian TOEFL (Project TOEFL)
- **Kategori**: EdTech / Web Application
- **Konteks**: Tugas Kolaboratif Pemrograman & Desain Antarmuka
- **Peran Saya**: **Frontend Engineer & Interactive State Manager**
- **Teknologi**: JavaScript ES6+, HTML5 Web Audio API, CSS3 Modern UI, JSON/PHP
- **Repositori**: [github.com/NURHABIBATULUMAH/Project-Toefl](https://github.com/NURHABIBATULUMAH/Project-Toefl)

##### Masalah & Solusi:
- **Masalah**: Mahasiswa membutuhkan platform simulasi ujian TOEFL yang mencerminkan kondisi ujian asli (timer ketat per sesi, audio listening sekali putar, dan penghitungan konversi skor TOEFL yang rumit).
- **Solusi**: Membangun antarmuka simulasi ujian modern dengan countdown timer per bagian, sinkronisasi pemutar audio, dan kalkulator konversi skor skala 217-677.

##### Kontribusi Spesifik Saya dalam Tim:
1. Merancang dan mengembangkan antarmuka ujian yang bersih, responsif, dan bebas gangguan untuk perangkat desktop dan laptop.
2. Mengintegrasikan pemutar audio HTML5 Web Audio API untuk sesi Listening Comprehension dengan penguncian kontrol pemutaran sesuai tata tertib ujian.
3. Mengelola state kuesioner dinamis via JavaScript (Local Storage persistence) sehingga progres jawaban peserta tersimpan aman jika browser tidak sengaja tertutup.
4. Menulis formula konversi nilai mentah (raw score) ke skor standar TOEFL PBT/iBT secara otomatis dan instan saat ujian selesai.

##### Hasil:
Diuji coba pada rekan satu kelas dan berhasil membantu mahasiswa mengukur estimasi skor TOEFL dengan akurasi 100% sesuai tabel konversi ETS.

---

#### 5. Proyek Sains Data (PSD Repository)
- **Kategori**: Data Science / Predictive Analytics
- **Konteks**: Tugas Mata Kuliah Proyek Sains Data (PSD)
- **Peran Saya**: **Data Analyst & ML Modeler**
- **Teknologi**: Python 3, Jupyter Notebook, Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn
- **Repositori**: [github.com/NURHABIBATULUMAH/PSD](https://github.com/NURHABIBATULUMAH/PSD)

##### Masalah & Solusi:
- **Masalah**: Dataset tabular dunia nyata seringkali memiliki kualitas rendah (missing values, outlier, label tidak seimbang), memerlukan pembersihan dan evaluasi algoritma yang tepat.
- **Solusi**: Membangun alur kerja data science terstruktur dari Exploratory Data Analysis (EDA), rekayasa fitur (feature engineering), hingga pemodelan klasifikasi prediktif.

##### Kontribusi Spesifik Saya dalam Tim:
1. Melakukan analisis statistik deskriptif dan visualisasi interaktif (correlation heatmap, boxplot distribusi, pairplot) menggunakan Seaborn & Matplotlib.
2. Menerapkan pra-pemrosesan data: imputasi nilai hilang, encoding data kategorik (One-Hot / Label Encoding), serta normalisasi fitur dengan Scikit-Learn StandardScaler.
3. Melatih dan membandingkan beberapa model Machine Learning (Decision Tree, Random Forest, K-Nearest Neighbors, Logistic Regression).
4. Mengevaluasi performa model menggunakan Confusion Matrix, Precision, Recall, F1-Score, dan kurva ROC-AUC untuk memilih model terbaik.

##### Hasil:
Model klasifikasi terbaik mencapai akurasi lebih dari 85% dengan kode notebook yang terdokumentasi rapi di GitHub.

---

#### 6. Penambangan Data (Pendata Repository)
- **Kategori**: Data Mining / Unsupervised Learning & Knowledge Discovery
- **Konteks**: Tugas Mata Kuliah Penambangan Data (Pendata)
- **Peran Saya**: **Data Mining Engineer & Pattern Analyst**
- **Teknologi**: Python 3, Jupyter Notebook, Scikit-Learn, K-Means Clustering, Pandas, Matplotlib
- **Repositori**: [github.com/NURHABIBATULUMAH/Pendata](https://github.com/NURHABIBATULUMAH/Pendata)

##### Masalah & Solusi:
- **Masalah**: Menemukan segmentasi data dan pola tersembunyi pada kumpulan data bervolume besar tanpa label target yang jelas.
- **Solusi**: Menerapkan pipeline penambangan data unsupervised clustering (K-Means), reduksi dimensi, dan evaluasi validitas klaster.

##### Kontribusi Spesifik Saya dalam Tim:
1. Mengimplementasikan algoritma clustering K-Means dan menentukan jumlah $k$ klaster optimal menggunakan Elbow Method dan Silhouette Score.
2. Melakukan data scaling, handling multi-collinearity, dan ekstraksi karakteristik unik tiap klaster data.
3. Memvisualisasikan hasil pemetaan klaster menggunakan scatter plot multidimensi yang mudah dipahami bagi stakeholder non-teknis.
4. Mendokumentasikan notebook analitika data mining dengan struktur yang rapi dan teruji di repositori GitHub.

##### Hasil:
Berhasil membentuk profil klaster data yang homogen dan memiliki perbedaan antar-klaster yang signifikan.

---

### VI. INFORMASI PENDIDIKAN & AKADEMIK
- **Jenjang / Program**: Sarjana (S1) Teknik Informatika
- **Perguruan Tinggi**: Universitas Trunojoyo Madura, Bangkalan, Jawa Timur
- **Periode**: 2022 – Sekarang (Semester 5 Aktif Menuju Semester 6)
- **Mata Kuliah Relevan**:
  - Rekayasa Perangkat Lunak (A)
  - Basis Data & Desain Basis Data (A)
  - Pemrograman Web (A)
  - Temu Kembali Informasi (A)
  - Struktur Data & Algoritma (A)
  - Sains Data & Kecerdasan Buatan (A)
  - Jaringan Komputer & Pemrograman Berorientasi Objek (A)

---

### VII. KOMITMEN & KESIAPAN MAGANG
1. **Ketersediaan Waktu**: Siap melaksanakan magang secara penuh waktu (Full-time) sesuai jam kerja perusahaan selama periode magang semester genap.
2. **Fleksibilitas Lokasi**: Bersedia ditempatkan di Surabaya, Sidoarjo, Madura, Malang, Jawa Timur secara On-Site, maupun sistem kerja Hybrid / Remote.
3. **Administrasi Kampus**: Surat pengantar magang dari Fakultas Teknik Universitas Trunojoyo Madura siap diproses secara resmi setelah perusahaan memberikan konfirmasi penerimaan.

---

*Dokumen portofolio ini disusun secara jujur dan dapat dipertanggungjawabkan kebenarannya.*
