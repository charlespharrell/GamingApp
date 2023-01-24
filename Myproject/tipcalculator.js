btn.addEventListener('click', function(){
        let inn = document.getElementById('inn')
        let bill = document.getElementById('bill').value
        let five = document.getElementById('five')
        let ten = document.getElementById('ten')
        let fifteen = document.getElementById('fifteen')
        let twentyfive = document.getElementById('twentyfive')
        let fifty = document.getElementById('fifty')
        let custom = document.getElementById('custom2').value
        let people = document.getElementById('input2').value
        let amount= document.getElementById('Amount3')
        let total = document.getElementById('Total3')
        let reset = document.getElementById('btn')
        if(document.getElementById('input2').value === ''){
                inn.style.display = 'inline-block'
        }
        else if(document.getElementById('five').checked){
                amount.innerText = ((five.value/100*bill)/people).toFixed(2)
                total.innerText = ((bill/people)-amount.innerText).toFixed(2)
                inn.style.display = 'none'
                document.getElementById('custom2').value = 0
                
        }
        else if(document.getElementById('ten').checked){
                amount.innerText = ((ten.value/100*bill)/people).toFixed(2)
                total.innerText = ((bill/people)-amount.innerText).toFixed(2)
                inn.style.display = 'none'
        }
        else if(document.getElementById('fifteen').checked){
                amount.innerText = ((fifteen.value/100*bill)/people).toFixed(2)
                total.innerText = ((bill/people)-amount.innerText).toFixed(2)
                inn.style.display = 'none'
                
        }
        else if(document.getElementById('twentyfive').checked){
                amount.innerText = ((twentyfive.value/100*bill)/people).toFixed(2)
                total.innerText = ((bill/people)-amount.innerText).toFixed(2)
                inn.style.display = 'none'
        }
        else if(document.getElementById('fifty').checked){
                amount.innerText = ((fifty.value/100*bill)/people).toFixed(2)
                total.innerText = ((bill/people)-amount.innerText).toFixed(2)
                inn.style.display = 'none'
        }
        else if(document.getElementById('custom2').value){
                amount.innerText = ((custom/100*bill)/people).toFixed(2)
                total.innerText = ((bill/people)-amount.innerText).toFixed(2)
                inn.style.display = 'none'    
        }       
        }
)



