console.clear();

const languages = {
  uk: {
    updates: "Оновлення",
    about: "Про нас",
    gallery: "Галерея",
    shop: "Магазин",
    falconHeavyTitle: "Falcon Heavy",
    falconHeavySub: "Найпотужніша діюча ракета у світі в два рази",
    overviewTitle: "Огляд Falcon Heavy",
    height: "ВИСОТА",
    diameter: "ДІАМЕТР",
    mass: "МАСА",
    payloadLeo: "КОРИСНЕ НАВАНТАЖЕННЯ НА НОО",
    payloadGto: "КОРИСНЕ НАВАНТАЖЕННЯ НА ГПО",
    payloadMars: "КОРИСНЕ НАВАНТАЖЕННЯ НА МАРС",
    unmatchedPerformanceTitle: "НЕПЕРЕВЕРШЕНА ПРОДУКТИВНІСТЬ",
    unmatchedPerformanceText: "З тягою понад 5 мільйонів фунтів при старті, Falcon Heavy є найпотужнішою ракетою, що літає. Для порівняння, тяга Falcon Heavy при старті дорівнює приблизно вісімнадцяти літакам 747 на повній потужності. Falcon Heavy може підняти на орбіту еквівалент повністю завантаженого літака 737 — разом з пасажирами, багажем і паливом.",
    privacy: "Конфіденційність",
    policy: "Політика",
    contactEmail: "З додатковими питаннями звертайтесь: rideshare@spacex.com",
    contactUsButton: "Зв'язатись з нами"
  },
  en: {
    updates: "Updates",
    about: "About",
    gallery: "Gallery",
    shop: "Shop",
    falconHeavyTitle: "Falcon Heavy",
    falconHeavySub: "The most powerful operational rocket in the world by a factor of two",
    overviewTitle: "Falcon Heavy Overview",
    height: "HEIGHT",
    diameter: "DIAMETER",
    mass: "MASS",
    payloadLeo: "PAYLOAD TO LEO",
    payloadGto: "PAYLOAD TO GTO",
    payloadMars: "PAYLOAD TO MARS",
    unmatchedPerformanceTitle: "UNMATCHED PERFORMANCE",
    unmatchedPerformanceText: "With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.",
    twitter: "Twitter",
    youtube: "Youtube",
    instagram: "Instagram",
    flickr: "Flickr",
    linkedin: "LinkedIn",
    privacy: "Privacy",
    policy: "Policy",
    contactEmail: "For additional questions, contact rideshare@spacex.com",
    contactUsButton: "Contact Us"
  }
};

function translatePage(lang) {
  const elements = document.querySelectorAll(".translatable");
  elements.forEach(el => {
    const key = el.dataset.key; 
    if (languages[lang] && languages[lang][key]) {
      el.textContent = languages[lang][key];
    }
  });
}

function translateToUk() {
  translatePage("uk");
}

function translateToEn() {
  translatePage("en");
}

document.addEventListener('DOMContentLoaded', () => {
  translateToUk();
});
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const container = document.querySelector('.container');
    setTimeout(() => {
        loader.style.opacity = '0';
        container.style.opacity = '1';
    }, 2000); // 2 секунди
});