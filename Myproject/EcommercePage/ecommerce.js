window.onload =()=>{
    let cart = document.getElementById('cart')
    cart.addEventListener('click', cartt)  
}

let add2 = document.getElementById('add2')
let empty = document.getElementById('empty')

function cartt(){
    if (cartt)
    {
        cartt = false
        empty.style.display= 'inline-block'
        empty.innerHTML= `
        <div class="cart2">Cart</div>
            <hr class="hr">
            <div class="empty2">Your cart is empty</div>
            
        `
    }
    else{
        cartt = true
        empty.style.display= 'none'
    }
}
function add3(){
    if(add2){
        let cartamount = document.getElementById('cart-amount')
        let total = document.getElementById('total')
        let carttimes = document.getElementById('cart-times')
        carttimes = 3;
        cartamount = '$125.00';
        total ='$375.00'
        empty.style.display= 'inline-block'
        empty.innerHTML =`
        <div class="cart2">Cart</div>
        <hr class="hr">
        <div id="empty2">
        <img id="cart-shoe" width="40px" height="40px" src="/ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1.jpg" alt="">
        <div id="fill">Fall Limited Edition Sneakers</div>
        <div id="cart-amount">${cartamount}</div>
        <div id="x">X</div>
        <div id="cart-times">${carttimes}</div>
        <div id="total">${total}</div>
        <button id="check">Checkout</button>
        </div>
        `
        add2 = false
    }
    else{
        add2= true;
        empty.style.display= 'none'
    }
}
function pluss(){
    let minus = document.getElementById('minus')
    let num = document.getElementById('num')
    let plus = document.getElementById('plus')
    num = 0;
    
        for(num= 0; num>=0; num++){
            num = num+ 1;
            
        }
        
    

}