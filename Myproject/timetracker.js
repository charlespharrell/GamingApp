let daily = document.getElementById('daily')
let weekly = document.getElementById('weekly')
let monthly = document.getElementById('monthy')

let workch = document.getElementById('workch')
let workph = document.getElementById('workph')

let playch = document.getElementById('playch')
let playph = document.getElementById('playph')

let studych = document.getElementById('studych')
let studyph = document.getElementById('studyph')

let exercisech = document.getElementById('exercisech')
let exerciseph =document.getElementById('exerciseph')

let socialch = document.getElementById('socialch')
let socialph = document.getElementById('socialph')

let selfch = document.getElementById('selfch')
let selfph = document.getElementById('selfph')

function week(){
 workch.innerText=`32hrs`
 workph.innerText=`20hrs`
 playch.innerText =`10hrs`
 playph.innerText = `8hrs`
 studych.innerText =`4hrs`
 studyph.innerText = `7hrs`
 exercisech.innerText = `4hrs`
 exerciseph.innerText= `5hrs`
 socialch.innerText = `5hrs`
 socialph.innerText =`10hrs`
 selfch.innerText = `2hrs`
 selfph.innerText =`2hrs`
}

function day(){
workch.innerText=`5hrs`
workph.innerText=`7hrs`
playch.innerText =`1hrs`
playph.innerText = `2hrs`
studych.innerText =`0hrs`
studyph.innerText = `1hrs`
exercisech.innerText = `1hrs`
exerciseph.innerText= `1hrs`
socialch.innerText = `1hrs`
socialph.innerText =`3hrs`
selfch.innerText = `0hrs`
selfph.innerText =`1hrs`  
}
function month(){
workch.innerText=`103hrs`
 workph.innerText=`28hrs`
 playch.innerText =`23hrs`
 playph.innerText = `29hrs`
 studych.innerText =`13hrs`
 studyph.innerText = `19hrs`
 exercisech.innerText = `11hrs`
 exerciseph.innerText= `18hrs`
 socialch.innerText = `21hrs`
 socialch.innerText =`23hrs`
 selfch.innerText = `7hrs`
 selfph.innerText =`11hrs`
}