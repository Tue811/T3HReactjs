// alert('Cảnh báo nơi này cấm người dưới 18 tuổi')
// var f= confirm('Bạn chắc chắn chưa');
// console.log(f)
// console.log(prompt('Vui lòng nhập số tuổi của bạn'))

/*Yêu cầu nhập tên và tuổi của mình
Nếu từ 18 tuổi trở lên thì thông báo chúc mừng
Nếu dưới 18 tuổi thông báo yêu cầu rời khỏi nơi này.*/

// var t=prompt("Mời bạn nhập tên")

// tuoi=parseInt(h)
// while(isNaN(tuoi)){
//     // var h=prompt('Mời bạn nhập tuổi')
//     console.log('Vui lòng nhập lại')
// }
// console.log(isNaN(tuoi))
// if(h>=18){
//     alert("Chúc mừng " + t +" đã được truy cập vào nơi này!")
// }
// else{
//     alert('Bạn '+ t + ' chưa đủ 18 tuổi nên hãy rời khỏi nơi này!')
// }

// 

var r=parseInt(Math.random()*100)
console.log(r)

//Viết chương trình con số may mắn sinh ra 1 số ngẫu nhiên từ 0 đến 99 cho người chơi 5 lượt nhập số
//Kiểm tra xem có trúng giải thưởng hay không
//Trò chơi kết thúc khi kết thúc 5 lượt chơi hoặc người chơi đoán trúng

var slc=5;
while(slc>0){
    slc--;
    var n=parseInt(prompt('Nhập 1 con số từ 0 đến 99'))
while(isNaN(n)){   
    alert('Bạn nhập sai vui lòng nhập lại')
    var n=parseInt(prompt('Nhập 1 con số từ 0 đến 99'))
}

if(n>=0 && n<=99){
    for(let i=0; i<5;i++){
        if (n==r) {
            alert('Chúc mừng bạn đã trúng giải')
            slc==-1
            break;
        }
        else if(n!==r){
            alert('Rất tiếc bạn đã không trúng giải')
        }
        else if(i==4){
            alert('Bạn đã nhập đủ 5 lần, trò chơi đã kết thúc')
        }
    }

}
else{
    alert('Bạn nhập sai số vui lòng nhập lại')
    var n=parseInt(prompt('Nhập 1 con số từ 0 đến 99'))
}
if(slc==0){
    alert("Rất tiếc bạn đã hết lượt chơi")
}
}

console.log(isNaN(n))


// var n = parseInt(prompt('Nhập 1 con số từ 0 đến 99'))
//     while(n<0 && n<100){
//    if(n==99){
//     for(let i=0; i<5;i++){
//     if(n==r){
//         alert("Chúc mừng người chơi đã trúng giải!")
//         break;
//     }
//     else if(n !==r) {
//         alert('Rất tiếc bạn không trúng giải!')
//     } 
   
//    else{
//     alert('Bạn nhập sai cú pháp, vui lòng nhập lại!')
//    }
   
// }}
//     alert("Bạn đã dùng hết 5 lượt chơi, trò chơi kết thúc!")

//     }

