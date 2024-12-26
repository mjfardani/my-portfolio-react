import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Saya adalah seorang pengembang web pemula yang tertarik dalam menciptakan solusi desain grafis yang menarik. Selain belajar pengembangan web, saya juga sedang mengasah keterampilan menggunakan Photoshop untuk membuat desain visual yang mendukung identitas dan tujuan bisnis. Saya bersemangat untuk membantu Anda merancang desain yang estetis dan fungsional, dengan tujuan memberikan pengalaman pengguna yang lebih baik.`;

export const ABOUT_TEXT = `Saya adalah seorang pengembang full stack yang berdedikasi dan serbaguna dengan semangat menciptakan aplikasi web yang efisien dan ramah pengguna. Dengan pengalaman profesional selama 5 tahun, saya telah bekerja dengan berbagai teknologi, termasuk React, Next.js, Node.js, MySQL, PostgreSQL, dan MongoDB. Perjalanan saya di bidang pengembangan web dimulai dari rasa penasaran yang mendalam tentang cara kerja teknologi, yang kemudian berkembang menjadi karier di mana saya terus belajar dan beradaptasi dengan tantangan baru. Saya menikmati bekerja dalam tim yang kolaboratif dan senang memecahkan masalah kompleks untuk memberikan solusi berkualitas tinggi. Di luar coding, saya suka tetap aktif, mengeksplorasi teknologi baru, dan berkontribusi pada proyek open-source.`;

export const EXPERIENCES = [
  {
    year: "2023 - Sekarang",
    role: "Pengembang Web",
    company: " Freelancer",
    description: `Mengembangkan dan memelihara aplikasi web sebagai freelancer, dengan spesialisasi dalam JavaScript, React.js, Laravel, MySQL, dan WordPress. Mengintegrasikan API RESTful dan bekerja dengan database seperti MySQL. Bekerja sama dengan klien untuk menentukan cakupan proyek, kebutuhan, dan tenggat waktu, serta memberikan solusi web berkualitas tinggi.`,
    technologies: [, "React.js", "Laravel", "MySQL", "Wordpress"],
  },
  {
    year: "2022 - Sekarang",
    role: "Desainer Grafis",
    company: " Freelancer",
    description: `Membuat dan merancang konten visual untuk aplikasi web, termasuk antarmuka pengguna, menggunakan alat seperti Adobe Photoshop, CorelDraw, dan Canva. Bekerja sama dengan pengembang untuk memastikan integrasi elemen desain yang mulus ke dalam produk akhir. Fokus pada menghasilkan desain yang menarik, responsif, dan meningkatkan pengalaman pengguna.`,
    technologies: ["Adobe Photoshop", "CorelDraw", "Canva"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "Sebuah website portofolio yang menampilkan proyek, keahlian, dan informasi kontak secara profesional.",
    technologies: ["React", "Tailwind CSS"],
    category: "Web Development",
    repositoryUrl: "https://emjeeefardani.site"
  },
  {
    title: "Bookshelf App",
    image: project2,
    description:
      "Aplikasi untuk mengelola koleksi buku, lengkap dengan fitur pencatatan buku yang telah dibaca atau ingin dibaca.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    repositoryUrl: "https://github.com/mjfardani/bookshelf-app-starter-project"
  },
  {
    title: "Youtube Downloader",
    image: project3,
    description:
      "Aplikasi untuk mengunduh video dari YouTube menggunakan API, dengan antarmuka yang sederhana dan responsif.",
    technologies: ["HTML", "CSS", "React", "Consume API"],
    category: "Web Development",
    repositoryUrl: "https://github.com/mjfardani/yt-downloader"
  },
  {
    title: "Personal Notes",
    image: project4,
    description:
      "Platform untuk mencatat dan menyimpan catatan pribadi, dilengkapi fitur sinkronisasi dan penyimpanan berbasis database.",
    technologies: ["HTML", "CSS", "Express", "mySQL"],
    category: "Web Development",
    repositoryUrl: "https://github.com/mjfardani/personal-notes-starter"
  },
  {
    title: "Landing Page Jasa Alumunium",
    image: project3,
    description:
      "Landing page sederhana untuk mempromosikan layanan pemasangan dan desain alumunium dengan tampilan yang menarik.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Landing Page",
    repositoryUrl: "https://www.tukangaluminiumsemarang.my.id/"
  },
  {
    title: "Contact App",
    image: project1,
    description:
      "Aplikasi untuk mengelola kontak dengan fitur pencarian dan pengelompokan data kontak.",
    technologies: ["HTML", "CSS", "React"],
    category: "Web Development",
    repositoryUrl: "https://github.com/mjfardani/contacts-app"
  }
];

export const CONTACT = {
  address: "Demak, Jawa Tengah, Indonesia ",
  phoneNo: "+62 8950 3870 208",
  email: "muhjauharfardani@gmail.com",
};

import img1 from '/src/assets/gallery/1.png';
import img2 from '/src/assets/gallery/2.png';
import img3 from '/src/assets/gallery/3.png';
import img4 from '/src/assets/gallery/4.png';
import img5 from '/src/assets/gallery/5.png';
import img6 from '/src/assets/gallery/6.png';

export const designs = [
  { id: 1, src: img1, alt: 'Desain 1' },
  { id: 2, src: img2, alt: 'Desain 2' },
  { id: 3, src: img3, alt: 'Desain 3' },
  { id: 4, src: img4, alt: 'Desain 4' },
  { id: 5, src: img5, alt: 'Desain 5' },
  { id: 6, src: img6, alt: 'Desain 6' },
];


export const EDUCATION = [
  {
    instansi: "Universitas Semarang",
    prodi: "S1 Sistem Informasi",
    tahun: "2022 - Sekarang",
    alamat: "Semarang, Jawa Tengah",
  },
  {
    instansi: "Madrasah Aliyah Asy-Syarifah",
    prodi: "IPA",
    tahun: "2019 - 2022",
    alamat: "Demak, Jawa Tengah",
  },
  {
    instansi: "Pondok Pesantren Asy-Syarifah",
    tahun: "2016 - 2022",
    alamat: "Demak, Jawa Tengah",
  }
]

export const CERTIFICATION = [
  {
    provider: "Google",
    title: "Technical Support Fundamentals",
    credentialID: "NCMWV2KCU0R7",
    link: "https://www.coursera.org/account/accomplishments/certificate/NCMWV2KCU0R7",
    description: "Sertifikat ini menunjukkan pemahaman dasar tentang dukungan teknis. Memahami cara menangani masalah teknis terkait perangkat keras dan perangkat lunak. Dengan menyelesaikan kursus ini, peserta mempelajari keterampilan dasar yang diperlukan untuk menangani permintaan dukungan teknis dengan efektif."
  },
  {
    provider: "Dicoding Indonesia",
    title: "Basic Programming Javascript",
    credentialID: "2VX34R79VZYQ",
    link: "https://www.dicoding.com/certificates/2VX34R79VZYQ",
    description: "Sertifikat ini diberikan setelah menyelesaikan kursus dasar pemrograman menggunakan JavaScript. Kursus ini mencakup konsep-konsep dasar pemrograman, seperti variabel, tipe data, pengendalian alur, dan pengolahan data menggunakan JavaScript yang esensial untuk pengembangan web."
  },
  {
    provider: "Dicoding Indonesia",
    title: "Learn to Build Web Applications with React",
    credentialID: "98XW57Q7JPM3",
    link: "https://www.dicoding.com/certificates/98XW57Q7JPM3",
    description: "Sertifikat ini diberikan setelah menyelesaikan kursus React, yang mengajarkan cara membangun aplikasi web menggunakan React. Kursus ini mencakup konsep-konsep seperti state, props, komponen, dan pengelolaan data dalam aplikasi web menggunakan React."
  },
  {
    provider: "Dicoding Indonesia",
    title: "Basic Web Programming",
    credentialID: "2VX34R79VZYQ",
    link: "https://www.dicoding.com/certificates/2VX34R79VZYQ",
    description: "Sertifikat ini diberikan setelah menyelesaikan kursus pemrograman web dasar. Kursus ini mencakup penggunaan HTML, CSS, dan JavaScript untuk membuat aplikasi web statis yang sederhana, serta memperkenalkan peserta pada struktur dan desain web."
  },
  {
    provider: "Dicoding Indonesia",
    title: "Front-end Web Development for Beginners",
    credentialID: "JMZV4O3YJXN9",
    link: "https://www.dicoding.com/certificates/JMZV4O3YJXN9",
    description: "Sertifikat ini menunjukkan kemampuan dalam pengembangan front-end web untuk pemula. Kursus ini mengajarkan dasar-dasar pembuatan website dengan menggunakan HTML, CSS, dan JavaScript, serta penerapan desain responsif untuk tampilan website yang optimal di berbagai perangkat."
  },
  {
    provider: "Badan Nasional Sertifikasi Profesi (BNSP)",
    title: "Video Editing Kompetensi Multimedia",
    credentialID: "59112 2166 0018569 2022",
    link: "https://drive.google.com/file/d/1W3JuQYkmitZKl7FPvW05X3ZFizJJ3hgD/view?usp=sharing",
    description: "Sertifikat ini diberikan oleh BNSP yang menunjukkan kemampuan dalam pengeditan video. Sertifikat ini mencakup pemahaman mendalam mengenai teknik pengeditan multimedia, serta penggunaan perangkat lunak pengeditan video untuk menciptakan konten yang profesional."
  }
];

