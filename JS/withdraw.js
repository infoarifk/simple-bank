document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdrawField.value);

  if (withdrawAmount > 0 && withdrawField.value !== "") {
    const withdrawSection=document.getElementById('total-withdraw');
    const totalWithdraw=parseFloat(withdrawSection.innerText);

    const balanceSection = document.getElementById("new-balance");
    const previousBalance = parseFloat(balanceSection.innerText);
    if (previousBalance >= withdrawAmount) {
        const newWithdraw=totalWithdraw+withdrawAmount;
        withdrawSection.innerText=newWithdraw;
      const newBalance = previousBalance - withdrawAmount;
      balanceSection.innerText = newBalance;
    }
    else{
        alert('Sorry you do not have enough money in your Balance')
    }

  }
  else{
    alert('Please Enter valid ammount');
  }
  withdrawField.value='';
});
