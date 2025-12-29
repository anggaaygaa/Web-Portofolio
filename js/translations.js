/* ========================================
   LANGUAGE TRANSLATIONS
   Indonesian & English Support
======================================== */

const translations = {
    id: {
        // Navbar
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_skills: "Keahlian",
        nav_projects: "Proyek",
        nav_contact: "Kontak",

        // Hero Section (index.html)
        hero_welcome: "Selamat Datang",
        hero_greeting: "Halo, Saya",
        hero_intro: "Saya adalah seorang",
        hero_description: "Mahasiswa Teknologi Informasi di Universitas Brawijaya yang passionate dalam pengembangan web, kecerdasan buatan, dan Internet of Things. Mari berkolaborasi untuk mewujudkan ide-ide inovatif!",
        hero_btn_projects: "Lihat Project 🚀",
        hero_btn_contact: "Hubungi Saya 📧",
        hero_btn_cv: "📄 Download CV",
        availability_badge: "Tersedia untuk Bekerja",

        // Stats
        stat_semester: "Semester",
        stat_technologies: "Teknologi",
        stat_expertise: "Bidang Keahlian",

        // Featured Skills
        featured_skills_prefix: "Keahlian",
        featured_skills_suffix: "Unggulan",
        featured_skills_subtitle: "Teknologi yang saya kuasai untuk membangun solusi digital",
        btn_see_all_skills: "Lihat Semua Keahlian →",

        // CTA Section
        cta_collaborate: "Tertarik untuk",
        cta_collaborate_span: "Berkolaborasi",
        cta_description: "Saya selalu terbuka untuk diskusi tentang project baru, ide kreatif, atau kesempatan kolaborasi di bidang teknologi.",
        cta_btn: "Mari Bicara! 💬",

        // About Page
        about_prefix: "Tentang",
        about_suffix: "Saya",
        about_subtitle: "Mengenal lebih dekat tentang saya, perjalanan, dan passion saya",
        about_hello: "Halo! Saya",
        about_description_1: "Saya adalah mahasiswa Program Studi Teknologi Informasi di Universitas Brawijaya, saat ini sedang menempuh semester 3 dan akan memasuki semester 4. Dengan fokus pada pengembangan solusi digital yang inovatif, saya memiliki ketertarikan mendalam di bidang Web Development, Artificial Intelligence, Cyber Security, dan Internet of Things (IoT). Saya percaya bahwa kombinasi keempat bidang ini dapat menciptakan ekosistem teknologi yang powerful dan berdampak nyata bagi masyarakat.",
        about_description_2: "Passion saya terletak pada menciptakan solusi teknologi yang tidak hanya inovatif, tetapi juga memberikan manfaat nyata bagi pengguna. Saya selalu berusaha mengikuti perkembangan teknologi terkini dan mengaplikasikannya dalam project-project yang saya kerjakan. Bagi saya, setiap baris kode adalah kesempatan untuk memecahkan masalah dan memberikan nilai tambah. Saya juga aktif mengeksplorasi machine learning dan neural networks untuk mengembangkan aplikasi cerdas yang dapat membantu kehidupan sehari-hari.",
        about_description_3: "Di luar perkuliahan, saya aktif mengembangkan diri melalui berbagai komunitas dan program pengembangan. Saya adalah member aktif di Google Developer Group (GDG) on Campus Universitas Brawijaya sejak November 2025, di mana saya berkesempatan untuk belajar langsung dari para expert, berkolaborasi dalam project open source, dan berkontribusi dalam komunitas developer yang dinamis. Saya juga merupakan alumni Samsung Innovation Campus dan pernah menjadi Staff Magang di Kementerian Advokesma BEM UB, pengalaman yang memperkaya soft skills dan kemampuan leadership saya.",

        // Education & Experience
        edu_exp_prefix: "Pendidikan",
        edu_exp_suffix: "& Pengalaman",
        edu_exp_subtitle: "Perjalanan pendidikan dan pengalaman saya",
        education_title: "Pendidikan",
        experience_title: "Pengalaman",
        edu_it: "Teknologi Informasi",
        edu_ub: "Universitas Brawijaya - Semester 3",
        exp_gdg: "Member GDG on Campus",
        exp_gdg_desc: "Google Developer Group on Campus - Universitas Brawijaya",
        exp_samsung: "Peserta Samsung Innovation Campus",
        exp_samsung_desc: "Program pelatihan dan kompetisi inovasi teknologi oleh Samsung",
        exp_bem: "Staff Magang Kementerian Advokesma",
        exp_bem_desc: "Badan Eksekutif Mahasiswa - Universitas Brawijaya",

        // Interests
        interests_prefix: "Minat",
        interests_suffix: "& Fokus",
        interests_subtitle: "Bidang yang saya fokuskan dan minati",
        interest_ai: "Mengeksplorasi machine learning dan AI untuk menciptakan solusi cerdas yang dapat membantu kehidupan manusia.",
        interest_iot: "Mengembangkan sistem IoT yang menghubungkan perangkat fisik dengan dunia digital untuk otomatisasi.",
        interest_security: "Mempelajari keamanan sistem dan jaringan untuk melindungi data dan infrastruktur digital.",
        interest_web: "Membangun aplikasi web yang modern, responsif, dan user-friendly menggunakan teknologi terkini.",
        interest_network: "Merancang, mengimplementasikan, dan mengelola infrastruktur jaringan komputer yang handal dan efisien.",

        // Connect CTA
        connect_title: "Mari",
        connect_span: "Terhubung",
        connect_desc: "Tertarik untuk berdiskusi atau berkolaborasi? Jangan ragu untuk menghubungi saya!",
        btn_contact_me: "Hubungi Saya 📧",
        btn_see_projects: "Lihat Proyek 🚀",

        // Affiliations Section
        affiliations_title: "Afiliasi & Komunitas",
        affil_ub_name: "Universitas Brawijaya",
        affil_ub_role: "Mahasiswa Teknologi Informasi",
        affil_gdg_name: "GDG on Campus UB",
        affil_gdg_role: "Member",
        affil_samsung_name: "Samsung Innovation Campus",
        affil_samsung_role: "Peserta Program",
        affil_bem_name: "BEM UB",
        affil_bem_role: "Staff Kementerian Advokesma",

        // Skills Page
        skills_prefix: "Keahlian",
        skills_suffix: "Saya",
        skills_subtitle: "Teknologi dan bahasa pemrograman yang saya kuasai",
        frontend_dev: "Pengembangan Frontend",
        backend_dev: "Pengembangan Backend",
        css_frameworks: "Framework CSS",
        special_interest: "Minat Khusus",
        soft_skills_prefix: "Soft",
        soft_skills_suffix: "Skills",
        soft_skills_subtitle: "Kemampuan non-teknis yang mendukung saya",
        problem_solving: "Problem Solving",
        problem_solving_desc: "Menganalisis masalah kompleks dan menemukan solusi kreatif yang efektif.",
        fast_learner: "Pembelajar Cepat",
        fast_learner_desc: "Cepat dalam mempelajari teknologi dan konsep baru.",
        teamwork: "Kerja Tim",
        teamwork_desc: "Bekerja sama dalam tim untuk mencapai tujuan bersama.",
        adaptability: "Adaptabilitas",
        adaptability_desc: "Cepat beradaptasi dengan teknologi dan perubahan baru.",
        currently_learning_prefix: "Sedang",
        currently_learning_suffix: "Dipelajari",
        currently_learning_subtitle: "Teknologi yang sedang saya pelajari",
        ml_desc: "Deep learning dan neural networks dengan Python",
        iot_desc: "Arduino, ESP32, dan integrasi sensor",
        security_desc: "Keamanan jaringan dan dasar ethical hacking",
        cloud_desc: "Google Cloud Platform dan deployment",

        // Projects Page
        projects_prefix: "Proyek",
        projects_suffix: "Saya",
        projects_subtitle: "Koleksi project yang telah dan sedang saya kerjakan",
        filter_all: "Semua",
        project_portfolio_desc: "Website portfolio personal dengan desain modern, animasi interaktif, dan responsive design.",
        project_ecommerce_desc: "Website e-commerce dengan fitur keranjang belanja, manajemen produk, dan sistem pembayaran.",
        project_smarthome_desc: "Sistem smart home dengan kontrol lampu, suhu, dan keamanan berbasis IoT.",
        project_imgclass_desc: "Model machine learning untuk klasifikasi gambar menggunakan neural network.",
        project_dashboard_desc: "Dashboard interaktif untuk visualisasi data dengan charts dan grafik real-time.",
        project_weather_desc: "Sistem monitoring cuaca real-time dengan sensor suhu, kelembaban, dan tekanan udara.",
        github_cta_title: "Lihat Lebih Banyak di",
        github_cta_desc: "Semua project saya tersedia di GitHub. Silakan lihat source code dan berkontribusi!",
        btn_visit_github: "Kunjungi GitHub 🐙",

        // Contact Page
        contact_prefix: "Hubungi",
        contact_suffix: "Saya",
        contact_subtitle: "Punya pertanyaan atau ingin berkolaborasi? Hubungi saya!",
        contact_intro: "Saya selalu senang mendengar dari Anda! Baik itu untuk diskusi project, peluang kolaborasi, atau sekedar say hello, jangan ragu untuk menghubungi saya.",
        contact_location: "Lokasi",
        contact_campus: "Kampus",
        location_value: "Malang, Jawa Timur",
        campus_value: "Universitas Brawijaya",
        contact_follow: "Ikuti Saya",
        form_name: "Nama Lengkap *",
        form_name_placeholder: "Masukkan nama Anda",
        form_name_error: "Nama wajib diisi",
        form_email: "Email *",
        form_email_error: "Email tidak valid",
        form_subject: "Subjek",
        form_subject_placeholder: "Subjek pesan Anda",
        form_message: "Pesan *",
        form_message_placeholder: "Tulis pesan Anda di sini...",
        form_message_error: "Pesan wajib diisi",
        form_submit: "Kirim Pesan 📨",
        form_success_title: "Pesan Terkirim!",
        form_success_desc: "Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.",

        // FAQ
        faq_prefix: "Pertanyaan",
        faq_suffix: "Umum",
        faq_subtitle: "Beberapa pertanyaan yang sering ditanyakan",
        faq_response: "Berapa lama waktu response?",
        faq_response_ans: "Biasanya saya akan membalas dalam 24-48 jam.",
        faq_collab: "Bisa kolaborasi project?",
        faq_collab_ans: "Tentu! Saya terbuka untuk kolaborasi di bidang web, IoT, dan AI.",
        faq_share: "Bisa sharing knowledge?",
        faq_share_ans: "Ya! Saya senang berdiskusi dan berbagi tentang teknologi.",
        faq_help: "Bisa bantu tugas kuliah?",
        faq_help_ans: "Mari diskusi! Tapi ingat, belajar sendiri itu lebih baik 😊",

        map_city: "Kota Malang, Jawa Timur",
        map_btn: "Lihat di Google Maps",
        map_title_prefix: "Lokasi",
        map_title_suffix: "Saya",
        map_subtitle: "Temukan lokasi kampus dan daerah tempat tinggal saya",
        map_location_title: "Universitas Brawijaya",
        response_time: "Biasanya membalas dalam 24-48 jam",

        // Dynamic Greeting
        greeting_morning: "Selamat Pagi",
        greeting_afternoon: "Selamat Siang",
        greeting_evening: "Selamat Sore",
        greeting_night: "Selamat Malam",

        // Footer
        footer_location: "Malang, Indonesia"
    },

    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        // Hero Section (index.html)
        hero_welcome: "Welcome",
        hero_greeting: "Hi, I'm",
        hero_intro: "I am a",
        hero_description: "Information Technology student at Brawijaya University who is passionate about web development, artificial intelligence, and Internet of Things. Let's collaborate to bring innovative ideas to life!",
        hero_btn_projects: "View Projects 🚀",
        hero_btn_contact: "Contact Me 📧",
        hero_btn_cv: "📄 Download CV",
        availability_badge: "Available for Work",

        // Stats
        stat_semester: "Semester",
        stat_technologies: "Technologies",
        stat_expertise: "Expertise Areas",

        // Featured Skills
        featured_skills_prefix: "Featured",
        featured_skills_suffix: "Skills",
        featured_skills_subtitle: "Technologies I master to build digital solutions",
        btn_see_all_skills: "See All Skills →",

        // CTA Section
        cta_collaborate: "Interested in",
        cta_collaborate_span: "Collaborating",
        cta_description: "I'm always open to discussing new projects, creative ideas, or collaboration opportunities in technology.",
        cta_btn: "Let's Talk! 💬",

        // About Page
        about_prefix: "About",
        about_suffix: "Me",
        about_subtitle: "Get to know me better, my journey, and my passion",
        about_hello: "Hello! I'm",
        about_description_1: "I am a student of Information Technology at Brawijaya University, currently in my 3rd semester and about to enter the 4th semester. With a focus on developing innovative digital solutions, I have a deep interest in Web Development, Artificial Intelligence, Cyber Security, and Internet of Things (IoT). I believe that the combination of these four fields can create a powerful technology ecosystem that has a real impact on society.",
        about_description_2: "My passion lies in creating technology solutions that are not only innovative but also provide real benefits to users. I always strive to keep up with the latest technology developments and apply them to the projects I work on. For me, every line of code is an opportunity to solve problems and add value. I am also actively exploring machine learning and neural networks to develop intelligent applications that can help everyday life.",
        about_description_3: "Outside of academics, I actively develop myself through various communities and development programs. I have been an active member of Google Developer Group (GDG) on Campus at Brawijaya University since November 2025, where I have the opportunity to learn directly from experts, collaborate on open source projects, and contribute to a dynamic developer community. I am also an alumni of Samsung Innovation Campus and served as an Intern Staff at the Advokesma Ministry of BEM UB, experiences that enriched my soft skills and leadership abilities.",

        // Education & Experience
        edu_exp_prefix: "Education",
        edu_exp_suffix: "& Experience",
        edu_exp_subtitle: "My educational journey and experiences",
        education_title: "Education",
        experience_title: "Experience",
        edu_it: "Information Technology",
        edu_ub: "Brawijaya University - Semester 3",
        exp_gdg: "GDG on Campus Member",
        exp_gdg_desc: "Google Developer Group on Campus - Brawijaya University",
        exp_samsung: "Samsung Innovation Campus Participant",
        exp_samsung_desc: "Technology innovation training and competition program by Samsung",
        exp_bem: "Advokesma Ministry Intern Staff",
        exp_bem_desc: "Student Executive Board - Brawijaya University",

        // Interests
        interests_prefix: "Interests",
        interests_suffix: "& Focus",
        interests_subtitle: "Areas I focus on and am interested in",
        interest_ai: "Exploring machine learning and AI to create smart solutions that can help human life.",
        interest_iot: "Developing IoT systems that connect physical devices with the digital world for automation.",
        interest_security: "Learning system and network security to protect data and digital infrastructure.",
        interest_web: "Building modern, responsive, and user-friendly web applications using the latest technology.",
        interest_network: "Designing, implementing, and managing reliable and efficient computer network infrastructure.",

        // Connect CTA
        connect_title: "Let's",
        connect_span: "Connect",
        connect_desc: "Interested in discussing or collaborating? Don't hesitate to contact me!",
        btn_contact_me: "Contact Me 📧",
        btn_see_projects: "View Projects 🚀",

        // Affiliations Section
        affiliations_title: "Affiliations & Communities",
        affil_ub_name: "Brawijaya University",
        affil_ub_role: "Information Technology Student",
        affil_gdg_name: "GDG on Campus UB",
        affil_gdg_role: "Member",
        affil_samsung_name: "Samsung Innovation Campus",
        affil_samsung_role: "Program Participant",
        affil_bem_name: "BEM UB",
        affil_bem_role: "Advokesma Ministry Staff",

        // Skills Page
        skills_prefix: "My",
        skills_suffix: "Skills",
        skills_subtitle: "Technologies and programming languages I master",
        frontend_dev: "Frontend Development",
        backend_dev: "Backend Development",
        css_frameworks: "CSS Frameworks",
        special_interest: "Special Interest",
        soft_skills_prefix: "Soft",
        soft_skills_suffix: "Skills",
        soft_skills_subtitle: "Non-technical abilities that support me",
        problem_solving: "Problem Solving",
        problem_solving_desc: "Analyzing complex problems and finding effective creative solutions.",
        fast_learner: "Fast Learner",
        fast_learner_desc: "Quick to learn new technologies and concepts.",
        teamwork: "Teamwork",
        teamwork_desc: "Working together in a team to achieve common goals.",
        adaptability: "Adaptability",
        adaptability_desc: "Quickly adapting to new technologies and changes.",
        currently_learning_prefix: "Currently",
        currently_learning_suffix: "Learning",
        currently_learning_subtitle: "Technologies I'm currently learning",
        ml_desc: "Deep learning and neural networks with Python",
        iot_desc: "Arduino, ESP32, and sensor integration",
        security_desc: "Network security and ethical hacking basics",
        cloud_desc: "Google Cloud Platform and deployment",

        // Projects Page
        projects_prefix: "My",
        projects_suffix: "Projects",
        projects_subtitle: "Collection of projects I have worked on and am working on",
        filter_all: "All",
        project_portfolio_desc: "Personal portfolio website with modern design, interactive animations, and responsive design.",
        project_ecommerce_desc: "E-commerce website with shopping cart, product management, and payment system features.",
        project_smarthome_desc: "Smart home system with IoT-based light, temperature, and security control.",
        project_imgclass_desc: "Machine learning model for image classification using neural network.",
        project_dashboard_desc: "Interactive dashboard for data visualization with real-time charts and graphs.",
        project_weather_desc: "Real-time weather monitoring system with temperature, humidity, and air pressure sensors.",
        github_cta_title: "See More on",
        github_cta_desc: "All my projects are available on GitHub. Feel free to view the source code and contribute!",
        btn_visit_github: "Visit GitHub 🐙",

        // Contact Page
        contact_prefix: "Get In",
        contact_suffix: "Touch",
        contact_subtitle: "Have a question or want to collaborate? Contact me!",
        contact_intro: "I'm always happy to hear from you! Whether it's to discuss a project, collaboration opportunities, or just to say hello, don't hesitate to reach out.",
        contact_location: "Location",
        contact_campus: "Campus",
        location_value: "Malang, East Java, Indonesia",
        campus_value: "Brawijaya University",
        contact_follow: "Follow Me",
        form_name: "Full Name *",
        form_name_placeholder: "Enter your name",
        form_name_error: "Name is required",
        form_email: "Email *",
        form_email_error: "Invalid email",
        form_subject: "Subject",
        form_subject_placeholder: "Subject of your message",
        form_message: "Message *",
        form_message_placeholder: "Write your message here...",
        form_message_error: "Message is required",
        form_submit: "Send Message 📨",
        form_success_title: "Message Sent!",
        form_success_desc: "Thank you for contacting me. I will reply to your message soon.",

        // FAQ
        faq_prefix: "Frequently",
        faq_suffix: "Asked Questions",
        faq_subtitle: "Some frequently asked questions",
        faq_response: "How long is the response time?",
        faq_response_ans: "I usually reply within 24-48 hours.",
        faq_collab: "Can we collaborate on projects?",
        faq_collab_ans: "Of course! I'm open to collaboration in web, IoT, and AI.",
        faq_share: "Can you share knowledge?",
        faq_share_ans: "Yes! I enjoy discussing and sharing about technology.",
        faq_help: "Can you help with college assignments?",
        faq_help_ans: "Let's discuss! But remember, learning on your own is better 😊",

        map_city: "Malang City, East Java",
        map_btn: "View on Google Maps",
        map_title_prefix: "My",
        map_title_suffix: "Location",
        map_subtitle: "Find my campus location and area where I live",
        map_location_title: "Brawijaya University",
        response_time: "Usually replies within 24-48 hours",

        // Dynamic Greeting
        greeting_morning: "Good Morning",
        greeting_afternoon: "Good Afternoon",
        greeting_evening: "Good Evening",
        greeting_night: "Good Night",

        // Footer
        footer_location: "Malang, Indonesia"
    }
};

// Get current language from localStorage or default to Indonesian
let currentLanguage = localStorage.getItem('portfolio_language') || 'id';

// Function to set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('portfolio_language', lang);
    updatePageContent();
    updateLanguageButton();
}

// Function to toggle language
function toggleLanguage() {
    const newLang = currentLanguage === 'id' ? 'en' : 'id';
    setLanguage(newLang);
}

// Function to get translation
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Function to update language button text
function updateLanguageButton() {
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
        const langText = langBtn.querySelector('.lang-text');
        if (langText) {
            // Show current active language (EN when English, ID when Indonesian)
            langText.textContent = currentLanguage === 'id' ? 'ID' : 'EN';
        }
    }
}

// Function to update dynamic greeting based on time and language
function updateDynamicGreeting() {
    const greetingElement = document.querySelector('.dynamic-greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greetingKey;
        if (hour < 12) greetingKey = 'greeting_morning';
        else if (hour < 17) greetingKey = 'greeting_afternoon';
        else if (hour < 21) greetingKey = 'greeting_evening';
        else greetingKey = 'greeting_night';

        greetingElement.textContent = t(greetingKey);
    }
}

// Function to update all translatable content on the page
function updatePageContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            element.textContent = t(key);
        }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (key) {
            element.placeholder = t(key);
        }
    });

    // Update html lang attribute
    document.documentElement.lang = currentLanguage;

    // Update dynamic greeting
    updateDynamicGreeting();
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    updateLanguageButton();
    updatePageContent();
});
