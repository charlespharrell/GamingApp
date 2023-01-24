// const car = ()=>{
//     const countDate = new Date('sept 17, 2022 00:00:00').getTime()
//     const now = new Date().getTime(); 
//     const gap = countDate - now;

//     const second = 1000;
//     const minute =second * 60;
//     const hour = minute * 60;
//     const day = hour * 24

//     const textDay = Math.floor(gap/day);
//     const textHour = Math.floor((gap % day) / hour)
//     const textMinute = Math.floor((gap % hour) / minute)
//     const textSecond = Math.floor((gap % minute) / second)

//     document.getElementById('days').innerText = textDay
//     document.getElementById('hours').innerText = textHour
//     document.getElementById('minutes').innerText = textMinute
//     document.getElementById('seconds').innerText = textSecond
// }
// setInterval(car, 1000)


const card = ()=>{
    const future = new Date('Sept 10, 2022 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = future - now
    // console.log(gap)

    let second = 1000;
    let minute = 60 * second;
    let hour = 60 * minute;
    let day = 24 * hour;

    let textDay = Math.floor((gap/day))
    let textHour = Math.floor((gap%day)/hour);
    let textMinute = Math.floor((gap%hour)/minute);
    let textSecond = Math.floor((gap%minute)/second)

     document.getElementById('days').innerText = textDay 
       document.getElementById('hours').innerText = textHour
      document.getElementById('minutes').innerText = textMinute
     document.getElementById('seconds').innerText =textSecond 

    
}
setInterval(card, 1000)
