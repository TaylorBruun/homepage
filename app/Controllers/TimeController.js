
let currTime = ''

function _drawTime(){
   currTime = new Date().toLocaleTimeString()
    
    document.getElementById('time').innerText = currTime
}

export class TimeController{
constructor(){
    _drawTime()
    setInterval(_drawTime, 1000)
}

}