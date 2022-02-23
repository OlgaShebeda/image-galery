const area = document.querySelectorAll('.box');
let index = 0;
let result = '';
const reset = document.querySelector('.btn');
const content = document.querySelector('.content');
const block = document.querySelector('.win-container');
let str = '';

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let dataX = [],
    dataO = [];

area.forEach(el => {
    el.addEventListener ('click', stepByStep);
});

function stepByStep (){
    console.log(this.className + ' ' + index);
    if (this.className === 'box' && !this.textContent){
        if (index % 2 === 0){
            this.innerHTML = 'X';
            dataX.push(index);
        }else {
            this.innerHTML = 'O';
            dataO.push(index);
        }
        index++;
    } 
    
    winCheck(index);
    
    if(index === 9 ){
      block.style.display = 'block';
      localStorage.setItem('winGame', "draw");
      writeLocalStorage();
    } 
}

function winCheck(ind){
    for (let i = 0; i < win.length; i++){
      if (area[win[i][0]].innerHTML === 'O' && area[win[i][1]].innerHTML === 'O' && area[win[i][2]].innerHTML === 'O'){
        block.style.display = 'block';
        console.log("0");
        str = `won O in ${ind} step`;
        writeLocalStorage(str);
      }else{
        if (area[win[i][0]].innerHTML === 'X' && area[win[i][1]].innerHTML === 'X' && area[win[i][2]].innerHTML === 'X'){
          block.style.display = 'block';
          console.log("x");
          str = `won X in ${ind} step`;
          writeLocalStorage(str);
        }
      }
    }
}

function writeLocalStorage (str){
 localStorage.setItem('winGame', str);
    content.innerHTML = localStorage.getItem('winGame');
  
}

reset.addEventListener("click", function() {
  block.style.display = 'none';
  location.reload();
  dataO = [];
  dataX = [];
  
  index = 0;
});