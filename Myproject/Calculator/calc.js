let display = document.getElementById('show-value')
let result = document.getElementById('result')
let equal = document.getElementById('equal')
let divide = document.getElementById('divide')

let btns = Array.from(document.getElementsByClassName('num'))
btns.forEach(btn => {
    btn.addEventListener('click', e =>{
       
        switch (e.target.innerText){

            case 'CE':    
            display.innerText = ''
            result.innerText =''
            
            break;
            case 'C':{
                display.innerText = display.innerText.slice(0, -1)
                if(display.innerText.slice(0, -1)){
                    result.innerText = ' '
                }
            break;
            }
            case '=':{   
                try{
                    result.innerText = eval(display.innerText)    
                }
                catch{ 
                    result.innerText = 'err'
                }
                break;
            }

            case '%':{
                if(display.innerText.length>1){
                    let a = display.innerText[0]
                let b = display.innerText[2]
                    result.innerText = (a/b*100).toFixed(3);
                }
                else {
                    result.innerText = display.innerText/100;
                }
                   
                break;
            }
               
            default:
                 display.innerText +=e.target.innerText           
                 }
                if (display.innerText.length===6){
                display.style.fontSize = 'small'
        }
    })  
});
