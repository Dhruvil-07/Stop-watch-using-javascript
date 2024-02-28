//varibales
let hr = 0;
let min = 0;
let sec = 0;
let microsec = 0;
let timer = false;

//value refrence
let hour = document.querySelector("#hr");
let minute = document.querySelector("#min");
let second = document.querySelector("#sec");
let micro_sec = document.querySelector("#micro-sec");

//button refrence
let start_btn = document.querySelector("#start");
let stop_btn = document.querySelector("#stop");
let reset_btn = document.querySelector("#reset");


//strat button listner
start_btn.addEventListener("click" , ()=>{
    start_btn.disabled = true;
    timer = true;
    update();
});

//stop button listner
stop_btn.addEventListener("click",()=>{ 
    start_btn.disabled = false; 
    timer = false 
});

//reset button listner
reset_btn.addEventListener("click", ()=>{
    start_btn.disabled = false;
    timer = false;
    reset();
});


//upadte values
function update()
{
    if(timer  === true)
    {
        microsec++;
        console.log(microsec);

        if(microsec === 100)
        {
            sec++;
            microsec = 0;
        }

        if(sec === 60)
        {
            min++;
            sec = 0;
        }

        if(min === 60)
        {
            hr++;
            min = 0;
        }


        //set value with 0
        if(micro_sec < 10)
        {
            micro_sec.innerText = "0" + micro_sec;
        }
        else
        {
            micro_sec.innerText = microsec;
        }

        if(sec < 10)
        {
            second.innerText = "0"+sec;
        }
        else
        {
            second.innerText = sec;
        }

        if(min < 10)
        {
            minute.innerText = "0"+min
        }
        else
        {
            minute.innerText = min;
        }

        if(hr < 10)
        {
            hour.innerText = "0"+hr;
        }
        else
        {
            hour.innerText = hr;
        }

        //timeout
        setTimeout(update,10);
    }
}


//reset value
function reset()
{
    hr = 0;
    min = 0;
    sec = 0;
    microsec = 0;
   
    hour.innerText = "0"+hr;
    minute.innerText = "0"+sec;
    second.innerText = "0"+min;
    micro_sec.innerText = "0"+microsec;
}