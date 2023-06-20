async function test(){
    await fetch('https://dummyjson.com/products')
        .then((res)=> res.json())
        .then((res) => fun (res));
}


const fun =(res) =>{
    const container = document.querySelector('.container')
    res.products.forEach(element => {
        if (element.id % 5 == 0) {
            container.innerHTML += `<div class = "five"></div>`
            }
    });
    let five = document.querySelectorAll('.five')
    let x =-4;
    let y =0;
    five.forEach(element => {
        x+=5;
        y+=5;
        for (let index = x; index <=y; index++) {
            element.innerHTML += `<div class="card">
                                    <img src="${res.products[index-1].images[0]}" alt="">
                                    <div class="info">
                                        <p>Product Name : ${res.products[index-1].title}</p>
                                        <p>Category : ${res.products[index-1].category}</p>
                                        <p>price : ${res.products[index-1].price}</p>
                                        <p>stock: ${res.products[index-1].stock}</p>
                                    </div>
                                </div>`
        }
    });
    makeDots (res)
}
const dots = document.querySelector('.dots')
const makeDots = (res) => {
    for (let index = 1 ; index <= (res.products.length / 10); index++) {
        dots.innerHTML += `<div class="dot"></div>`
    }
}
test();

    /* 1 -> 5
        6 -> 10
        11 -> 15
        16 -> 20
        21 -> 25
        26 ->30 */