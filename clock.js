


let htmlhour=document.getElementById('hour')
let htmlmin=document.getElementById('min')
let htmlsec=document.getElementById('sec')



let displayTime=()=>{
    let date=new Date()
    let hour=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()


    let hourRotation=30 * hour +   min/2
    let minRotation=6 * min
    let secRotation=6 * sec


    htmlhour.style.transform = `rotate(${hourRotation}deg)`
    htmlmin.style.transform = `rotate(${minRotation}deg)`
    htmlsec.style.transform = `rotate(${secRotation}deg)`


}
setInterval(displayTime, 1000);