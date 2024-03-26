let input=document.getElementById("input");
let btn7=document.getElementById("btn7");
btn7.addEventListener("click",()=>{
document.getElementById("btn7").value=7;
input.value+=7;
},false)
let btn6=document.getElementById("btn6");
btn6.addEventListener("click",()=>{
document.getElementById("btn6").value=6;
input.value+=6;
},false)
let btn5=document.getElementById("btn5");
btn5.addEventListener("click",()=>{
document.getElementById("btn5").value=5;
input.value+=5;
},false)
let btn4=document.getElementById("btn4");
btn4.addEventListener("click",()=>{
document.getElementById("btn4").value=4;
input.value+=4;
},false)
let btn2=document.getElementById("btn2");
btn2.addEventListener("click",()=>{
document.getElementById("btn2").value=2;
input.value+=2;
},false)
let btn3=document.getElementById("btn3");
btn3.addEventListener("click",()=>{
document.getElementById("btn3").value=3;
input.value+=3;
},false)
let btn0=document.getElementById("btn0");
btn0.addEventListener("click",()=>{
document.getElementById("btn0").value=0;
input.value+=0;
},false)
let btn00=document.getElementById("btn00");
btn00.addEventListener("click",()=>{
document.getElementById("btn00").value="00";
input.value+="00";
},false)
let btn1=document.getElementById("btn1");
btn1.addEventListener("click",()=>{
document.getElementById("btn1").value=1;
input.value+=1;
},false)
let btn8=document.getElementById("btn8");
btn8.addEventListener("click",()=>{
document.getElementById("btn8").value=8;
input.value+=8;
},false)
let btn9=document.getElementById("btn9");
btn9.addEventListener("click",()=>{
document.getElementById("btn9").value=9;
input.value+=9;
},false)

let dvi=document.getElementById("dvi");
dvi.addEventListener("click",()=>{
document.getElementById("dvi").value='/';
input.value+='/';
},false)
let mudo=document.getElementById("mudo");
mudo.addEventListener("click",()=>{
document.getElementById("mudo").value='%';
input.value+='%';
},false)
let star=document.getElementById("star");
star.addEventListener("click",()=>{
document.getElementById("star").value='*';
input.value+='*';
},false)
let sub=document.getElementById("sub");
sub.addEventListener("click",()=>{
document.getElementById("sub").value='-';
input.value+='-';
},false)
let add=document.getElementById("add");
add.addEventListener("click",()=>{
document.getElementById("add").value='+';
input.value+='+';
},false);
let ac=document.getElementById("ac");
console.log(ac);
ac.addEventListener("click",()=>{
    input.value=" ";
    },false);
    let del=document.getElementById("del");
    console.log(del);
    del.addEventListener("click",()=>{
       input.value=input.value.toString().slice(0,-1);
        },false);

        let btn=document.getElementById("btn");
        btn.addEventListener("click",()=>{
        document.getElementById("btn").value='.';
        input.value+='.';
        },false);
          
        let equal=document.getElementById("equal");
      equal.addEventListener("click",()=>{
        input.value=eval(input.value);
      },false)