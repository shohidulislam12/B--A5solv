const selectedseat=document.getElementById('selectedseat');
let booktotal=document.getElementById('booktotal');
const leftseat=document.getElementById('leftseat');
const totalprice=document.getElementById('totalprice');
const cuponinput=document.getElementById('cuponinput');
const cuponapplybtn=document.getElementById('cuponapplybtn');
const defoulttext=document.getElementById('defoulttext')
let seatcontainer=[];
function handleSelectseat(event){
    const seatselect= event.innerText;
    if(seatcontainer.includes(seatselect)){
        return alert('seat already book')
    }
   else  if(seatcontainer.length<4){
    
    
    event.classList.add('bg-[#1DD100]')
    selectedseat.innerHTML +=`
            <li class="flex justify-between font-light font-[inter]">
            <span>${event.innerText}</span>
            <span>Economy</span>
            <span>550</span>
        </li>
    `
seatcontainer.push(event.innerText);
booktotal.innerHTML=seatcontainer.length;
 const nowleftseat=parseInt(leftseat.innerText)-1;
leftseat.innerText=nowleftseat;
//update total price 
const newTotalprice=parseFloat(totalprice.innerHTML)+550;
totalprice.innerText=newTotalprice;
//remove defoult 
defoulttext.classList.add('hidden')
//cupon active 
if(seatcontainer.length>3){
    cuponapplybtn.removeAttribute('disabled')
    cuponinput.removeAttribute('disabled')
}

}
else {
alert("you already book maximum seat");
return ;}
}


//cupon
let discountprice=document.getElementById('discountprice')
cuponapplybtn.addEventListener('click',function(event){
    event.preventDefault();
if(cuponinput.value==="Cuple 20"){
    const cupondiscountprice=parseFloat(totalprice.innerText)-parseFloat(totalprice.innerText)*20/100;
 discountprice.innerText=cupondiscountprice;
 console.log(cupondiscountprice);
}
else if(cuponinput.value==="NEW50"){
 const cupondiscountprice=parseFloat(totalprice.innerText)-parseFloat(totalprice.innerText)*15/100;
 discountprice.innerText=cupondiscountprice;
 console.log(cupondiscountprice);
}
else {
    alert('rung cupon code');
    return
}


})
//input number 
const phonenumber=document.getElementById('phonenumber');
const nextbtn=document.getElementById('nextbtn');
phonenumber.addEventListener('input',function(event){
 const    inputvalue=event.target.value;
    if(inputvalue.length===11){
 nextbtn.removeAttribute('disabled')
    }
})

//relod
document.getElementById('closeModal').addEventListener('click',function(){
    window.location.reload();
})