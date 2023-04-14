class ListProducts{
    tagName = "ListProducts";
    listProducts=[]
    constructor(){
        this.getListProducts();
        this.render();
    }

    getListProducts(){
        var listPr=document.getElementsByTagName(this.tagName)
        var xhttp= new XMLHttpRequest(); //shipper
        xhttp.onload=function(){ //callback function
        // Những việc cần làm khi dữ liệu trả về
        var rs=this.responseText;
        var data=JSON.parse(rs)
        lp=data.products.length
        pr=data.products
        for (let i = 0; i < lp; i++) {
        listPr.innerHTML += ` <div class="col-3" class="product-detail">
                         <div class="card" style="width: 18rem;">
                        <img src="${pr[i].thumbnail}" class="card-img-top" alt="..." >
                        <div class="card-body">
                          <h5 class="card-title">${pr[i].title}</h5>
                          <p class="card-text">${pr[i].description}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                </div>`

    }
    }
    xhttp.open("GET","https://dummyjson.com/products");
    xhttp.send();
    }

    render(){
        for (let i = 0; i < lp; i++) {
            listPr.innerHTML += ` <div class="col-3" class="product-detail">
                             <div class="card" style="width: 18rem;">
                            <img src="${pr[i].thumbnail}" class="card-img-top" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title">${pr[i].title}</h5>
                              <p class="card-text">${pr[i].description}</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                          </div>
                    </div>`
    
        }

        let html = ` 
        <div><ul class="list-group">`;

        for(let i=0;i<this.categories.length;i++){
            html += `<li class="list-group-item">${this.categories[i]}</li>`;
        }               
        html += `</ul>    
                    </div>`;
        let components =  document.getElementsByTagName("this.tagName");
        for(let i=0;i<components.length;i++){
            components[i].innerHTML = html;
        }; 
}        
}

   
}
new ListProducts()

