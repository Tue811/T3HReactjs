//DOM 
// var p=prompt('Nhập tiêu đề')

// var hd=document.getElementById('heading')
// // hd.innerText=p
// hd.innerHTML="<i>"+p+"</i>"
// hd.style.color=p;
// hd.style.backgroundColor='red'

var minValue=document.getElementById('min')
var secValue=document.getElementById('sec')

var min=10;
var sec=00;
var t=setInterval(function(){
    sec--;
    if(sec<0){
        sec=59
        min--
    }
    if(min<0){
        clearInterval(t)
    }
    minValue.innerHTML=min<10?'0'+min:min;
    secValue.innerHTML=sec<10?'0'+sec:sec
},1000)

var mon=document.getElementsByClassName('mon')
var qs=document.querySelectorAll('ul li.mon');//chỉnh style

var menu=[
    "Lẩu tứ xuyên",
    "Vịt quay bắc kinh",
    "Bún bò",
    "Phở Lý quốc sư"
]

for(var i=0;i<mon.length;i++){
    mon[i].innerText=menu[i]
}

