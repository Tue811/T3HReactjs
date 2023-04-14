// function header(){
//     let html=`<div class=container>
//     <h1>Header</h1></div>`
//     let headercomponents=document.getElementsByTagName("HeaderComponent")
//     for(let i=0;i<headercomponents.length;i++){
//         headercomponents[i].innerHTML=html
//     }
// }

// header();

class HeaderComponent{
    tagName = "HeaderComponent";
    constructor(){
        this.render();
    }
    render(){
        let html = `<div class="container">
            <h1>Header</h1>
        </div>`;
        let headercomponents =  document.getElementsByTagName(this.tagName);
        for(let i=0;i<headercomponents.length;i++){
            headercomponents[i].innerHTML = html;
        };   
    }
}
new HeaderComponent()
// let n = new HeaderComponent();
// n.render();