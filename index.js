let hourel= document.getElementsByClassName('hour')[0]
let minuteel=document.getElementsByClassName('minute')[0]
let secondel=document.getElementsByClassName('second')[0]
let ampmel= document.getElementById('ampm')


function clock(){
    let hour= new Date().getHours()
    let minute=  new Date().getMinutes()
    let second=  new Date().getSeconds()
    
    if(hour > 12){
        hour=hour-12
        ampmel.textContent='pm'

    }

    if(hour<10){
        hour='0'+ hour
    }
    
    if(minute<10){
        minute='0'+ minute
    }
    if(second<10){
        second='0'+ second
    }


    hourel.innerText=`${hour}`
    minuteel.innerText=`${minute}`
    secondel.innerText=`${second}`

    setTimeout(()=>{
        
        clock()

    }, 1000)
}

clock()