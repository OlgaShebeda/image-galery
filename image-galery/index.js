let url = "https://api.unsplash.com/search/photos?query=school&per_page=30&orientation=landscape&client_id=4YmeE-WFDrkUQq5UIgogHf_7AVU2nE_xBmUy7klb8_E";
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

btn.addEventListener('click', searchBtn);

function  searchBtn(){
  gal.innerHTML = '';
  let word = searchInpyt.value;
  word = word.replace(" ", "");
  word = word.toLowerCase();
  url = `https://api.unsplash.com/search/photos?query=${word}&per_page=30&orientation=landscape&client_id=4YmeE-WFDrkUQq5UIgogHf_7AVU2nE_xBmUy7klb8_E`;
  console.log(url);
  getData();
}

window.addEventListener('keydown',(ev) =>{
  if (ev.key === "Enter"){
    searchBtn();
  }
  
})

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

  