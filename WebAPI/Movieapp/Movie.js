
// import getMovie from "/Movie2"
const Key = 'api_key=bf5d5c902f30a75e944c634dc7326704'

const Base_url ='https://api.themoviedb.org/3'

const API_url = Base_url+'/discover/movie?sort_by=popularity.desc&'+Key
const IMG_url ='https://image.tmdb.org/t/p/w500'
const Search_Url =Base_url+'/search/movie?'+API_url
// const Rate_url = '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc'
// const APIRate_url = Base_url+'/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc'+Key
// function Base(base){
    // const Base_url ='https://api.themoviedb.org/3'  
// }
// const APIRate_url='https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=bf5d5c902f30a75e944c634dc7326704'

// const search = document.getElementById('search') 
// const main = document.getElementById('main')
// const form = document.getElementById('form')
// const sign = document.getElementById('sign')
// const signin = document.getElementById('signin')
// const sec = document.getElementById('sec')
// const email = document.getElementById('email')
// const pass = document.getElementById('pass')
// const error = document.getElementById('error')
// const perror = document.getElementById('perror')

// function getMovie(API_url){
    fetch(API_url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        // ShowMovies(data.results)
    })
// }
// getMovie(API_url)

// function ShowMovies(data){
//     main.innerHTML = ''
//     data.forEach(movie=>{
//         const {title, poster_path, vote_average, overview} = movie;
//         let movieEl = document.createElement('div')
//         movieEl.classList.add('moviess')
//         movieEl.innerHTML = 
//         // using object destructuring
//         `
        
//         <img src='${IMG_url+poster_path}' alt="${title}"> 

//         <div class="movie-info">
//             <h3>${title}</h3>
//             <span class="${getColor(vote_average)}">${vote_average}</span>
//         </div>    

//         <div class="overview">
//             <h3>Overview</h3>
//             ${overview}
//         </div>
//         `
//         main.appendChild(movieEl);
//     })
// }

// function getColor(vote){
//     if(vote >=8){
//         return 'green'
//     }
//     else if (vote >=5){
//         return 'orange'
//     }
//     else {
//         return 'red'
//     }
// }

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     const searchTerms = search.value;

//     if(searchTerms){
//         getMovie(Search_Url+'&query='+searchTerms)
//     }
//     else{
//         getMovie(API_url);
//     }
// })
 
// sign.addEventListener('click', (e)=>{
//     let mail = email.value;
//     let password = pass.value;
        
//         if('click'){
//         if(!mail){
//             error.style.display ='block'
//         }
//             if(!password){
//             perror.style.display ='block'
//         }
//             if(mail && password){
            
//             sec.style.display = 'block'
//             signin.style.display = 'none'
//         }
//     }
// }

// )