// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



var x=localStorage.getItem("amount")
 wallet1=document.querySelector("#money")
wallet1.innerText=x;

var mobie=JSON.parse(localStorage.getItem("movie"))
var div1=document.querySelector("#movie")
let p=document.createElement("p")
p.setAttribute("id","p2")
p.innerText=mobie.Title;
let img=document.createElement("img")
img.src=mobie.Poster;
img.setAttribute("id","image2")
let div=document.createElement("div")
div.append(p,img)
div1.append(div)
function pay()
{
    var count=document.querySelector("#number_of_seats").value
    if(count*100>x)
    {
        alert('insufficient fund')
    }
    else{
    var y=x-count*100;
   localStorage.setItem("amount",y);
   alert("Booking Sucessful")
   location.reload();
    }
}

