// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



var amount1 = localStorage.getItem("amount")||0;

document.querySelector("#wallet").innerText=amount1;

const getmovie = JSON.parse(localStorage.getItem('movie')) || [];
console.log(getmovie);

const box=document.createElement("div");

const get=document.createElement("h2");
get.innerText=getmovie.title;

const img= document.createElement('img');
img.src=Poster;
box.append(get,img);
document.querySelector('#movie').append(box);


