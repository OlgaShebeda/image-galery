const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}


//humburger menu

const burger = document.querySelector(".nav-burger");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");

/*burger.addEventListener('click', () =>{
    burger.classList.toggle("change");
    navList.classList.toggle("nav-change");
});
*/
function toggleMenu() {
  if (navList.classList.contains("nav-change")) {
    navList.classList.remove("nav-change");
    burger.classList.toggle("change");
  } else {
    navList.classList.add("nav-change");
    burger.classList.toggle("change");
  }
}

burger.addEventListener("click", toggleMenu);

navItem.forEach( 
  function(navItem) { 
    navItem.addEventListener("click", toggleMenu);
  }
)



// portfolio foto season

const portfolioBtn = document.querySelectorAll(".button-black");
const portfolioImg = document.querySelectorAll(".card-img");
const portfolioBtnCont = document.querySelector(".buttons-items");
const seasons = ['winter', 'spring', 'summer', 'autumn'];

/*const activeBtn = n => {
  
  for (btn of portfolioBtn){
    btn.classList.remove('active');
  }
  portfolioBtn[n].classList.add('active');
}*/


function activeBtn1(){
  portfolioBtn.forEach(btn => {
    btn.classList.remove('active');
    event.target.classList.add('active');
  })
}

const activeImg = n => {
  let i = 0;
  for (imgs of portfolioImg){
    imgs.src = `./assets/img/${seasons[n]}/${i + 1}.jpg`;
    i++;
  }
}

let index = 0;

portfolioBtn.forEach((item, indexBtn) => {
  item.addEventListener('click', () => {
    index = indexBtn;
    
    activeBtn1();
    activeImg(index);
    
  })
});



// translate code
const dataLanguage = document.querySelectorAll('[data-i18]');
const engRu = document.querySelectorAll('.text-language');
const lang = ['en', 'ru'];

function getTranslate(language){
  dataLanguage.forEach((el) =>{
    el.textContent = i18Obj[language][el.dataset.i18];
  }) 
  if (currentElement.placeholder) {
    currentElement.placeholder = 
    currentElement.textContent = ''
  }
}

engRu.forEach((item,ind) => {
  item.addEventListener('click', () => {
    for (lan of engRu){
      lan.classList.remove('active');
    }
    engRu[ind].classList.add('active');
    getTranslate(lang[ind]);
    
  });
})