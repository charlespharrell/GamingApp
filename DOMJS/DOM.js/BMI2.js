window.onload = ()=>{
    let button = document.querySelector('#btn')
    button.addEventListener('click', calculateBMI);

}
function calculateBMI(){
    let height= parseInt(document.querySelector('#height').value)

    let weight= parseInt(document.querySelector('#weight').value)

    let result= parseInt(document.querySelector('#result').value)



    if (height === " "|| isNaN(height))
    result.innerHTML = 'Provide a valid height'
    else if (weight === " " || isNaN(weight))
    result.innerHTML = 'Provide a valid weight'
    
    else{
        let BMI = (weight/ ((height**2)/10000)).toFixed(2)

         if(BMI< 18.6 )
          result.innerHTML = `underweight : <span>${BMI}</span>`

       else if (BMI >= 18.6 && BMI <24.9)
        result.innerHTML =`Normal : <span>${BMI}</span>`;

        else 
        result.innerHTML = `overweight : <span>${BMI}</span>`
        
    }

}



