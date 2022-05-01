// Store the wallet amount to your local storage with key "amount"


function updated_money()
{
    var money=document.querySelector("#amount").value;
    var wallet=document.querySelector("#wallet");
    var total=+wallet.innerHTML+(+money);
    wallet.innerHTML=total;
    localStorage.setItem("amount",total)
    
}
  
  