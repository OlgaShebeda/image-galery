
const birds = ["drozd", "forest", "javoronok", "slavka", "solovey", "zarynka"];
const btn = document.querySelector('.btn-play');
const navList = document.querySelectorAll(".nav-item");
const bg = document.querySelector('.bg-img');
const audio = document.querySelector("audio");
let isPlay = false;

function activeItem(){
    navList.forEach(item => {
      item.classList.remove('active');
      event.target.classList.add('active');
    })

    if(isPlay){
      btn.classList.remove('pause');
      audio.pause();
      isPlay = false;
    }
    
  }

function activeImg (n){
    let str = "url('./assets/img/" + birds[n] + ".jpg')"
    bg.style.backgroundImage = str;
}

function activeAudio (n){
    audio.src = `./assets/audio/${birds[n]}.mp3`;
}
  
  navList.forEach((item, indexList) => {
    item.addEventListener('click', () => {
      activeItem();
      activeImg(indexList);
      activeAudio(indexList)
    })
  });

function toggleBtn(){
   if (btn.classList.contains('pause')){
        btn.classList.remove('pause');
        audio.pause();
        isPlay = false;
    }else{
        btn.classList.add('pause');
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
}

btn.addEventListener("click", toggleBtn);