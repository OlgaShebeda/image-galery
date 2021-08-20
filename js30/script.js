//https://rolling-scopes-school.github.io/js30/olgashebeda-JSFEPRESCHOOL.git/
const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds/60)*360 + 90;
  secondsHand.style.transform =`rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins/60)*360 + 90;
  minsHand.style.transform =`rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours/12)*360 + 90;
  hoursHand.style.transform =`rotate(${hoursDegrees}deg)`;
  //console.log(seconds);
}
setInterval(setDate, 1000);

var months = ["Студзень", "Люты", "Сакавік", "Красавік", 
"Май", "Чэрвень", "Ліпень", "Жнiвень", "Верасень", "Кастрычнiк", "Лiстапад", "Снежань"];
var weeks = ['Панядзелак','Аўторак','Серада','Чацвер','Пятніца','Субота','Нядзеля'];

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  let month = document.querySelector(".month");
  let day = document.querySelector(".day");
  let year = document.querySelector(".year");
  let week = document.querySelector(".week")
  let date = new Date();

  month.innerHTML = months[date.getMonth()];
  day.innerHTML = date.getDate();
  year.innerHTML = date.getFullYear();