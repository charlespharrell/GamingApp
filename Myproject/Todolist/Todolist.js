
const inputDetails = document.querySelector('.entered-list')
const addButton = document.querySelector('.add-list')
const taskDiv = document.querySelector('.tasks')

const deleteButton = document.querySelector('.bxs-x-circle')

const uniqueId = Date.now()

console.log(uniqueId)
const format = (text) => {
    if(text.length === 0){
       return alert('Please enter a todo')
    
    }else {
        return `<div class="item">
                    <p>${text}</p>
                <div class="item-btn">
                    <i class='bx bxs-edit'></i>
                    <i class='bx bxs-x-circle fa-xmark'></i>
                </div>
            </div>`
    }
    
}

addButton.onclick = () => {
    
    let text = inputDetails.value
    
    const check = format(text)

    taskDiv.innerHTML += check
    inputDetails.value = '';
    // console.log(check)
};
