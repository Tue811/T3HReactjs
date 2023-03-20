// var arr=[];

// arr[0]=9;
// arr[1]="hello";
// arr[2]=true

// arr.push(9)
// arr.push('hello');
// arr.push('world');
// arr.push('21')

//kỹ thuật duyệt mảng
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//bài tập jackpot

//sinh ra 6 số ngẫu nhiên từ 1 đến 55

// var rd=[]
// while(rd.length<6){
//     var x=parseInt(Math.random()*54+1)
//     if(!rd.includes(x)){
//         rd.push(x)
//     }
    
// }

// console.log(rd)

var min=1;
var sec=0;
var t=setInterval(function(){
    console.log(min +':'+sec)
    sec--;
    if(sec<0){
        sec=59
        min--
    }
    if(min<0){
        clearInterval(t)
    }
},500)