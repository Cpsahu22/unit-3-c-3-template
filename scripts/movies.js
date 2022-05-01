// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



var x=localStorage.getItem("amount")
 wallet1=document.querySelector("#wallet")
wallet1.innerText=x;

let  id;
async function searchmovies(){
    var query=document.querySelector("#search").value
    var res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=349eba5`)
    var data= await res.json();
    appendmovies(data.Search)
    console.log(data)
}
  
function appendmovies(data)
{
    movies=document.querySelector("#movies")
    movies.innerHTML=null;
    if(data==undefined)
    {
        return false;
    }
    data.forEach(function(el){
       
      let p=document.createElement("img")
      p.setAttribute("id","postdiv")
      let p1= document.createElement("p")
      p.src=el.Poster;
     
    
      p1.innerText=el.Title;
      let div=document.createElement("div")
      button=document.createElement('button')
      button.innerText="Book Now";
      button.addEventListener("click",function()
      {
          redirect(el);
      });
      div.append(p,p1,button) ;
      movies.append(div);
    });
}
function debounce(func,delay)
{
    if(id)
    {
        clearTimeout(id);
    }
    id=setTimeout(function()
    {
        func();
    },delay)
}
function redirect(el)
{
    window.location.href="checkout.html";
    localStorage.setItem("movie",JSON.stringify(el))
}