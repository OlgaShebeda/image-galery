
const birds = ["drozd", "forest", "javoronok", "slavka", "solovey", "zarynka"];
const btn = document.querySelector('.btn-play');
const navList = document.querySelectorAll(".nav-item");
const bg = document.querySelector('.bg-img');
const audio = document.querySelector("audio");
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");
let isPlay = false;
let index = 0;

function activeItem(n){
    navList.forEach(item => {
      item.classList.remove('active');
      navList[n].classList.add('active');
    })

    if(isPlay){
      pauseBtn();
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
      activeItem(indexList);
      activeImg(indexList);
      activeAudio(indexList);
    })
  });

function playBtn(){
   btn.classList.add('pause');
   audio.currentTime = 0;
   audio.play();
   isPlay = true;
}
function pauseBtn(){
  btn.classList.remove('pause');
  audio.pause();
  isPlay = false;
}

function toggleBtn(){
   if (btn.classList.contains('pause')){
        pauseBtn();
    }else{
       playBtn();
    }
}

function nextSong (){
  if (index == navList.length - 1){
    index = 0;
    activeItem(index);
    activeImg(index);
    activeAudio(index);
    playBtn();
  }
  else{
    index++;
    activeItem(index);
    activeImg(index);
    activeAudio(index);
    playBtn();
  }
}

function prevSong (){
  if (index == 0){
    index = navList.length-1;
    activeItem(index);
    activeImg(index);
    activeAudio(index);
    playBtn();
  }
  else{
    index--;
    activeItem(index);
    activeImg(index);
    activeAudio(index);
    playBtn();
  }
}

btn.addEventListener("click", toggleBtn);
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);