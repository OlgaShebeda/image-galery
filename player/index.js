
const birds = ["drozd", "forest", "javoronok", "slavka", "solovey", "zarynka"];
const btn = document.querySelector('.btn-play');
const navList = document.querySelectorAll(".nav-item");
const bg = document.querySelector('.bg-img');

function activeItem(){
    navList.forEach(item => {
      item.classList.remove('active');
      event.target.classList.add('active');
    })
  }

function activeImg (n){
    let str = "url('./assets/img/" + birds[n] + ".jpg')"
    bg.style.backgroundImage =str;
}

  let index = 0;
  
  navList.forEach((item, indexList) => {
    item.addEventListener('click', () => {
      index = indexList;
      activeItem();
      activeImg(index);
    })
  });

btn.addEventListener("click", () => {
    if (btn.classList.contains('pause')){
        btn.classList.remove('pause');
    }else{
        btn.classList.add('pause');
    }
})