// function aside(){
//     let html=`<div class="col">
//     <ul class="list-group">
//         <li class="list-group-item">Fashion</li>
//         <li class="list-group-item">Watch</li>
//         <li class="list-group-item">Smart Phone</li>
//         <li class="list-group-item">Machine</li>
//         <li class="list-group-item">Laptop</li>
// <li class="list-group-item">Kitchens</li>
//     </ul>
// </div>`
// let aside=document.getElementsByTagName("Aside")
// for(let i=0;i<aside.length;i++){
//     aside[i].innerHTML=html
// }
// }

// aside();

class Aside{
    
     categories = [
       
        // "Fashion",
        // "Watch",
        // "Smart Phone",
        // "Tivi",
        // "Machines",
        // "Kitchens"
    ];
    constructor(){
        //trước khi render phải lấy được mảng categories từ API
        //https://dummyjson.com/products/categories
        this.getCategories();
        this.render(); 
    }

   
 getCategories(){
    
    let xhttp = new XMLHttpRequest(); // shipper
    var categories=[]
    xhttp.onload =  function(){ // callback function
       // những việc sẽ làm khi nhận được dữ liệu trả về 
       let rs = this.responseText;
       categories = JSON.parse(rs);
    }    
   xhttp.open("GET","https://dummyjson.com/products/categories",false);
 xhttp.send();
    this.categories=categories
    
}

    render(){
            let html = ` 
            <div><ul class="list-group">`;

            for(let i=0;i<this.categories.length;i++){
                html += `<li class="list-group-item">${this.categories[i]}</li>`;
            }               
            html += `</ul>    
                        </div>`;
            let components =  document.getElementsByTagName("Aside");
            for(let i=0;i<components.length;i++){
                components[i].innerHTML = html;
            }; 
    }        
}
new Aside();
// let o = new Aside();
// o.render();