const qrtext=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const Generatebtn=document.getElementById('Generatebtn');
const downloadbtn=document.getElementById('Downloadbtn');
const qrBody = document.querySelector('.qr-body');


Generatebtn.addEventListener('click',(e)=>{
   e.preventDefault();
   isEmpty();
}); 
sizes.addEventListener('change',(e)=>{
   sizes=e.target.values;
    isEmpty();
});

downloadbtn.addEventListener('click',()=>{
   let img =document.querySelector('.qr-body img');
   if(img!==null){
      let imgatrr=img.getAttribute('src');
      downloadbtn.setAttribute("href",imgatrr);
   }
   else{
      downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
   }
});
function isEmpty(){
  /*if(qrtext.value.length>0){

      generateQRcode();
   }
   else{
      alert("Enter A Text Or URL To Generate QR-Code");
   }*/
   qrtext.value.length>0?generateQRcode():alert("enter atext  or url to generate qr");;

}
function generateQRcode(){
   let size=sizes.value;
   qrBody.innerHTML = "";
   new QRCode( qrBody,{
    text: qrtext.value,
    height:size,
    width:size,
    colorLight:'#fff',
    colorDark:'#000',
   });
}


