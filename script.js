
  
  function yukle() {
      const input = document.getElementById('fileInput');
      const files = input.files;
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append('images[]', files[i]);
      }

      fetch('upload.php',  { 
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        document.getElementById('sonuc').innerHTML =
          data.urls.map(url => `<img src="${url}" width="120">`).join('');
      })
      .catch(e => alert("Yükleme hatası!"));
    }
   
const luxurySwiper = new Swiper("#luxurySlider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  }
});

let portfolios = JSON.parse(localStorage.getItem("portfolios")) || [];

let mainSwiper = null;
let detailSwiper = null;
let currentLang = localStorage.getItem("lang") || "tr";
let uploadedImages = [];
const imagePreview = document.getElementById("imagePreview");

const translations = {
        tr: {
            "page_title": "Gündüz Emlak - Samandağ Şube",
            "meta_description": "Gerçek kurumsal, tam ekran, glassmorphism ve animasyonlu ultra modern emlak sitesi.",
            "company_name": "Gündüz Emlak",
            "home": "Anasayfa",
            "portfolios": "Portföyler",
            "about_us": "Hakkımızda",
            "contact": "İletişim",
            "advisors": "Danışmanlar",
            "admin": "Admin",
            "location": "Konum",
            "dark_mode": "Koyu Mod",
            "light_mode": "Açık Mod",
            "dark_mode_enabled": "Koyu moda geçildi",
            "light_mode_enabled": "Açık moda geçildi",
            "language_set_to": "Dil Türkçe olarak ayarlandı.",
            "find_your_dream_home_title": "Hayalindeki Evi <span>Bul</span>",
            "find_your_dream_home_desc": "Gündüz Emlak ile Türkiye'deki en seçkin portföyler, cam gibi tam ekran tasarımda.",
            "browse_portfolios_btn": "Portföylere Göz At",
            "city_placeholder": "Şehir",
            "district_placeholder": "İlçe",
            "min_price_placeholder": "Min. Fiyat",
            "max_price_placeholder": "Maks. Fiyat",
            "type_select_option": "Tür",
            "for_sale_option": "Satılık",
            "for_rent_option": "Kiralık",
            "search_btn": "Ara",
            "latest_listings_title": "Son Eklenenler",
            "all_portfolios_title": "Tüm Portföyler",
            "filter_btn": "Filtrele",
            "result_found": "{{count}} sonuç bulundu.",
            "no_portfolio_found": "Aradığınız kriterlere uygun portföy bulunamadı.",
            "detail_btn": "Detayları Gör",
            "for_sale_label": "Satılık",
            "for_rent_label": "Kiralık",
            "about_us_title": "Hakkımızda",
            "our_mission_title": "Misyonumuz",
            "our_mission_desc": "Müşterilerimize en iyi emlak deneyimini sunarak, hayallerindeki gayrimenkule ulaşmalarını sağlamak ve sektörde güvenilir, yenilikçi bir lider olmak.",
            "our_vision_title": "Vizyonumuz",
            "our_vision_desc": "Emlak sektöründe dijital dönüşüme öncülük ederek, şeffaflık, hız ve kolaylık prensipleriyle tüm müşterilerimiz için fark yaratan çözümler üretmek.",
            "our_values_title": "Değerlerimiz",
            "our_values_desc": "Dürüstlük, müşteri memnuniyeti, yenilikçilik, ekip çalışması ve sosyal sorumluluk bilinciyle hareket etmek temel değerlerimizi oluşturur.",
            "contact_us_title": "Bize Ulaşın",
            "leave_message_title": "Mesaj Bırakın",
            "your_name_placeholder": "Adınız Soyadınız",
            "your_email_placeholder": "E-posta Adresiniz",
            "subject_placeholder": "Konu",
            "your_message_placeholder": "Mesajınız",
            "send_message_btn": "Gönder",
            "contact_info_title": "İletişim Bilgileri",
            "company_address": "Samandağ, Hatay, Türkiye",
            "message_sent_success": "Mesajınız başarıyla gönderildi!",
            "our_advisors_title": "Danışmanlarımız",
            "advisor_ali_name": "Yusuf Gündüz",
            "advisor_ali_bio": "Deneyimli ve müşteri odaklı emlak danışmanı. Satış ve kiralama konularında uzman.",
            "advisor_ayse_name": "Hüseyin Gündüz",
            "advisor_ayse_bio": "Geniş portföyü ve hızlı çözümleriyle tanınan başarılı emlak danışmanı.",
            "admin_login_title": "Admin Girişi",
            "username_placeholder": "Kullanıcı Adı",
            "password_placeholder": "Şifre",
            "login_btn": "Giriş Yap",
            "admin_login_success": "Admin girişi başarılı!",
            "admin_login_failed": "Kullanıcı adı veya şifre hatalı.",
            "portfolio_management_title": "Portföy Yönetimi",
            "add_new_portfolio_title": "Yeni Portföy Ekle",
            "portfolio_title_placeholder": "Başlık",
            "portfolio_location_placeholder": "Konum (Örn: Hatay, Samandağ)",
            "portfolio_price_placeholder": "Fiyat (TL)",
            "portfolio_area_placeholder": "Metrekare",
            "select_type_option": "Tip Seçiniz",
            "select_category_option": "Kategori Seçiniz",
            "category_apartment": "Daire",
            "category_villa": "Villa",
            "category_land": "Arsa",
            "category_commercial": "İş Yeri",
            "bedrooms_placeholder": "Yatak Odası Sayısı (Örn: 3+1)",
            "bathrooms_placeholder": "Banyo Sayısı (Örn: 2)",
            "year_built_placeholder": "Yapım Yılı (Örn: 2010)",
            "description_placeholder": "Açıklama",
            "upload_images_label": "Görsel Yükle (Birden Fazla Seçilebilir)",
            "add_portfolio_btn": "Portföy Ekle",
            "portfolio_added_success": "Yeni portföy eklendi!",
            "existing_portfolios_title": "Mevcut Portföyler",
            "delete_btn": "Sil",
            "confirm_delete_portfolio": "{{title}} adlı portföyü silmek istediğinizden emin misiniz?",
            "portfolio_deleted_success": "Portföy silindi!",
            "logout_btn": "Çıkış Yap",
            "logout_success": "Başarıyla çıkış yapıldı.",
            "area_unit": "m²",
            "modal_type_label": "Tip:",
            "modal_category_label": "Kategori:",
            "modal_bedrooms_label": "Yatak Odası:",
            "modal_bathrooms_label": "Banyo:",
            "modal_year_built_label": "Yapım Yılı:",
            "contact_us_btn_modal": "İletişime Geçin"
        },
        en: {
            "page_title": "Gunduz Real Estate - Samandag Branch",
            "meta_description": "Truly corporate, full-screen, glassmorphism and animated ultra-modern real estate website.",
            "company_name": "Gunduz Real Estate",
            "home": "Homepage",
            "portfolios": "Portfolios",
            "about_us": "About Us",
            "contact": "Contact",
            "advisors": "Advisors",
            "admin": "Admin",
            "location": "Location",
            "dark_mode": "Dark Mode",
            "light_mode": "Light Mode",
            "dark_mode_enabled": "Dark mode enabled",
            "light_mode_enabled": "Light mode enabled",
            "language_set_to": "Language set to English.",
            "find_your_dream_home_title": "Find Your <span>Dream Home</span>",
            "find_your_dream_home_desc": "With Gunduz Real Estate, access the most exclusive portfolios in Turkey, presented in a modern, full-screen glassmorphism design.",
            "browse_portfolios_btn": "Browse Portfolios",
            "city_placeholder": "City",
            "district_placeholder": "District",
            "min_price_placeholder": "Min. Price",
            "max_price_placeholder": "Max. Price",
            "type_select_option": "Type",
            "for_sale_option": "For Sale",
            "for_rent_option": "For Rent",
            "search_btn": "Search",
            "latest_listings_title": "Latest Listings",
            "all_portfolios_title": "All Portfolios",
            "filter_btn": "Filter",
            "result_found": "{{count}} results found.",
            "no_portfolio_found": "No portfolios found matching your criteria.",
            "detail_btn": "View Details",
            "for_sale_label": "For Sale",
            "for_rent_label": "For Rent",
            "about_us_title": "About Us",
            "our_mission_title": "Our Mission",
            "our_mission_desc": "To provide our customers with the best real estate experience, helping them achieve their dream property, and to be a reliable, innovative leader in the sector.",
            "our_vision_title": "Our Vision",
            "our_vision_desc": "To lead the digital transformation in the real estate sector, creating distinctive solutions for all our customers with principles of transparency, speed, and convenience.",
            "our_values_title": "Our Values",
            "our_values_desc": "Honesty, customer satisfaction, innovation, teamwork, and social responsibility are our core values.",
            "contact_us_title": "Contact Us",
            "leave_message_title": "Leave a Message",
            "your_name_placeholder": "Your Name Surname",
            "your_email_placeholder": "Your Email Address",
            "subject_placeholder": "Subject",
            "your_message_placeholder": "Your Message",
            "send_message_btn": "Send",
            "contact_info_title": "Contact Information",
            "company_address": "Samandag, Hatay, Turkey",
            "message_sent_success": "Your message has been sent successfully!",
            "our_advisors_title": "Our Advisors",
            "advisor_ali_name": "Ali Yilmaz",
            "advisor_ali_bio": "Experienced and customer-focused real estate advisor. Expert in sales and rentals.",
            "advisor_ayse_name": "Ayse Demir",
            "advisor_ayse_bio": "Successful real estate advisor known for her extensive portfolio and quick solutions.",
            "admin_login_title": "Admin Login",
            "username_placeholder": "Username",
            "password_placeholder": "Password",
            "login_btn": "Login",
            "admin_login_success": "Admin login successful!",
            "admin_login_failed": "Incorrect username or password.",
            "portfolio_management_title": "Portfolio Management",
            "add_new_portfolio_title": "Add New Portfolio",
            "portfolio_title_placeholder": "Title",
            "portfolio_location_placeholder": "Location (e.g., Hatay, Samandag)",
            "portfolio_price_placeholder": "Price (TL)",
            "portfolio_area_placeholder": "Square Meters",
            "select_type_option": "Select Type",
            "select_category_option": "Select Category",
            "category_apartment": "Apartment",
            "category_villa": "Villa",
            "category_land": "Land",
            "category_commercial": "Commercial",
            "bedrooms_placeholder": "Number of Bedrooms (e.g., 3+1)",
            "bathrooms_placeholder": "Number of Bathrooms (e.g., 2)",
            "year_built_placeholder": "Year Built (e.g., 2010)",
            "description_placeholder": "Description",
            "upload_images_label": "Upload Images (Multiple Selectable)",
            "add_portfolio_btn": "Add Portfolio",
            "portfolio_added_success": "New portfolio added!",
            "existing_portfolios_title": "Existing Portfolios",
            "delete_btn": "Delete",
            "confirm_delete_portfolio": "Are you sure you want to delete the portfolio titled '{{title}}'?",
            "portfolio_deleted_success": "Portfolio deleted!",
            "logout_btn": "Logout",
            "logout_success": "Successfully logged out.",
            "area_unit": "sqm",
            "modal_type_label": "Type:",
            "modal_category_label": "Category:",
            "modal_bedrooms_label": "Bedrooms:",
            "modal_bathrooms_label": "Bathrooms:",
            "modal_year_built_label": "Year Built:",
            "contact_us_btn_modal": "Contact Us"
        },
        ar: {
            "page_title": "عقارات غوندوز - فرع سمنداغ",
            "meta_description": "موقع عقاري حديث للغاية، بتصميم مؤسسي وشاشة كاملة وتأثير الزجاج والرسوم المتحركة.",
            "company_name": "عقارات غوندوز",
            "home": "الرئيسية",
            "portfolios": "المحفظة",
            "about_us": "عنا",
            "contact": "اتصل بنا",
            "advisors": "المستشارون",
            "admin": "الإدارة",
            "location": "الموقع",
            "dark_mode": "الوضع الداكن",
            "light_mode": "الوضع الفاتح",
            "dark_mode_enabled": "تم تفعيل الوضع الداكن",
            "light_mode_enabled": "تم تفعيل الوضع الفاتح",
            "language_set_to": "تم تعيين اللغة إلى العربية.",
            "find_your_dream_home_title": "ابحث عن منزل <span>أحلامك</span>",
            "find_your_dream_home_desc": "مع عقارات غوندوز، يمكنك الوصول إلى أكثر المحافظ تميزًا في تركيا، بتصميم عصري وكامل الشاشة مع تأثير الزجاج.",
            "browse_portfolios_btn": "تصفح المحفظة",
            "city_placeholder": "المدينة",
            "district_placeholder": "المنطقة",
            "min_price_placeholder": "الحد الأدنى للسعر",
            "max_price_placeholder": "الحد الأقصى للسعر",
            "type_select_option": "النوع",
            "for_sale_option": "للبيع",
            "for_rent_option": "للإيجار",
            "search_btn": "بحث",
            "latest_listings_title": "أحدث القوائم",
            "all_portfolios_title": "جميع المحافظ",
            "filter_btn": "تصفية",
            "result_found": "تم العثور على {{count}} نتيجة.",
            "no_portfolio_found": "لم يتم العثور على محافظ مطابقة لمعايير البحث.",
            "detail_btn": "عرض التفاصيل",
            "for_sale_label": "للبيع",
            "for_rent_label": "للإيجار",
            "about_us_title": "عنا",
            "our_mission_title": "مهمتنا",
            "our_mission_desc": "توفير أفضل تجربة عقارية لعملائنا، ومساعدتهم في الوصول إلى ممتلكات أحلامهم، وأن نكون رائدين موثوقين ومبتكرين في القطاع.",
            "our_vision_title": "رؤيتنا",
            "our_vision_desc": "قيادة التحول الرقمي في قطاع العقارات، وإنشاء حلول مميزة لجميع عملائنا بمبادئ الشفافية والسرعة والراحة.",
            "our_values_title": "قيمنا",
            "our_values_desc": "الصدق، رضا العملاء، الابتكار، العمل الجماعي، والمسؤولية الاجتماعية هي قيمنا الأساسية.",
            "contact_us_title": "اتصل بنا",
            "leave_message_title": "اترك رسالة",
            "your_name_placeholder": "اسمك الكامل",
            "your_email_placeholder": "عنوان بريدك الإلكتروني",
            "subject_placeholder": "الموضوع",
            "your_message_placeholder": "رسالتك",
            "send_message_btn": "إرسال",
            "contact_info_title": "معلومات الاتصال",
            "company_address": "سمنداغ، هاتاي، تركيا",
            "message_sent_success": "تم إرسال رسالتك بنجاح!",
            "our_advisors_title": "مستشارونا",
            "advisor_ali_name": "علي يلماز",
            "advisor_ali_bio": "مستشار عقاري ذو خبرة ومهتم بالعملاء. خبير في المبيعات والإيجارات.",
            "advisor_ayse_name": "عائشة ديمير",
            "advisor_ayse_bio": "مستشارة عقارية ناجحة معروفة بمحفظتها الواسعة وحلولها السريعة.",
            "admin_login_title": "تسجيل دخول المشرف",
            "username_placeholder": "اسم المستخدم",
            "password_placeholder": "كلمة المرور",
            "login_btn": "تسجيل الدخول",
            "admin_login_success": "تم تسجيل دخول المشرف بنجاح!",
            "admin_login_failed": "اسم المستخدم أو كلمة المرور غير صحيحة.",
            "portfolio_management_title": "إدارة المحفظة",
            "add_new_portfolio_title": "إضافة محفظة جديدة",
            "portfolio_title_placeholder": "العنوان",
            "portfolio_location_placeholder": "الموقع (مثال: هاتاي، سمنداغ)",
            "portfolio_price_placeholder": "السعر (ليرة تركية)",
            "portfolio_area_placeholder": "المساحة بالمتر المربع",
            "select_type_option": "اختر النوع",
            "select_category_option": "اختر الفئة",
            "category_apartment": "شقة",
            "category_villa": "فيلا",
            "category_land": "أرض",
            "category_commercial": "مكان عمل",
            "bedrooms_placeholder": "عدد غرف النوم (مثال: 3+1)",
            "bathrooms_placeholder": "عدد الحمامات (مثال: 2)",
            "year_built_placeholder": "سنة البناء (مثال: 2010)",
            "description_placeholder": "الوصف",
            "upload_images_label": "تحميل الصور (يمكن اختيار أكثر من واحدة)",
            "add_portfolio_btn": "إضافة محفظة",
            "portfolio_added_success": "تمت إضافة محفظة جديدة!",
            "existing_portfolios_title": "المحافظ الحالية",
            "delete_btn": "حذف",
            "confirm_delete_portfolio": "هل أنت متأكد أنك تريد حذف المحفظة بعنوان '{{title}}'؟",
            "portfolio_deleted_success": "تم حذف المحفظة!",
            "logout_btn": "تسجيل الخروج",
            "logout_success": "تم تسجيل الخروج بنجاح.",
            "area_unit": "م²",
            "modal_type_label": "النوع:",
            "modal_category_label": "الفئة:",
            "modal_bedrooms_label": "غرف النوم:",
            "modal_bathrooms_label": "الحمامات:",
            "modal_year_built_label": "سنة البناء:",
            "contact_us_btn_modal": "تواصل معنا"
        }
    };



function savePortfolios() {
  localStorage.setItem("portfolios", JSON.stringify(portfolios));
}

function showToast(message, duration = 3000) {
  const toast = document.getElementById("toastMessage");
  if (toast) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), duration);
  }
}

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);

  const labelKey = theme === "dark" ? "light_mode" : "dark_mode";
  const icon = theme === "dark" ?
    '<i class="fa-solid fa-sun"></i>' :
    '<i class="fa-solid fa-moon"></i>';

  ["themeToggle", "mobileThemeToggle"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = icon + `<span style="margin-left:7px" data-lang-key="${labelKey}"></span>`;
      const span = el.querySelector('span[data-lang-key]');
      if (span) span.textContent = translations[currentLang][labelKey] || labelKey;
    }
  });

  if (window.showToast) showToast(translations[currentLang][theme === "dark" ? "dark_mode_enabled" : "light_mode_enabled"]);
}

function updateContentLanguage(lang) {
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    let translatedText = translations[lang][key] || element.textContent;

    if (key === "find_your_dream_home_title" && /<span[^>]*>/.test(translatedText)) {
      element.innerHTML = translatedText;
    } else if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
      element.placeholder = translatedText;
    } else if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
      element.setAttribute('content', translatedText);
    } else if (element.tagName === 'TITLE') {
      document.title = translatedText;
    } else {
      element.textContent = translatedText;
    }
  });

  document.querySelectorAll('select option').forEach(option => {
    const key = option.getAttribute('data-lang-key');
    if (key) option.textContent = translations[lang][key] || option.textContent;
  });

  currentLang = lang;
  localStorage.setItem("lang", lang);
}

// === Navigation ===
function showSection(sectionId) {
  document.querySelectorAll('.spa-section').forEach(section => section.classList.add('hide'));
  const section = document.getElementById(sectionId);
  if (section) section.classList.remove('hide');

  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const hashId = sectionId.replace('Section', '');
  const activeLink = document.querySelector(`.nav-link[href="#${hashId}"]`);
  if (activeLink) activeLink.classList.add('active');

  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) mobileNav.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// === Swiper Slider ===
function renderMainSlider() {
  const sliderImages = document.getElementById("mainSliderImages");
  if (!sliderImages) return;
  sliderImages.innerHTML = "";

  if (!portfolios || portfolios.length === 0) {
    sliderImages.innerHTML = `<div class="swiper-slide"><img src="https://via.placeholder.com/800x450/4285F4/FFFFFF?text=İlan+Yok" alt="İlan Yok"></div>`;
  } else {
    portfolios.forEach(p => {
      const imgSrc = (p.images && p.images.length > 0) ? p.images[0] : 'https://via.placeholder.com/400x250?text=Gorsel+Yok';
      sliderImages.innerHTML += `<div class="swiper-slide"><img src="${imgSrc}" alt="${p.title}"></div>`;
    });
  }

  if (mainSwiper) mainSwiper.destroy(true, true);
  mainSwiper = new Swiper("#mainSlider", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
  });
}

function renderPortfolios() {
  const portfolioList = document.getElementById("portfolioList");
  const latestList = document.getElementById("latestList");
  if (portfolioList) portfolioList.innerHTML = '';
  if (latestList) latestList.innerHTML = '';

  const sortedPortfolios = [...portfolios].sort((a, b) => b.id - a.id);

  sortedPortfolios.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "portfolio-card";
    card.innerHTML = `
      <img src="${p.images && p.images.length > 0 ? p.images[0] : 'https://via.placeholder.com/400x250/3e8ef7/FFFFFF?text=Gorsel+Yok'}" alt="${p.title}" class="portfolio-img">
      <span class="portfolio-type">${p.type === 'satilik' ? translations[currentLang].for_sale_label : translations[currentLang].for_rent_label}</span>
      <button class="portfolio-fav" data-id="${p.id}"><i class="fa-regular fa-heart"></i></button>
      <div class="portfolio-body">
        <h3 class="portfolio-title">${p.title}</h3>
        <p class="portfolio-meta">${p.location} - ${p.area} ${translations[currentLang].area_unit}</p>
        <p class="portfolio-price">${p.price.toLocaleString('tr-TR')} TL</p>
        <button class="detail-btn" data-id="${p.id}">${translations[currentLang].detail_btn}</button>
      </div>
    `;
    if (portfolioList) portfolioList.appendChild(card.cloneNode(true));
    if (latestList && index < 6) latestList.appendChild(card.cloneNode(true));
  });
  attachPortfolioButtonListeners();
}

function attachPortfolioButtonListeners() {
  document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.onclick = handleDetailButtonClick;
  });
  document.querySelectorAll('.portfolio-fav').forEach(btn => {
    btn.onclick = handleFavButtonClick;
  });
}

function handleDetailButtonClick(event) {
  const portfolioId = parseInt(event.target.dataset.id);
  const portfolio = portfolios.find(p => p.id === portfolioId);
  if (portfolio) showPortfolioDetail(portfolio);
}

function handleFavButtonClick(event) {
  const button = event.currentTarget;
  button.classList.toggle('faved');
  const icon = button.querySelector('i');
  if (button.classList.contains('faved')) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    showToast(translations[currentLang].favorites_added);
  } else {
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    showToast(translations[currentLang].favorites_removed);
  }
}

function showPortfolioDetail(portfolio) {
  const modal = document.getElementById("portfolioDetailModal");
  if (!modal) return;
  document.getElementById("detailModalTitle").textContent = portfolio.title;
  document.getElementById("detailModalLocation").textContent = portfolio.location;
  document.getElementById("detailModalPrice").textContent = portfolio.price.toLocaleString('tr-TR');
  document.getElementById("detailModalArea").textContent = portfolio.area;
  document.getElementById("detailModalType").textContent = portfolio.type === 'satilik' ? translations[currentLang].for_sale_label : translations[currentLang].for_rent_label;
  document.getElementById("detailModalCategory").textContent = translations[currentLang][`category_${portfolio.category}`] || portfolio.category;
  document.getElementById("detailModalBedrooms").textContent = portfolio.bedrooms || translations[currentLang].not_specified;
  document.getElementById("detailModalBathrooms").textContent = portfolio.bathrooms || translations[currentLang].not_specified;
  document.getElementById("detailModalYearBuilt").textContent = portfolio.yearBuilt || translations[currentLang].not_specified;
  document.getElementById("detailModalDescription").textContent = portfolio.description || translations[currentLang].no_description_available;

  const detailModalImages = document.getElementById("detailModalImages");
  detailModalImages.innerHTML = '';
  if (portfolio.images && portfolio.images.length > 0) {
    portfolio.images.forEach(img => {
      detailModalImages.innerHTML += `<div class="swiper-slide"><img src="${img}" alt="${portfolio.title}"></div>`;
    });
    if (detailSwiper) detailSwiper.destroy(true, true);
    detailSwiper = new Swiper("#detailSwiper", {
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".detail-next", prevEl: ".detail-prev" }
    });
    document.querySelector('.detail-next').style.display = 'flex';
    document.querySelector('.detail-prev').style.display = 'flex';
    document.querySelector('#detailSwiper .swiper-pagination').style.display = 'block';
  } else {
    detailModalImages.innerHTML = `<div class="swiper-slide"><img src="https://via.placeholder.com/800x450/cccccc/000000?text=${translations[currentLang].no_image_found}" alt="Görsel Yok"></div>`;
    if (detailSwiper) { detailSwiper.destroy(true, true); detailSwiper = null; }
    document.querySelector('.detail-next').style.display = 'none';
    document.querySelector('.detail-prev').style.display = 'none';
    document.querySelector('#detailSwiper .swiper-pagination').style.display = 'none';
  }
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

// ==Admin Panel ==

function checkLoginStatus() {
  const loggedIn = localStorage.getItem("adminLoggedIn") === "true";
  const adminLogin = document.getElementById("adminLogin");
  const adminPanel = document.getElementById("adminPanel");
  if (adminLogin && adminPanel) {
    adminLogin.classList.toggle("hide", loggedIn);
    adminPanel.classList.toggle("hide", !loggedIn);
  }
  if (loggedIn) renderAdminPortfolioList();
}

function renderAdminPortfolioList() {
  const list = document.getElementById("adminPortfolioList");
  if (!list) return;
  list.innerHTML = '';
  portfolios.forEach(p => {
    const item = document.createElement("div");
    item.className = "admin-portfolio-item";
    item.innerHTML = `
      <img src="${p.images && p.images.length > 0 ? p.images[0] : 'https://via.placeholder.com/60x45/3e8ef7/FFFFFF?text=Gorsel'}" alt="${p.title}">
      <span>${p.title} - ${p.location} (${p.price.toLocaleString('tr-TR')} TL)</span>
      <button class="delete-portfolio-btn" data-id="${p.id}">${translations[currentLang].delete_btn}</button>
    `;
    item.querySelector(".delete-portfolio-btn").onclick = () => {
      if (confirm(translations[currentLang].confirm_delete_portfolio.replace('{{title}}', p.title))) {
        portfolios = portfolios.filter(port => port.id !== p.id);
        savePortfolios();
        renderAdminPortfolioList();
        renderPortfolios();
        showToast(translations[currentLang].portfolio_deleted_success);
      }
    };
    list.appendChild(item);
  });
}

document.getElementById("addPortfolioForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const title = form.portfolioTitle.value.trim();
  const location = form.portfolioLocation.value.trim();
  const price = parseFloat(form.portfolioPrice.value);
  const area = parseFloat(form.portfolioArea.value);
  const type = form.portfolioType.value;
  const category = form.portfolioCategory.value;
  if (!(title && location && price && area && type && category)) {
    showToast("Lütfen tüm zorunlu alanları doldurun!");
    return;
  }
  if (uploadedImages.length === 0) {
    showToast("En az 1 görsel eklemelisiniz!");
    return;
  }
  const newPortfolio = {
    id: portfolios.length > 0 ? Math.max(...portfolios.map(p => p.id)) + 1 : 1,
    title, location, price, area, type, category,
    bedrooms: form.portfolioBedrooms.value || translations[currentLang].not_specified,
    bathrooms: form.portfolioBathrooms.value || translations[currentLang].not_specified,
    yearBuilt: form.portfolioYearBuilt.value || translations[currentLang].not_specified,
    description: form.portfolioDescription.value || translations[currentLang].no_description_available,
    images: [...uploadedImages],
    dateAdded: new Date().toLocaleString("tr-TR")
  };
  portfolios.push(newPortfolio);
  savePortfolios();
  renderPortfolios();
  renderAdminPortfolioList();
  form.reset();
  document.getElementById("imagePreview").innerHTML = "";
  uploadedImages = [];
  showToast("Portföy başarıyla eklendi!");
  renderMainSlider();
});


document.getElementById("loginBtn")?.addEventListener("click", () => {
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;
  if (username === "admin" && password === "admin") {
    localStorage.setItem("adminLoggedIn", "true");
    checkLoginStatus();
    showToast(translations[currentLang].admin_login_success);
  } else {
    showToast(translations[currentLang].admin_login_failed);
  }
});
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("adminLoggedIn");
  checkLoginStatus();
  showToast(translations[currentLang].logout_success);
});

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  showToast(translations[currentLang].message_sent_success);
  this.reset();
});


window.addEventListener("hashchange", function() {
  let initialHash = window.location.hash.substring(1);
  if (initialHash && document.getElementById(initialHash + 'Section')) {
    showSection(initialHash + 'Section');
  } else if (initialHash === 'map') {
    showSection('mapSection');
  } else {
    showSection('homeSection');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  let savedLang = localStorage.getItem("lang") || "tr";
  document.getElementById("langSelect").value = savedLang;
  document.getElementById("mobileLangSelect").value = savedLang;
  updateContentLanguage(savedLang);
  setTheme(localStorage.getItem("theme") || "light");
  renderPortfolios();
  renderMainSlider();
  checkLoginStatus();

  let initialHash = window.location.hash.substring(1);
  if (initialHash && document.getElementById(initialHash + 'Section')) {
    showSection(initialHash + 'Section');
  } else {
    showSection('homeSection');
  }
});


["themeToggle", "mobileThemeToggle"].forEach(id => {
  document.getElementById(id)?.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme === "light" ? "dark" : "light");
  });
});

["langSelect", "mobileLangSelect"].forEach(id => {
  document.getElementById(id)?.addEventListener("change", function() {
    const selectedLang = this.value;
    updateContentLanguage(selectedLang);
    showToast(translations[selectedLang].language_set_to);
    document.getElementById("langSelect").value = selectedLang;
    document.getElementById("mobileLangSelect").value = selectedLang;
    renderPortfolios();
    setTheme(localStorage.getItem("theme") || "light");
  });
});


const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (scrollTopBtn) {
    scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  }
});
scrollTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("hide");
});


document.querySelector("#portfolioDetailModal .modal-full-close")?.addEventListener("click", () => {
  document.getElementById("portfolioDetailModal").classList.add("hide");
  document.body.style.overflow = "auto";
});


const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
mobileMenuBtn?.addEventListener('click', function(event) {
  event.stopPropagation();
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : 'auto';
});
document.addEventListener('click', function(event) {
  if (!mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
    if (mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  }
});
mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
});
function updateSidebarVisibility() {
  const hash = window.location.hash;
  const sidebar = document.getElementById("sidebarAdvisor");
  if (sidebar) {
    sidebar.style.display = (hash === "#home" || hash === "#contact" || hash === "#admin" || hash === "") ? "" : "none";
  }
}
document.getElementById("portfolioImages").addEventListener("change", function(event) {
  const files = event.target.files;
  imagePreview.innerHTML = "";
  uploadedImages = [];

  if (files.length > 20) {
    showToast("En fazla 20 görsel yükleyebilirsiniz!");
    return;
  }

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    if (!files[i].type.startsWith("image/")) {
      showToast("Sadece resim dosyası yükleyebilirsiniz: " + files[i].name);
      continue;
    }
    formData.append('images[]', files[i]);
  }

  fetch('upload.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.urls && data.urls.length > 0) {
      uploadedImages = data.urls;
      data.urls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.style.maxWidth = "100px";
        img.style.height = "auto";
        imagePreview.appendChild(img);
      });
    } else {
      showToast("Yükleme başarısız!");
    }
  })
  .catch(() => showToast("Yükleme hatası!"));
});

window.addEventListener("load", updateSidebarVisibility);
window.addEventListener("hashchange", updateSidebarVisibility);
