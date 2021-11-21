// all id element section part
const smallMemory =document.getElementById('small-memory');
const bigMemory =document.getElementById('big-memory');
// extra stroage id section
const lowStroage =document.getElementById('low-stroage'); 
const bigStroage = document.getElementById('big-stroage');
const extraStroage = document.getElementById('extra-stroage');
// Choose your delivery option
const freeCost =document.getElementById('free');
const expreesCost = document.getElementById('express');
// memory extra cost sction
const memoryCost =document.getElementById('memory-cost');
// stroaage extra cost
const stroageCost =document.getElementById('stroage-cost');
// delivaery charge
const deliveryCharge =document.getElementById('charge');
//best price id 
const bestPrice =document.getElementById('best-price');

// total price id
 const totalPrice=document.getElementById('total-price');
//total



// update total price
function updateTotalPrice() {
    const extraMemoryCost=parseInt(memoryCost.innerText);
     const extraStroageCost = parseInt(stroageCost.innerText);
     const extraDeliveryCharge = parseInt(deliveryCharge.innerText)
     const bestPricetotal=parseInt(bestPrice.innerText);
    const  totalPrice= extraMemoryCost + extraStroageCost + extraDeliveryCharge + bestPricetotal;
    // console.log(bestPricetotal)
    // totalPrice.innerText=grandTotal;
    document.getElementById('total-price').innerText=totalPrice;
    document.getElementById('total').innerText=totalPrice;

}



// event handler add all
// Memory cost handler part
smallMemory.addEventListener('click', function () {
     updateTotalPrice();
     memoryCost.innerText = '0'
     
});
bigMemory.addEventListener('click', function () {
   updateTotalPrice();
    memoryCost.innerText = '180'; 
    
});
// storage section part 
lowStroage.addEventListener('click',function(){
    updateTotalPrice();
   stroageCost.innerText='0'; 
});
bigStroage.addEventListener('click', function () {
   updateTotalPrice();
   stroageCost.innerText = '100'; 
});
extraStroage.addEventListener('click', function () {
    updateTotalPrice();
    stroageCost.innerText = '180';  
});
// delivery charge handle part
freeCost.addEventListener('click',function(){
    updateTotalPrice();
   deliveryCharge.innerText='0';
});
expreesCost.addEventListener('click', function () {
    updateTotalPrice();
    deliveryCharge.innerText = '20';
});
// add you coupon