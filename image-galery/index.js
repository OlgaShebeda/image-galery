let url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo"
const gal = document.querySelector('.gallery-container');
const btn = document.querySelector('.btn-search');
let searchInpyt = document.querySelector('.search-input');

function addDiv(data){
  //searchWords(data);
  for (let i = 0; i < data.results.length; i++){
    let galeryItem = document.createElement('div');
    galeryItem.className = 'gallery-item';
    gal.append(galeryItem);
    addImg(data, galeryItem, i);
  }
  
}

btn.addEventListener("click", searchBtn);

function  searchBtn(){
  let word = searchInpyt.value;
  word = word.replace(" ", "");
  word = word.toLowerCase();
  url = `https://api.unsplash.com/search/photos?query=${word}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
  console.log(url);
  getData();
}

function addImg(data, div, index){
  let img = document.createElement('img');
  img.src = data.results[index].urls.regular;
  img.className = 'gallery-card';
  div.append(img);
}

async function getData() {

  const res = await fetch(url);
  const data = await res.json();
  addDiv(data);
}

getData();

  