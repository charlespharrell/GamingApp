// function signn: This is where you sign into the Movieapp

let sign = document.getElementById('sign')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const error = document.getElementById('error')
const perror = document.getElementById('perror')
const signin = document.getElementById('signin')
const sec = document.getElementById('sec')

sign.addEventListener('click', signn)
export default function signn(){
    let mail = email.value;
    let password = pass.value;       
        if('click'){
        if(!mail){
            error.style.display ='block'
        }
            if(!password){
            perror.style.display ='block'
        }
            if(mail && password){
            
            sec.style.display = 'block'
            signin.style.display = 'none'
        }
    }
}
