# 🎓 PANDUAN LENGKAP PENGGUNAAN PORTOFOLIO MAGANG
## Khusus Mahasiswa Teknik Informatika — Universitas Trunojoyo Madura (UTM)

Halo! Portofolio ini telah dirancang khusus agar Anda siap melamar ke berbagai perusahaan, startup, BUMN, maupun instansi untuk posisi **Magang Industri / PKL / MBKM Semester Depan**.

---

### 📂 DAFTAR FILE DALAM REPOSITORI INI:
1. [index.html](file:///d:/laragon/www/portofolio/index.html) — Aplikasi Web Portofolio interaktif modern (dengan dark/light mode, filter proyek, popup detail peran tim, dan tombol cetak PDF).
2. [assets/css/style.css](file:///d:/laragon/www/portofolio/assets/css/style.css) — Desain modern bertaraf industri dengan glassmorphism dan stylesheet `@media print` otomatis.
3. [assets/js/main.js](file:///d:/laragon/www/portofolio/assets/js/main.js) — Logika interaktif, data proyek lengkap, sertifikasi BNSP & Dicoding, serta generator WhatsApp.
4. [PORTOFOLIO_MAGANG_DOKUMEN.md](file:///d:/laragon/www/portofolio/PORTOFOLIO_MAGANG_DOKUMEN.md) — Dokumen tertulis siap salin ke Word/Google Docs untuk dikirim ke formulir pendaftaran magang yang meminta file portofolio.
5. [assets/images/](file:///d:/laragon/www/portofolio/assets/images/) — Foto profil dan 5 screenshot mockups UI resolusi tinggi untuk setiap proyek.

---

### 🚀 1. CARA MEMBUKA & MENJALANKAN PORTOFOLIO DI LAPTOP
Karena folder ini berada di `D:\laragon\www\portofolio`:
- **Cara 1 (Melalui Laragon)**:
  1. Buka aplikasi Laragon, klik **Start All**.
  2. Buka browser (Chrome / Edge / Firefox), ketik URL: `http://localhost/portofolio/` atau `http://portofolio.test`.
- **Cara 2 (Langsung Tanpa Server)**:
  - Cukup klik ganda file [index.html](file:///d:/laragon/www/portofolio/index.html), halaman akan langsung terbuka sempurna di browser Anda.

---

### 📄 2. CARA MENGUBAH / MENYIMPAN PORTOFOLIO MENJADI PDF
Banyak perusahaan atau form magang meminta lampiran berkas dokumen berformat PDF:
1. Buka web portofolio di browser.
2. Klik tombol **"Unduh PDF"** di navbar atas, atau tombol **"Cetak / Simpan PDF Portofolio"** di bagian kontak.
3. Jendela cetak browser akan otomatis terbuka:
   - Pada kolom *Destination / Tujuan*, pilih **"Save as PDF"** (Simpan sebagai PDF).
   - Pada *Layout*, pilih **Portrait**.
   - Halaman web sudah diprogram khusus dengan stylesheet cetak: latar belakang hitam akan otomatis berubah menjadi putih bersih dan rapi, navigasi tombol disembunyikan, sehingga menjadi dokumen PDF profesional berstandar korporat.
4. Klik **Save** dan beri nama berkas: `Portofolio_Magang_Nurhabibatul_Umah_Teknik_Informatika_UTM.pdf`.

---

### 🌐 3. CARA MENG-HOSTING ONLINE GRATIS (GITHUB PAGES)
Agar link portofolio Anda bisa dicantumkan di CV atau profil LinkedIn Anda (misal: `https://nurhabibatulumah.github.io/portofolio`):
1. Buka terminal di VS Code pada folder ini (`d:\laragon\www\portofolio`).
2. Jalankan perintah git:
   ```bash
   git init
   git add .
   git commit -m "feat: init modern internship portfolio"
   git branch -M main
   git remote add origin https://github.com/NURHABIBATULUMAH/portofolio.git
   git push -u origin main
   ```
3. Buka halaman repositori Anda di GitHub:
   - Klik menu **Settings** -> **Pages**.
   - Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch**.
   - Pilih Branch: `main` dan folder: `/ (root)`, lalu klik **Save**.
4. Dalam 1-2 menit, portofolio Anda akan aktif dan online di internet secara gratis!

---

### 💡 4. RAHASIA MENJAWAB WAWANCARA MAGANG TENTANG "PROYEK KELOMPOK"
Banyak mahasiswa minder saat wawancara karena proyeknya adalah tugas kelompok. **Padahal di mata HRD dan Lead Developer, kemampuan bekerja dalam tim adalah nilai plus yang luar biasa!**

Gunakan teknik jawaban **STAR** (Situation, Task, Action, Result) berikut saat ditanya:

#### 💬 Pertanyaan Interviewer:
> *"Saya lihat di portofolio kamu ada proyek Sistem Apotek / IR / Hotel. Bukankah ini tugas kelompok kuliah? Lalu apa peran kamu sebenarnya?"*

#### 🌟 Contoh Jawaban Terbaik:
> *"Betul sekali Bapak/Ibu. Proyek-proyek tersebut memang dikembangkan dalam tim 3–4 orang untuk simulasi pengembangan perangkat lunak riil. Justru dari situ saya belajar bagaimana mengelola kolaborasi kode menggunakan Git & GitHub.*
> 
> *Secara spesifik di Sistem Apotek, peran utama saya adalah sebagai **Lead Database & Backend Developer**. Saya bertanggung jawab merancang arsitektur 8 tabel relasional yang dinormalisasi hingga tahap 3NF agar tidak terjadi redundansi data. Selain itu, saya menulis logika backend untuk memproses transaksi kasir dan algoritma validasi stok minimum serta notifikasi obat kadaluwarsa.*
> 
> *Sedangkan di proyek Information Retrieval, saya bertanggung jawab membangun pipeline algoritma intinya: mulai dari text preprocessing bahasa Indonesia, pembobotan TF-IDF, hingga perankingan dokumen menggunakan Cosine Similarity pada Vector Space Model."*

*Dengan jawaban seperti ini, pewawancara akan langsung melihat bahwa Anda paham kode secara mendalam dan bukan sekadar menumpang nama di kelompok.*

---

### ✉️ 5. TEMPLATE EMAIL PENGAJUAN MAGANG KE HRD PERUSAHAAN

**Subjek Email:**
`Lamaran Magang Mahasiswa - Teknik Informatika UTM - Nurhabibatul Umah`

**Isi Pesan Email:**
```text
Yth. Tim Rekrutmen / Human Resources
[Nama Perusahaan / Startup]
di Tempat

Dengan hormat,

Perkenalkan, saya Nurhabibatul Umah, mahasiswa semester 5 Program Studi Teknik Informatika di Universitas Trunojoyo Madura (UTM). Melalui surat ini, saya bermaksud untuk mengajukan permohonan magang / Praktik Kerja Lapangan (PKL) di [Nama Perusahaan] untuk posisi [Junior Web Developer / Data Science Intern / Software Engineer Intern] pada periode semester genap mendatang.

Sepanjang masa perkuliahan, saya aktif mengembangkan beberapa aplikasi perangkat lunak berbasis tim maupun mandiri, antara lain:
1. Sistem Manajemen Apotek (Point of Sale, manajemen stok, dan integrasi basis data 3NF MySQL) — github.com/NURHABIBATULUMAH/Sistem-Manajemen-Apotek
2. Information Retrieval & Dense Retrieval System (Pencarian semantik dokumen teks & pipeline NLP Sastrawi) — github.com/NURHABIBATULUMAH/InformationRetrieval-DenseRetrieval
3. Sistem Pemesanan Kamar Hotel / Project PAW (Validasi tanggal anti-double booking & reservasi digital) — github.com/NURHABIBATULUMAH/Project-PAW-Sistem-Pemesanan-Kamar-Hotel
4. Platform Simulasi Ujian TOEFL (Dynamic exam timer, HTML5 Web Audio API, & konversi skor ETS) — github.com/NURHABIBATULUMAH/Project-Toefl
5. Proyek Sains Data / PSD (Exploratory Data Analysis, feature engineering, & klasifikasi Scikit-Learn) — github.com/NURHABIBATULUMAH/PSD
6. Penambangan Data / Pendata (Unsupervised K-Means clustering, silhouette evaluation, & pattern discovery) — github.com/NURHABIBATULUMAH/Pendata

Selain itu, kompetensi pemrograman saya telah tersertifikasi secara resmi oleh Badan Nasional Sertifikasi Profesi (BNSP) untuk skema Pemrogram Junior (SKKNI) serta kelulusan submission Dicoding Indonesia.

Sebagai bahan pertimbangan Bapak/Ibu, saya lampirkan dokumen Curriculum Vitae (CV) dan Portofolio Lengkap. Portofolio interaktif saya juga dapat diakses secara langsung melalui tautan berikut:
🔗 [Tautan Portofolio Web Anda]

Besar harapan saya untuk mendapatkan kesempatan wawancara agar dapat menjelaskan lebih lanjut mengenai kontribusi yang dapat saya berikan bagi tim teknologi di [Nama Perusahaan].

Atas perhatian dan kesempatan yang diberikan, saya sampaikan terima kasih yang sebesar-besarnya.

Hormat saya,

Nurhabibatul Umah
Mahasiswa S1 Teknik Informatika
Universitas Trunojoyo Madura
WhatsApp: [Nomor Telepon Anda]
Email: nurhabibatulumah.ti@gmail.com
GitHub: https://github.com/NURHABIBATULUMAH
```

---

*Selamat mempersiapkan magang! Portofolio ini telah disusun dengan standar tertinggi untuk membantu Anda mendapatkan tempat magang impian.*
