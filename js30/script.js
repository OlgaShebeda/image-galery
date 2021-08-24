//https://rolling-scopes-school.github.io/olgashebeda-JSFEPRESCHOOL/js30/


const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const getTime = document.querySelector('.time-clock');

const month = document.querySelector(".month");
const day = document.querySelector(".day");
const year = document.querySelector(".year");
const week = document.querySelector(".week");

  console.log("Первый этап. Повторить исходный проект - 10");
  console.log("Второй этап. Обязательный дополнительный фукционал - 10");
  console.log("Третий этап. Дополнительный фукционал на выбор - реализованно, но не работает");
 
function setDate(){
 const date = new Date();
  const seconds = date.getSeconds();
  const secondsDegrees = (seconds/60)*360 + 90;
  secondsHand.style.transform =`rotate(${secondsDegrees}deg)`;

  const mins = date.getMinutes();
  const minsDegrees = (mins/60)*360 + 90;
  minsHand.style.transform =`rotate(${minsDegrees}deg)`;

  const hours = date.getHours();
  const hoursDegrees = (hours/12)*360 + 90;
  hoursHand.style.transform =`rotate(${hoursDegrees}deg)`;
  //console.log(seconds);
}
setInterval(setDate, 1000);

function startTime(){
  const today = new Date;
  const hr = today.getHours();
  const mn = today.getMinutes();
  const sc = today.getSeconds();
  day.innerHTML = today.getDate();
  var time = [today.getHours(),today.getMinutes(),today.getSeconds()]; 
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  var current_time = [time[0],time[1],time[2]].join(':');
  getTime.innerHTML = current_time;
  
  //console.log(sc);
}
setInterval(startTime, 1000);
var months = ["студзеня,", "лютага,", "сакавіка,", "красавіка,", 
"мая,", "чэрвня,", "ліпня,", "жнiўня,", "верасня,", "кастрычнiка,", "лiстапада,", "снежня,"];
var weeks = ['нядзеля', 'панядзелак','аўторак','серада','чацвер','пятніца','субота'];

const date = new Date;
  month.innerHTML = months[date.getMonth()];
  
  week.innerHTML = weeks[date.getDay()];
  year.innerHTML = date.getFullYear();

  var nightMode = document.querySelector('.night-but');
  var mode = false;
 
  nightMode.addEventListener('click',function(){
    if (mode == false){
      mode=true;
      document.querySelector('body').style.background = '#e66f2a';
    }else{
      mode=false;
      document.querySelector('body').style.background = '#091921';
    }
  });
  