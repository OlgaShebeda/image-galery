//https://rolling-scopes-school.github.io/olgashebeda-JSFEPRESCHOOL/js30/
const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const getTime = document.querySelector('.time-clock');

const month = document.querySelector(".month");
const day = document.querySelector(".day");
const year = document.querySelector(".year");
const week = document.querySelector(".week");

 

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

var months = ["Студзень", "Люты", "Сакавік", "Красавік", 
"Май", "Чэрвень", "Ліпень", "Жнiвень", "Верасень", "Кастрычнiк", "Лiстапад", "Снежань"];
var weeks = ['Нядзеля', 'Панядзелак','Аўторак','Серада','Чацвер','Пятніца','Субота'];


function startTime(){
  const today = new Date;
  const hr = today.getHours();
  const mn = today.getMinutes();
  const sc = today.getSeconds();
  var time = [today.getHours(),today.getMinutes(),today.getSeconds()]; 
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  var current_time = [time[0],time[1],time[2]].join(':');
  getTime.innerHTML = current_time;
  
  console.log(sc);
}
setInterval(startTime, 1000);
const date = new Date;
  month.innerHTML = months[date.getMonth()];
  day.innerHTML = date.getDate();
  week.innerHTML = weeks[date.getDay()];
  year.innerHTML = date.getFullYear();