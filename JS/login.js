
document.getElementById("login-btn").addEventListener('click', function(){
    const accountField=document.getElementById('account-no');
    const accountNo=accountField.value;
    const pin=document.getElementById('user-pin').value;

 if(accountNo==='2215151052' && pin==='87654321'){
    window.location.href='bank.html';
 }
 else{
    alert('incorrect Account No or PIN');
 }
})