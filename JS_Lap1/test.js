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
  myResult.innerHTML="C??c s??? m?? b???n ch???n l?? "+ listNumber;
  const systemResult=document.getElementById("systemResult")
  systemResult.innerHTML="C??c s??? m?? h??? th???ng ch???n l?? "+ randomNumbers;
  
  switch(count){
      case 3:
        return alert('Ch??c m???ng b???n ???? tr??ng 200.000 ?????ng!') ;
      case 4:
        return alert('Ch??c m???ng b???n ???? tr??ng 1.700.000 ?????ng!');
      case 5:
        return alert('Ch??c m???ng b???n ???? tr??ng 82.500.000 ?????ng!')  ;
      case 6:
        return alert('Jackpot! Ch??c m???ng b???n ???? tr??ng 30 t??? ?????ng!');
      default:
        return alert('R???t ti???c m?? ???? kh??ng tr??ng b???t c??? gi???i th?????ng n??o!');
    }
   
}

//Mai l??m ti???p ph???n check ??i???u ki???n cho input



