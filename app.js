

const hours=document.getElementById("hr")
const mins=document.getElementById("min")
const seconds=document.getElementById("sec")
const count1=document.getElementById("count")
const start=document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("pause")
 start.addEventListener('click',function(){
    timer=true;
    starttimer();
 });

 reset.addEventListener('click',function(){
    timer=false
    hr=0
    min=0
    sec=0
    count=0
    hours.innerHTML="00"
    mins.innerHTML="00"
    seconds.innerHTML="00"
    count1.innerHTML="00"
 })

 stop.addEventListener('click',function(){
    timer=false
    hours.innerHTML=hrstring
    mins.innerHTML=minstring
    seconds.innerHTML=secstring
    count1.innerHTML=countstring

 })

 
 let count=0
 let hr=0
 let min=0
 let sec=0

 function starttimer(){
      if(timer){
        count++;
        
      }
      if(count==100){
        sec++;
        count=0;

      }

      if(sec==60){
        min++;
        sec=0;
      }

      if(min==60){
        hr++;
        min=0;
        sec=0;
      }

     let hrstring=hr;
     let minstring=min;
     let secstring=sec;
     let countstring=count;

     if(hr<10){
         hrstring="0"+hrstring
     }
     if(min<10){
        minstring="0"+minstring
    }
    if(sec<10){
        secstring="0"+secstring
    }
    if(count<10){
        countstring="0"+countstring
    }

    hours.innerHTML=hrstring
    mins.innerHTML=minstring
    seconds.innerHTML=secstring
    count1.innerHTML=countstring
    setTimeout(starttimer,10);


 }

 