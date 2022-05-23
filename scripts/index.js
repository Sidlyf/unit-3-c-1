//store the products array in localstorage as "products"
function productsData(t,d,p,i){
    this.type = t;
    this.descr = d;
    this.price = p;
    this.image = i;
}






function storeData(e){
    e.preventDefault();
    let form = document.getElementById("products");
    let type = form.type.value;
    let descr = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new productsData(type,descr,price,image)

    let data = JSON.parse(localStorage.getItem("products")) || [];

    data.push(p1);

    localStorage.setItem("products",JSON.stringify(data));



    //console.log(p1)
    form.type.value=null;
    form.desc.value=null;
    form.price.value=null;
    form.image.value=null;
}