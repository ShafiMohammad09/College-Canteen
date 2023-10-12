burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav1 = document.querySelector('.nav1')
nav2 = document.querySelector('.nav2')




burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    nav1.classList.toggle('v-class');
    nav2.classList.toggle('v-class');
})
// Add cart functionality 

let totalprice = 0;
let totalincart = 0;

let products = [

    {
        name:"Idly",
        price : 0,
        incart : 0
    },
    {
        name:"Dosa",
        price : 0,
        incart : 0
    },
    {
        name:"Baji",
        price : 0,
        incart : 0
    },
    {
        name:"Vada",
        price : 0,
        incart : 0
    },
    {
        name:"Fry-piece-Biryani",
        price : 0,
        incart : 0
    },
    {
        name:"Dum-Biryani",
        price : 0,
        incart : 0
    },
    {
        name:"Friedrice",
        price : 0,
        incart : 0
    },
    {
        name:"coming-soon",
        price : 0,
        incart : 0
    },
    {
        name:"Veg-Manchurian",
        price : 0,
        incart : 0
    },
    {
        name:"Chicken-Manchurian",
        price : 0,
        incart : 0
    },
    {
        name:"Veg-Puff",
        price : 0,
        incart : 0
    },
    {
        name:"Egg-Puff",
        price : 0,
        incart : 0
    },
    {
        name:"Coca-Cola",
        price : 0,
        incart : 0
    },
    {
        name:"Thumpsup",
        price : 0,
        incart : 0
    },
    {
        name:"Chocabar",
        price : 0,
        incart : 0
    },
    {
        name:"Cones/Cups",
        price : 0,
        incart : 0
    },
]


let carts = document.querySelectorAll(".addcart");

for (let index = 0; index < carts.length; index++) {
    carts[index].addEventListener('click' , ()=>{
        // console.log(products);
        cartNumber(products[index]);
    })
}

// Append totalprice total items in cart and show in cart
function cartNumber(product){
    totalprice += product.price;
    totalincart += 1;
    product.incart +=1;
    document.querySelector(".carttext span").textContent = totalincart;
}

let cart = document.querySelector(".carttext a");
let backdrop = document.querySelector(".backdrop");
let cartsection = document.querySelector(".cart-section");
cart.addEventListener('click' , ()=>{
    backdrop.classList.remove("displaynone");
    cartsection.classList.remove("displaynone");

            const cartModal = document.getElementById("cartModal");
            const cartItems = document.getElementById("cartItems");
            
            console.log(cartModal);
            console.log(cartItems);
            // Clear existing cart items
            cartItems.innerHTML = "";

            // Loop through the products and display them in the cart
            products.forEach(product => {
                if (product.incart > 0) {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${product.name}</td>
                        <td>₹${product.price.toFixed(2)}</td>
                        <td>${product.incart}</td>
                    `;
                    cartItems.appendChild(row);
                }
            });

            // Show the cart modal
            cartModal.style.display = "block";

});

cartclose = document.querySelector(".cartuppertext i");
cartclose.addEventListener('click' , ()=>{

    backdrop.classList.add("displaynone");
    cartsection.classList.add("displaynone");
});

let checkout = document.getElementById("checkout");
checkout.addEventListener('click' , ()=>{

    cartItems.innerHTML = "";
});