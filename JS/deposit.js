document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");

  const depositAmount = parseFloat(depositField.value);
  if (depositAmount > 0 && depositField.value !== '') {
    
    const depositTotal = document.getElementById("main-deposit");
    const previousAmount = parseFloat(depositTotal.innerText);
    const totalAmount = previousAmount + depositAmount;

    depositTotal.innerText = totalAmount;

    const totalBalance = document.getElementById("new-balance");
    const previousBalance = parseFloat(totalBalance.innerText);
    const newBalance = previousBalance + depositAmount;
    totalBalance.innerText = newBalance;
  }
  else{
    alert('Please input valid Amount');
  }
  depositField.value = "";
});
