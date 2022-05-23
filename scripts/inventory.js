function append(){
    let data = JSON.parse(localStorage.getItem("products")) || [];

    let allProducts = document.getElementById("all_products")
    allProducts.innerHTML=null;

    data.forEach(function(el,index){
        let div = document.createElement("div");
        let ptype = document.createElement("p");
        ptype.innerText=el.type;
        let pdescrp = document.createElement("p");
        pdescrp.innerText=el.descr;
        let pprice = document.createElement("p");
        pprice.innerText=el.price;
        let pimg = document.createElement("img");
        pimg.src=el.image;
        let button = document.createElement("button");
        button.innerText="Remove"
        button.style.display="block";
        
        // let button = document.getElementById("remove_product")
        // button.innerHTML="Remove"
        button.addEventListener("click",function(){
            remove(index);
        })
    
        
      


        div.append(ptype,pdescrp,pprice,pimg,button);

        allProducts.append(div);
        //console.log(el);
    })
    


}
append();

function remove(index){
    let data = JSON.parse(localStorage.getItem("products")) || [];

    let newData = data.filter(function(el,i){
      
            return i !==index;

        
    });
    //console.log(newData)
    localStorage.setItem("products",JSON.stringify(newData));
    append()
}
