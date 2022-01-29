
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

/*function toggleBtn (){
  
  if (portfolioBtn.classList.contains){
    portfolioBtn.classList.remove("active");
  }else{
    portfolioBtn.classList.add("active");
  }
}

portfolioBtn.forEach(
  function(portfolioBtn){
    portfolioBtn.addEventListener("click", toggleBtn);
  }
)*/

const activeBtn = n => {
  
  for (btn of portfolioBtn){
    btn.classList.remove('active');
  }
  portfolioBtn[n].classList.add('active');
}

let index = 0;

portfolioBtn.forEach((item, indexBtn) => {
  item.addEventListener('click', () => {
    index = indexBtn;
    
    activeBtn(index);
    
  })
});
