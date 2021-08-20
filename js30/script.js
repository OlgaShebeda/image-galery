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