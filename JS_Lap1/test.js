const myButton = document.getElementById("myButton");
const myForm = document.getElementById("myForm");

myButton.addEventListener("click", function() {
    myForm.style.display = "block";
  });

const mySubmit=document.getElementById("mySubmit")
mySubmit.addEventListener("click", myFunction)

function myFunction(){
    const number1Input=document.getElementById("number1");
    const number1Value=number1Input.value;
    const number2Input=document.getElementById("number2");
    const number2Value=number2Input.value;
    const number3Input=document.getElementById("number3");
    const number3Value=number3Input.value;
    const number4Input=document.getElementById("number4");
    const number4Value=number4Input.value;
    const number5Input=document.getElementById("number5");
    const number5Value=number5Input.value;
    const number6Input=document.getElementById("number6");
    const number6Value=number6Input.value;
    const listNumber=[number1Value,number2Value,number3Value,number4Value,number5Value,number6Value]
    const allNumbers = [];
              for (let i = 1; i <= 55; i++) {
                  allNumbers.push(i);
              }
  
    const randomNumbers = [];
  
    while (randomNumbers.length < 6) {
      const randomIndex = Math.floor(Math.random() * allNumbers.length);
      const randomNumber = allNumbers[randomIndex];
      if (!randomNumbers.includes(randomNumber)) {
          randomNumbers.push(randomNumber);
      }
  }
  
  const matchingNumbers = [];
  if (randomNumbers.includes(number1Value)) {
      matchingNumbers.push(number1Value);
  }
  if (randomNumbers.includes(number2Value)) {
      matchingNumbers.push(number2Value);
  }
  if (randomNumbers.includes(number3Value)) {
      matchingNumbers.push(number3Value);
  }
  if (randomNumbers.includes(number4Value)) {
      matchingNumbers.push(number4Value);
  }
  if (randomNumbers.includes(number5Value)) {
      matchingNumbers.push(number5Value);
  }
  if (randomNumbers.includes(number6Value)) {
      matchingNumbers.push(number6Value);
  }
  
  const count=matchingNumbers.length

  const myResult=document.getElementById("myResult")
  myResult.innerHTML="Các số mà bạn chọn là "+ listNumber;
  const systemResult=document.getElementById("systemResult")
  systemResult.innerHTML="Các số mà hệ thống chọn là "+ randomNumbers;
  
  switch(count){
      case 3:
        return alert('Chúc mừng bạn đã trúng 200.000 đồng!') ;
      case 4:
        return alert('Chúc mừng bạn đã trúng 1.700.000 đồng!');
      case 5:
        return alert('Chúc mừng bạn đã trúng 82.500.000 đồng!')  ;
      case 6:
        return alert('Jackpot! Chúc mừng bạn đã trúng 30 tỷ đồng!');
      default:
        return alert('Rất tiếc mà đã không trúng bất cứ giải thưởng nào!');
    }
   
}

//Mai làm tiếp phần check điều kiện cho input



