window.onload =()=>{
    let btn = document.getElementById('btn')
    btn.addEventListener('click', submit)  
}
function submit(){
var valid = false
     if(document.getElementById('one').checked){
    valid = true
    contain.style.display = 'inline-block'
    cont.style.display = 'none'
    num.innerText = 1;
     }
    else if(document.getElementById('two').checked){
    valid = true
    contain.style.display = 'inline-block'
    cont.style.display = 'none'
    num.innerText = 2;
    }    
    else if(document.getElementById('three').checked){
    valid = true
    contain.style.display = 'inline-block'
    cont.style.display = 'none'
    num.innerText = 3;
    }
    else if(document.getElementById('four').checked){
    valid = true
    contain.style.display = 'inline-block'
    cont.style.display = 'none'
    num.innerText = 4;
    }
    else if(document.getElementById('five').checked){
    valid = true
    contain.style.display = 'inline-block'
    cont.style.display = 'none'
    num.innerText = 5;
    }
    }
    function back(){
    let back = document.getElementById('back')
    contain.style.display = 'none'
    cont.style.display = 'inline-block'
    }
    
    
   


