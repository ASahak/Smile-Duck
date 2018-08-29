var can = document.querySelector("#place"),
    Step = document.querySelector("#slider_output1"),
    ducks = document.querySelector("#place1"),
    thorn1 = document.querySelector("#place2"),
    thorn2 = document.querySelector("#place3"),
    count_ducs = document.querySelector("#count"),
    dolar_ducs = document.querySelector("#dolar"),
    x = 5,
    y = 5,
    clear_Right,
    clear_Left,
    clear_Top,
    clear_Bottom,
    speed = 0,
    count_rgh = 0,
    count_lft = 0,
    count_tp = 0,
    count_btt = 0,
    count_arang_ducs = 0,
    dolar_ducs_arang = 0;
document.querySelector(".fa-step-forward").onclick = function(){
    return Step.innerHTML < 16 ? speed = Step.innerHTML *= 2: 0;
}
document.querySelector(".fa-step-backward").onclick = function(){
    return Step.innerHTML <= 16 && Step.innerHTML > 1 ? speed = Step.innerHTML /= 2: 0;
}
window.addEventListener("keydown", addEvent, false)
function addEvent(event){
    switch(event.keyCode){
        case 37:
            count_lft++;
            if(count_lft == 1){
                count_rgh = 0;
                count_btt = 0;
                count_tp = 0;
                clear_Left = setInterval(toLeft, 16 - speed)
                clearInterval(clear_Top)
                clearInterval(clear_Right)
                clearInterval(clear_Bottom)
            }
            break;
        case 38:
            count_tp++;
            if(count_tp == 1){
                count_rgh = 0;
                count_lft = 0;
                count_btt = 0;
                clear_Top = setInterval(toTop, 16 - speed)
                clearInterval(clear_Right)
                clearInterval(clear_Bottom)
                clearInterval(clear_Left)
            }
            break;
        case 39:
            count_rgh++
            if(count_rgh == 1){
                count_btt = 0;
                count_lft = 0;
                count_tp = 0;
                clear_Right = setInterval(toRight, 16 - speed)
                clearInterval(clear_Top)
                clearInterval(clear_Bottom)
                clearInterval(clear_Left)
            }
            break;
        case 40:
            count_btt++;
            if(count_btt == 1){
                count_rgh = 0;
                count_lft = 0;
                count_tp = 0;
                clear_Bottom = setInterval(toBottom, 16 - speed)
                clearInterval(clear_Top)
                clearInterval(clear_Right)
                clearInterval(clear_Left)
            }
            break;
        default : break;    
    }
}
var arr = [],
    arr_1 = [],
    ds, ds1, ds2;
for(var i =30; i < document.getElementById("main").offsetWidth - 30; i+=3){
    arr.push(i)
}
for(var i =30; i < document.getElementById("main").offsetHeight - 30; i+=3){
    arr_1.push(i)
}
var shuffleArray = function(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
} 
function shuffle(){
    count_ducs.innerHTML =count_arang_ducs
    count_arang_ducs++;
    dolar_ducs.innerHTML =dolar_ducs_arang;
    dolar_ducs_arang+=100;
    arr = shuffleArray(arr);
    arr_1 = shuffleArray(arr_1);
    ds = Math.ceil(Math.random() * 10)
    ds1 = Math.floor(Math.random() * (20 - 11) + 11)
    ds2 = Math.floor(Math.random() * (30 - 20) + 20)
    ducks.style.top = arr_1[ds]+"px";
    ducks.style.left = arr[ds]+"px";
    thorn1.style.top = arr_1[ds1]+"px";
    thorn1.style.left = arr[ds1]+"px";
    thorn2.style.top = arr_1[ds2]+"px";
    thorn2.style.left = arr[ds2]+"px";
}
shuffle()
const gameOver = () =>{
    window.removeEventListener("keydown", addEvent, false)
    clearInterval(clear_Bottom)
    clearInterval(clear_Top)
    clearInterval(clear_Right)
    clearInterval(clear_Left)
    red_func()
}
const red_func = () => {
    document.getElementById("pacman-top").style.background = "red";
    document.getElementById("pacman-bottom").style.background = "red";
    
    setTimeout(function(){
        window.location.reload()
    }, 1000)
}
const toLeft = () =>{
    if(can.offsetLeft < 0){
        red_func()
        clearInterval(clear_Left)
        window.removeEventListener("keydown", addEvent, false)
    }
    x-=3;
    can.style.left = x+"px";
    can.style.transform = 'rotateY('+180+'deg)'; 
    if(can.offsetTop + 60 > arr_1[ds] && can.offsetLeft + 40 < arr[ds] + 25 && can.offsetTop + 40 < arr_1[ds] + 50 && can.offsetLeft + 40 > arr[ds]){
        shuffle()
    }
    if(can.offsetTop + 60 > arr_1[ds1] && can.offsetLeft + 40 < arr[ds1] + 25 && can.offsetTop + 40 < arr_1[ds1] + 50 && can.offsetLeft + 40 > arr[ds1] || can.offsetTop + 60 > arr_1[ds2] && can.offsetLeft + 40 < arr[ds2] + 25 && can.offsetTop + 40 < arr_1[ds2] + 50 && can.offsetLeft + 40 > arr[ds2]){
        gameOver()
    }
}
const toRight = () =>{
    if(can.offsetLeft > document.getElementById("main").offsetWidth - can.offsetWidth){
       red_func()
       clearInterval(clear_Right);
       window.removeEventListener("keydown", addEvent, false)
    }
    x+=3;
    can.style.transform = 'rotateY('+0+'deg)'; 
    can.style.left = x+"px";
    
    if(can.offsetTop + 60 > arr_1[ds] && can.offsetLeft + 40 < arr[ds] + 25 && can.offsetTop + 40 < arr_1[ds] + 50 && can.offsetLeft + 40 > arr[ds]){
        shuffle()
    }
    if(can.offsetTop + 60 > arr_1[ds1] && can.offsetLeft + 40 < arr[ds1] + 25 && can.offsetTop + 40 < arr_1[ds1] + 50 && can.offsetLeft + 40 > arr[ds1] || can.offsetTop + 60 > arr_1[ds2] && can.offsetLeft + 40 < arr[ds2] + 25 && can.offsetTop + 40 < arr_1[ds2] + 50 && can.offsetLeft + 40 > arr[ds2]){
        gameOver()
    }
}
const toTop = () =>{
    if(can.offsetTop < 0){
       red_func()
       clearInterval(clear_Top);
       window.removeEventListener("keydown", addEvent, false)
    }
    can.style.transform = 'rotate('+(-90)+'deg)'; 
    y-=3;
    can.style.top = y+"px"
    if(can.offsetTop < arr_1[ds] && can.offsetTop + 80 > arr_1[ds] && can.offsetLeft + 80 > arr[ds] && can.offsetLeft + 50 < arr[ds] + 50){
        shuffle()
    }
    if(can.offsetTop < arr_1[ds1] && can.offsetTop + 80 > arr_1[ds1] && can.offsetLeft + 80 > arr[ds1] && can.offsetLeft + 50 < arr[ds1] + 50 || can.offsetTop < arr_1[ds2] && can.offsetTop + 80 > arr_1[ds2] && can.offsetLeft + 80 > arr[ds2] && can.offsetLeft + 50 < arr[ds2] + 50){
        gameOver()
    }
}
const toBottom = () =>{
    if(can.offsetTop > document.getElementById("main").offsetHeight - can.offsetHeight){
       red_func()
       clearInterval(clear_Bottom);
       window.removeEventListener("keydown", addEvent, false)
    }
    can.style.transform = 'rotate('+(90)+'deg)'; 
    y+=3;
    can.style.top = y+"px"
    if(can.offsetTop + 40 > arr_1[ds] && can.offsetTop + 20 < arr_1[ds] + 50 && can.offsetLeft + 80 > arr[ds] && can.offsetLeft + 50 < arr[ds] + 50){
        shuffle()
    }
    if(can.offsetTop + 40 > arr_1[ds1] && can.offsetTop + 20 < arr_1[ds1] + 50 && can.offsetLeft + 80 > arr[ds1] && can.offsetLeft + 50 < arr[ds1] + 50 || can.offsetTop + 40 > arr_1[ds2] && can.offsetTop + 20 < arr_1[ds2] + 50 && can.offsetLeft + 80 > arr[ds2] && can.offsetLeft + 50 < arr[ds2] + 50){
        gameOver()
    }
}

