// Language Switcher
const langButtons = document.querySelectorAll('.lang-btn');
const translations = {
  en: {
    // Navigation
    about: "about",
    location: "location",
    projectMaterials: "project materials",
    projectInteriors: "interiors and exteriors",
    projectAmenities: "amenities",
    unitTypes: "unit types",
    projectUpdates: "project updates",
    register: "register",
    lang: "العربية",

    // Hero Section
    heroTitle: "Montenapoleone",
    heroSubtitle: "Beauty speaks Italian!",

    // About Section
    aboutTitle: "Montenapoleone Egypt – A Touch of Italian Elegance in Mostakbal City",
    aboutText1: "In partnership with Al Ahly Sabbour, Reportage Egypt proudly introduces Montenapoleone Compound in the heart of Mostakbal City, New Cairo. Inspired by Milan's iconic fashion street, the project brings Italian charm to Egyptian lands.",
    aboutText2: "Spanning 465,000 m², Montenapoleone Egypt features 62% open spaces and offers a selection of 374 townhouses and residential buildings with simplex and duplex units ranging from 1 to 4 bedrooms, including private gardens for select units.",
    aboutText3: "With modern facades, contemporary designs, and high-quality finishes, Montenapoleone Egypt sets a new standard for luxurious living, seamlessly blending Italian beauty with modern functionality.",

    // Location Section
    locationTitle: "Location",
    getCloserTo: "get closer to",
    cityAttractions: "The city's attractions at your doorstep",

    // Project Materials Section
    projectMaterialsTitle: "Project Materials",
    brochure: "Brochure",
    unitTypesSheet: "Unit Types Sheet",
    trifold: "Trifold",
    floorPlan: "Floor Plan",
    masterPlan: "Master Plan",

    // Interiors Section
    exteriors: "Exteriors",
    interiors: "Interiors",
    exteriorsText: "Montenapoleone compound embodies elegance with sleek Italian design, modern facades, and warm earth tones. The architecture seamlessly integrates lush greenery and open spaces, creating a tranquil environment. The framed elevations add a unique aesthetic charm through a harmonious balance of mass and void.",
    buildingFeatures: "Each building features three sections:",
    basement: "Basement",
    typicalFloor: "Typical Floor",
    capRoof: "Cap/Roof with a Rooftop Pool",
    premiumFacades: "Premium facades with double-glazed glass invite natural light and fresh air, blending nature with modern living. Every detail is crafted to deliver practical, high-quality lifestyles",
    keyFeatures: "Key features include:",
    kitchens: "Kitchens:",
    kitchensDesc: "Fully equipped with elegant cabinetry and scratch-resistant countertops, combining sleek design with durability to meet both style and practicality needs.",
    bathrooms: "Bathrooms:",
    bathroomsDesc: "Luxuriously finished with premium tiles, bathtubs, and showers, offering a relaxing and refined experience.",
    interiorsText: "Whether designed for families or individuals, every corner of Montenapoleone reflects a commitment to comfort and sophistication, making it the ideal choice for those seeking a home that embodies both beauty and functionality.",

    // Marquee Section
    redefiningLuxury: "Redefining Luxury",
    redefiningHome: "Redefining Home",
    redefiningSanctuaries: "Redefining Sanctuaries",
    redefiningExperiences: "Redefining Experiences",

    // Amenities Section
    amenitiesTitle: "Amenities",
    swimmingPool: "Swimming Pool",
    gym: "Gym",
    playground: "Playground",
    footballCourt: "Football Court",
    shoppingCenter: "Shopping Center",
    mosque: "Mosque",

    // Unit Types Section
    unitTypesTitle: "Unit Types",
    oneBedroom: "One Bedroom",
    oneBedroomJunior: "One Bedroom - Junior",
    twoBedroom: "Two Bedroom",
    twoBedroomJunior: "Two Bedrooms - Junior",
    threeBedroom: "Three Bedroom",
    threeBedroomJunior: "Three Bedrooms - Junior",
    fourBedroom: "Four Bedrooms",
    typeA: "TYPE A",
    typeB: "TYPE B",
    typeC: "TYPE C",
    typeD: "TYPE D",

    // Project Updates Section
    projectVideo: "Project Video",
    constructionUpdate: "Construction Update",
    july2023: "July 2023",
    august2023: "August 2023",
    september2023: "September 2023",

    // Contact Section
    readyForExperience: "Ready for a new living",
    experience: "Experience?",
    registerInterest: "Register your interest now for more information",
    name: "Full Name",
    email: "Email",
    selectCountry: "Select Country",
    egypt: "Egypt (+20)",
    uae: "United Arab Emirates (2)",
    usa: "United States (1)",
    uk: "United Kingdom (1)",
    canada: "Canada (1)",
    australia: "Australia (1)",
    newZealand: "New Zealand (1)",
    phone: "Phone",
    enquireType: "Enquire type",
    client: "Client",
    agent: "Agent",
    media: "Media",
    other: "Other",
    message: "Message",
    maxWords: "Maximum 250 words",
    agreeToReceive: "I agree to receive commercial electronic messages.",
    acceptTerms: "By using this form, you accept the",
    websiteCookies: "Website Cookies",
    and: "and",
    privacyPolicy: "Privacy Policy",
    submit: "Submit"
  },
  ar: {
    // Navigation
    about: "حول",
    location: "الموقع",
    projectMaterials: "مواد المشروع",
    projectInteriors: "التصميمات الداخلية والخارجية",
    projectAmenities: "المرافق",
    unitTypes: "أنواع الوحدات",
    projectUpdates: "تحديثات المشروع",
    register: "تسجيل",
    lang: "EN",

    // Hero Section
    heroTitle: "مونتينابوليون",
    heroSubtitle: "الجمال يتحدث الإيطالية!",

    // About Section
    aboutTitle: "مونتينابوليون مصر - لمسة من الأناقة الإيطالية في مدينة المستقبل",
    aboutText1: "بشراكة مع الأهلي سبور، تقدم ريبورتاج مصر بفخر مجمع مونتينابوليون في قلب مدينة المستقبل، القاهرة الجديدة. مستوحى من شارع الموضة الشهير في ميلانو، يجلب المشروع السحر الإيطالي إلى الأراضي المصرية.",
    aboutText2: "يمتد على مساحة 465,000 متر مربع، ويتميز مونتينابوليون مصر بمساحات مفتوحة بنسبة 62% ويقدم مجموعة من 374 منزل وبناء سكني مع وحدات بسيطة ومزدوجة تتراوح من 1 إلى 4 غرف نوم، بما في ذلك حدائق خاصة لوحدات مختارة.",
    aboutText3: "مع واجهات حديثة وتصاميم معاصرة وتشطيبات عالية الجودة، يضع مونتينابوليون مصر معياراً جديداً للعيش الفاخر، ممزجاً بسلاسة بين الجمال الإيطالي والوظائفية الحديثة.",

    // Location Section
    locationTitle: "الموقع",
    getCloserTo: "اقترب من",
    cityAttractions: "معالم المدينة على بعد خطوات منك",

    // Project Materials Section
    projectMaterialsTitle: "مواد المشروع",
    brochure: "الكتيب",
    unitTypesSheet: "ورقة أنواع الوحدات",
    trifold: "الطية الثلاثية",
    floorPlan: "مخطط الطابق",
    masterPlan: "المخطط الرئيسي",

    // Interiors Section
    exteriors: "التصميمات الخارجية",
    interiors: "التصميمات الداخلية",
    exteriorsText: "يجسد مجمع مونتينابوليون الأناقة بتصميم إيطالي أنيق وواجهات حديثة وألوان دافئة. يدمج التصميم المعماري بسلاسة المساحات الخضراء والمساحات المفتوحة، مما يخلق بيئة هادئة. تضيف الارتفاعات المؤطرة سحراً جمالياً فريداً من خلال توازن متناغم بين الكتلة والفراغ.",
    buildingFeatures: "يتميز كل مبنى بثلاثة أقسام:",
    basement: "الطابق السفلي",
    typicalFloor: "الطابق النموذجي",
    capRoof: "السقف مع مسبح على السطح",
    premiumFacades: "تستقبل الواجهات الفاخرة مع الزجاج المزدوج الضوء الطبيعي والهواء النقي، ممزجة الطبيعة مع الحياة العصرية. كل تفصيل مصمم لتقديم أنماط حياة عملية وعالية الجودة",
    keyFeatures: "المميزات الرئيسية تشمل:",
    kitchens: "المطابخ:",
    kitchensDesc: "مجهزة بالكامل مع خزائن أنيقة وأسطح مقاومة للخدوش، تجمع بين التصميم الأنيق والمتانة لتلبية احتياجات الأسلوب والعملية.",
    bathrooms: "الحمامات:",
    bathroomsDesc: "مكتملة التشطيب ببلاط فاخر وحمامات وأحواض استحمام، تقدم تجربة استرخاء وأناقة.",
    interiorsText: "يجسد مجمع مونتينابوليون الأناقة بتصميم إيطالي أنيق وواجهات حديثة وألوان دافئة. يدمج التصميم المعماري بسلاسة المساحات الخضراء والمساحات المفتوحة، مما يخلق بيئة هادئة. تضيف الارتفاعات المؤطرة سحراً جمالياً فريداً من خلال توازن متناغم بين الكتلة والفراغ.",
    interiorsText2: "سواء كانت مصممة للعائلات أو الأفراد، يعكس كل ركن في مونتينابوليون التزاماً بالراحة والأناقة، مما يجعله الخيار المثالي لأولئك الذين يبحثون عن منزل يجسد الجمال والوظائفية.",

    // Marquee Section
    redefiningLuxury: "إعادة تعريف الفخامة",
    redefiningHome: "إعادة تعريف المنزل",
    redefiningSanctuaries: "إعادة تعريف الملاذات",
    redefiningExperiences: "إعادة تعريف التجارب",

    // Amenities Section
    amenitiesTitle: "المرافق",
    swimmingPool: "حمام سباحة",
    gym: "صالة رياضية",
    playground: "ملعب",
    footballCourt: "ملعب كرة قدم",
    shoppingCenter: "مركز تسوق",
    mosque: "مسجد",

    // Unit Types Section
    unitTypesTitle: "أنواع الوحدات",
    oneBedroom: "غرفة نوم واحدة",
    oneBedroomJunior: "غرفة نوم واحدة - جونيور",
    twoBedroom: "غرفتي نوم",
    twoBedroomJunior: "غرفتي نوم - جونيور",
    threeBedroom: "ثلاث غرف نوم",
    threeBedroomJunior: "ثلاث غرف نوم - جونيور",
    fourBedroom: "أربع غرف نوم",
    typeA: "النوع أ",
    typeB: "النوع ب",
    typeC: "النوع ج",
    typeD: "النوع د",

    // Project Updates Section
    projectVideo: "فيديو المشروع",
    constructionUpdate: "تحديثات البناء",

    // Contact Section
    readyForExperience: "جاهز لتجربة معيشية",
    experience: "جديدة؟",
    registerInterest: "سجل اهتمامك الآن للحصول على مزيد من المعلومات",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    selectCountry: "اختر الدولة",
    egypt: "مصر (+20)",
    uae: "الإمارات العربية المتحدة (2)",
    usa: "الولايات المتحدة (1)",
    uk: "المملكة المتحدة (1)",
    canada: "كندا (1)",
    australia: "أستراليا (1)",
    newZealand: "نيوزيلندا (1)",
    phone: "الهاتف",

    enquireType: "نوع الاستفسار",
    client: "عميل",
    agent: "وسيط",
    media: "إعلام",
    other: "أخرى",
    message: "الرسالة",
    maxWords: "الحد الأقصى 250 كلمة",
    agreeToReceive: "أوافق على تلقي الرسائل الإلكترونية التجارية.",
    acceptTerms: "باستخدام هذا النموذج، فإنك تقبل",
    websiteCookies: "كوكيز الموقع",
    and: "و",
    privacyPolicy: "سياسة الخصوصية",
    submit: "إرسال"
  }
};

function setLanguage(lang) {
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  
  // Update active button
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all text content
  updateTextContent(lang);

  // Store language preference
  localStorage.setItem('preferredLanguage', lang);
}

function updateTextContent(lang) {
  // Update navigation buttons
  const navButtons = document.querySelectorAll('.navigated-sections__nav-button');
  navButtons.forEach(button => {
    const key = button.dataset.target;
    if (translations[lang][key]) {
      button.querySelector('span').textContent = translations[lang][key];
    }
  });

  // Update hero section
  const heroTitle = document.querySelector('.hero__overlay h1');
  const heroSubtitle = document.querySelector('.hero__overlay h2');
  if (heroTitle) heroTitle.textContent = translations[lang].heroTitle;
  if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;

  // Update about section
  const aboutTitle = document.querySelector('.navigated-sections__section--about-title');
  const aboutTexts = document.querySelectorAll('.navigated-sections__section--about-description span');
  if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
  if (aboutTexts.length >= 3) {
    aboutTexts[0].textContent = translations[lang].aboutText1;
    aboutTexts[1].textContent = translations[lang].aboutText2;
    aboutTexts[2].textContent = translations[lang].aboutText3;
  }

  // Update location section
  const locationTitle = document.querySelector('.navigated-sections__section--location-title');
  const getCloserTo = document.querySelector('.navigated-sections__section-content--location-slider h4');
  const cityAttractions = document.querySelector('.navigated-sections__section-content--location-slider p');
  if (locationTitle) locationTitle.textContent = translations[lang].locationTitle;
  if (getCloserTo) getCloserTo.textContent = translations[lang].getCloserTo;
  if (cityAttractions) cityAttractions.textContent = translations[lang].cityAttractions;

  // Update project materials section
  const materialsTitle = document.querySelector('.navigated-sections__section--project-materials h2');
  if (materialsTitle) materialsTitle.textContent = translations[lang].projectMaterialsTitle;
  
  // Update material cards
  const materialCards = document.querySelectorAll('.navigated-sections__section--project-materials .card-Amenities__card-content h3');
  materialCards.forEach(card => {
    const originalText = card.textContent.trim().toLowerCase();
    let key = '';
    
    // Map the original text to translation keys
    switch(originalText) {
      case 'brochure':
        key = 'brochure';
        break;
      case 'unit types sheet':
        key = 'unitTypesSheet';
        break;
      case 'trifold':
        key = 'trifold';
        break;
      case 'floor plan':
        key = 'floorPlan';
        break;
      case 'master plan':
        key = 'masterPlan';
        break;
    }
    
    if (key && translations[lang][key]) {
      card.textContent = translations[lang][key];
    }
  });

  // Update exteriors section
  const exteriorsTitle = document.querySelector('.project-interiors__content h2');
  const exteriorsText = document.querySelector('.project-interiors__content .text_ar_p_exteriors');
  const buildingFeaturesTitle = document.querySelector('.project-interiors__content .text_ar_h3_exteriors');
  const buildingFeaturesList = document.querySelectorAll('.project-interiors__content ul li p.text_ar_p_exteriors');
  const premiumFacadesText = document.querySelectorAll('.project-interiors__content .text_ar_p_exteriors');

  if (exteriorsTitle) {
    exteriorsTitle.textContent = translations[lang].exteriors;
  }

  if (exteriorsText) {
    exteriorsText.textContent = translations[lang].exteriorsText;
  }

  if (buildingFeaturesTitle) {
    buildingFeaturesTitle.textContent = translations[lang].buildingFeatures;
  }

  if (buildingFeaturesList.length >= 3) {
    buildingFeaturesList[0].textContent = translations[lang].basement;
    buildingFeaturesList[1].textContent = translations[lang].typicalFloor;
    buildingFeaturesList[2].textContent = translations[lang].capRoof;
  }

  if (premiumFacadesText.length >= 2) {
    premiumFacadesText[premiumFacadesText.length - 1].textContent = translations[lang].premiumFacades;
  }

  // Update interiors section
  const interiorsTitles = document.querySelectorAll('.project-interiors__content h2');
  const interiorsTexts = document.querySelectorAll('.project-interiors__content .text_ar_p_interiors');
  const keyFeaturesTitle = document.querySelector('.project-interiors__content .text_ar_h3_interiors');
  const keyFeaturesList = document.querySelectorAll('.project-interiors__content ul li p');

  if (interiorsTitles.length >= 2) {
    interiorsTitles[0].textContent = translations[lang].exteriors;
    interiorsTitles[1].textContent = translations[lang].interiors;
  }

  if (interiorsTexts.length >= 3) {
    interiorsTexts[0].textContent = translations[lang].interiorsText;
    interiorsTexts[1].textContent = translations[lang].kitchensDesc;
    interiorsTexts[2].textContent = translations[lang].bathroomsDesc;
    interiorsTexts[3].textContent = translations[lang].interiorsText2;
  }

  if (keyFeaturesTitle) {
    keyFeaturesTitle.textContent = translations[lang].keyFeatures;
  }

  // Update key features list items
  const keyFeaturesStrong = document.querySelectorAll('.project-interiors__content .text_ar_strong_interiors');
  if (keyFeaturesStrong.length >= 2) {
    keyFeaturesStrong[0].textContent = translations[lang].kitchens;
    keyFeaturesStrong[1].textContent = translations[lang].bathrooms;
  }

  // Update marquee section
  const marqueeTexts = document.querySelectorAll('.marquee h2');
  marqueeTexts.forEach(text => {
    const originalText = text.textContent.trim().toLowerCase();
    let key = '';
    
    // Map the original text to translation keys
    switch(originalText) {
      case 'redefining luxury':
        key = 'redefiningLuxury';
        break;
      case 'redefining home':
        key = 'redefiningHome';
        break;
      case 'redefining sanctuaries':
        key = 'redefiningSanctuaries';
        break;
      case 'redefining experiences':
        key = 'redefiningExperiences';
        break;
    }
    
    if (key && translations[lang][key]) {
      text.textContent = translations[lang][key];
    }
  });

  // Update amenities section
  const amenitiesTitle = document.querySelector('.navigated-sections__section--project-amenities h2');
  if (amenitiesTitle) amenitiesTitle.textContent = translations[lang].amenitiesTitle;
  
  // Update amenity cards
  const amenityCards = document.querySelectorAll('.navigated-sections__section--project-amenities .card-Amenities__card-content h3');
  amenityCards.forEach(card => {
    const originalText = card.textContent.trim().toLowerCase();
    let key = '';
    
    // Map the original text to translation keys
    switch(originalText) {
      case 'swimming pool':
        key = 'swimmingPool';
        break;
      case 'gym':
        key = 'gym';
        break;
      case 'playground':
        key = 'playground';
        break;
      case 'football court':
        key = 'footballCourt';
        break;
      case 'shopping center':
        key = 'shoppingCenter';
        break;
      case 'mosque':
        key = 'mosque';
        break;
    }
    
    if (key && translations[lang][key]) {
      card.textContent = translations[lang][key];
    }
  });

  // Update unit types section
  const unitTypesTitle = document.querySelector('.navigated-sections__section--tab h2');
  if (unitTypesTitle) unitTypesTitle.textContent = translations[lang].unitTypesTitle;
  
  // Update unit type buttons
  const unitTypeButtons = document.querySelectorAll('.navigated-sections__section--tab-links .nav-link');
  unitTypeButtons.forEach(button => {
    const originalText = button.textContent.trim().toLowerCase();
    let key = '';
    
    // Map the original text to translation keys
    switch(originalText) {
      case 'one bedroom':
        key = 'oneBedroom';
        break;
      case 'one bedroom - junior':
        key = 'oneBedroomJunior';
        break;
      case 'two bedroom':
        key = 'twoBedroom';
        break;
      case 'two bedrooms - junior':
        key = 'twoBedroomJunior';
        break;
      case 'three bedroom':
        key = 'threeBedroom';
        break;
      case 'three bedrooms - junior':
        key = 'threeBedroomJunior';
        break;
      case 'four bedrooms':
        key = 'fourBedroom';
        break;
    }
    
    if (key && translations[lang][key]) {
      button.textContent = translations[lang][key];
    }
  });

  // Update type buttons in nested tabs
  const typeButtons = document.querySelectorAll('.navigated-sections__section--tab .nav-tabs .nav-link');
  typeButtons.forEach(button => {
    const originalText = button.textContent.trim().toUpperCase();
    let key = '';
    
    // Map the original text to translation keys
    switch(originalText) {
      case 'TYPE A':
        key = 'typeA';
        break;
      case 'TYPE B':
        key = 'typeB';
        break;
      case 'TYPE C':
        key = 'typeC';
        break;
      case 'TYPE D':
        key = 'typeD';
        break;
    }
    
    if (key && translations[lang][key]) {
      button.textContent = translations[lang][key];
    }
  });

  // Update project updates section
  const projectVideoTitle = document.querySelector('.navigated-sections__section-content--project-materials h2');
  const constructionUpdateTitle = document.querySelector('.navigated-sections__section--project-vedio .navigated-sections__section-content--project-materials .text_ar_2');
  if (projectVideoTitle) projectVideoTitle.textContent = translations[lang].projectVideo;
  if (constructionUpdateTitle) constructionUpdateTitle.textContent = translations[lang].constructionUpdate;

  // Update contact section
  const contactTitle = document.querySelector('.navigated-sections__contact-info h2');
  const contactSubtitle = document.querySelector('.navigated-sections__contact-info p');
  if (contactTitle) {
    contactTitle.innerHTML = `${translations[lang].readyForExperience} <span>${translations[lang].experience}</span>`;
  }
  if (contactSubtitle) contactSubtitle.textContent = translations[lang].registerInterest;

  // Update form inputs and placeholders
  const formInputs = document.querySelectorAll('.navigated-sections__contact-form input[type="text"], .navigated-sections__contact-form input[type="email"], .navigated-sections__contact-form textarea');
  formInputs.forEach(input => {
    const placeholder = input.getAttribute('placeholder');
    if (placeholder) {
      const key = placeholder.toLowerCase().replace(/\s+/g, '');
      if (translations[lang][key]) {
        input.setAttribute('placeholder', translations[lang][key]);
      }
    }
  });

  // Update select options
  const countrySelect = document.querySelector('.navigated-sections__contact-form select:first-of-type');
  if (countrySelect) {
    const options = countrySelect.querySelectorAll('option');
    options.forEach(option => {
      const text = option.textContent.trim();
      let key = '';
      switch(text) {
        case 'Select Country':
          key = 'selectCountry';
          break;
        case 'Egypt (+20)':
          key = 'egypt';
          break;
        case 'United Arab Emirates (2)':
          key = 'uae';
          break;
        case 'United States (1)':
          key = 'usa';
          break;
        case 'United Kingdom (1)':
          key = 'uk';
          break;
        case 'Canada (1)':
          key = 'canada';
          break;
        case 'Australia (1)':
          key = 'australia';
          break;
        case 'New Zealand (1)':
          key = 'newZealand';
          break;
      }
      if (key && translations[lang][key]) {
        option.textContent = translations[lang][key];
      }
    });
  }

  const enquireSelect = document.querySelector('.navigated-sections__contact-form select:last-of-type');
  if (enquireSelect) {
    const options = enquireSelect.querySelectorAll('option');
    options.forEach(option => {
      const text = option.textContent.trim();
      let key = '';
      switch(text) {
        case 'Enquire type':
          key = 'enquireType';
          break;
        case 'Clint':
          key = 'client';
          break;
        case 'Agent':
          key = 'agent';
          break;
        case 'Media':
          key = 'media';
          break;
        case 'Other':
          key = 'other';
          break;
      }
      if (key && translations[lang][key]) {
        option.textContent = translations[lang][key];
      }
    });
  }

  // Update max words text
  const maxWordsSpan = document.querySelector('.navigated-sections__contact-form .form-group span');
  if (maxWordsSpan) {
    maxWordsSpan.textContent = translations[lang].maxWords;
  }

  // Update checkbox labels
  const checkboxLabels = document.querySelectorAll('.form-group-checkbox label');
  checkboxLabels.forEach(label => {
    const text = label.textContent.trim();
    if (text.includes('I agree to receive')) {
      label.textContent = translations[lang].agreeToReceive;
    } else if (text.includes('By using this form')) {
      label.innerHTML = `${translations[lang].acceptTerms} <a href="#">${translations[lang].websiteCookies}</a> <span>${translations[lang].and}</span> <a href="#">${translations[lang].privacyPolicy}</a>`;
    }
  });

  // Update submit button
  const submitButton = document.querySelector('.send-button');
  if (submitButton) {
    submitButton.textContent = translations[lang].submit;
  }
}

// Initialize language from localStorage or default to 'en'
const savedLang = localStorage.getItem('preferredLanguage') || 'en';
setLanguage(savedLang);

// Add click handlers to language buttons
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

// Language toggle functionality
function toggleLanguage() {
  const currentLang = document.documentElement.getAttribute('lang') || 'en';
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  const langBtn = document.querySelector('.lang-btn');
  
  // Update button text
  langBtn.textContent = newLang === 'en' ? 'العربية' : 'EN';
  
  // Set document direction and language
  document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', newLang);
  
  // Store language preference
  localStorage.setItem('preferredLanguage', newLang);
  
  // Reload the page to apply all changes
  window.location.reload();
}

// Check for saved language preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  const langBtn = document.querySelector('.lang-btn');
  
  // Set initial button text
  langBtn.textContent = savedLang === 'en' ? 'العربية' : 'EN';
  
  // Set initial language
  document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', savedLang);
});