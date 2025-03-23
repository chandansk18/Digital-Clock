let hourSpan=document.getElementById('hour')
let minuteSpan=document.getElementById('minute')
let secondSpan=document.getElementById('second')
let amorpmSpan=document.getElementById('amorpm')

function changeTime(){
    const date=new Date()
    let hour=date.getHours()
    hourSpan.innerHTML=hour  
    let minute=date.getMinutes()
    minuteSpan.innerHTML=minute  
    let second=date.getSeconds()
    secondSpan.innerHTML=second 
    if(hour>0 && hour<11){
        amorpm="AM"
    }
    else{
        amorpm="PM"
    }  
}
setInterval(changeTime,1000)