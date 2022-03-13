let incrementing=true;
let counter=4;
let counter2=60;

const fn= function(){
    const timer_elem=document.getElementById("timer")
    timer_elem.innerText= `${counter} minutes`;
    const seconds=document.getElementById("seconds");
    seconds.innerText=`${counter2} seconds`;
    if(incrementing){
        counter2 -=1;
        if(counter2<=0){
        incrementing=false;
        }
    }else{      
        if(counter<=0 ){
          counter=4,
          counter2=60
        }else{
        counter--;
        counter2=60;
        incrementing=true;}

    }
 

    }

const interval_id=setInterval(fn,1000);


const stop=function(){
    clearInterval(interval_id);
    // clearTimeout(another_id);
}

const btn=document.getElementById("stopbtn")

btn.addEventListener("click",stop);

