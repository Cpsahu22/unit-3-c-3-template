// Store the wallet amount to your local storage with key "amount"


function update(id){
    return document.getElementById(id).value;
  }
  var amount = localStorage.getItem("amount")||0;

      let wallet = document.getElementById("wallet");
      wallet.innerText = amount;
      
  function addMoney(){

      let input1 = update("amount");
      amount = +amount + (+input1);
      wallet.innerText = amount;
      localStorage.setItem("amount",amount)
  }
  
  