const billAmt = document.querySelector('.enter-amount');
const addTip  = document.querySelector('.footer');
const finalTip = document.querySelector('.your-tip');

addTip.addEventListener('click', () => {
    let customerAmt = billAmt.value;
    let tipAmt = parseInt(customerAmt*(15/100));
    console.log(tipAmt);
   setInterval(() => {
        if (tipAmt > 0 && tipAmt <= customerAmt*(15/100)){
            tipAmt +=1;
            finalTip.innerHTML=`${tipAmt}`
        }
        
    }, 25)
  
    

    
    
})


