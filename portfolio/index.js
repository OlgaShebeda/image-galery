
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

const activeBtn = n => {
  
  for (btn of portfolioBtn){
    btn.classList.remove('active');
  }
  portfolioBtn[n].classList.add('active');
}

function preloadImages() {
 for (let j = 0; j < 4; j++){
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${seasons[j]}/${i}.jpg`;
  }
 }
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
    
    activeBtn(index);
    activeImg(index);
    
  })
});
