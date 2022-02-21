const area = document.querySelectorAll('.box');
let index = 0;
let result = '';

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
      console.log("ничья");
    } 
}

function winCheck(ind){
    for (let i = 0; i < win.length; i++){
      if (area[win[i][0]].innerHTML === 'O' && area[win[i][1]].innerHTML === 'O' && area[win[i][2]].innerHTML === 'O'){
        console.log("won O in " + ind + " step");
      }else{
        if (area[win[i][0]].innerHTML === 'X' && area[win[i][1]].innerHTML === 'X' && area[win[i][2]].innerHTML === 'X'){
          console.log("won X in " + ind + " step");
        }
      }
    }
}

