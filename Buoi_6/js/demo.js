var x='tue';
x=x+5;
console.log(x)

var a=18;

if(a>=18){
    console.log('bạn được phép truy cập')
}
else{
    console.log('rất tiếc bạn phải quay trở lại')
}

function tinhTong(a,b){
    var c=a+b;
    return c
}

var h=tinhTong(10,30)
console.log(h)

function soLe(a){
    if(a%2==1){
        return true
    }
    else return false
}

var q=soLe(40)