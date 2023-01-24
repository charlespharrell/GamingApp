

// const Key = 'api_key=bf5d5c902f30a75e944c634dc7326704'
// const Base_url ='https://api.themoviedb.org/3'

// const API_url = Base_url+'/discover/movie?sort_by=popularity.desc&'+Key
// const IMG_url ='https://image.tmdb.org/t/p/w500'
// const Search_Url =Base_url+'/search/movie?'+API_url
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

// function getMovie(url){
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         // console.log(data.results)
//         ShowMovies(data.results)
//     })
// }
// getMovie(API_url)

// export default function ShowMovies(data){
//     main.innerHTML = ''
//     data.forEach(movie=>{
//         const{title, poster_path, vote_average, overview}= movie
//         let mainEL = document.createElement('div')
//         mainEL.classList.add('movie')
//         mainEL.innerHTML = `
        
//         <img src="${IMG_url+poster_path}" alt="${title}">
//         <div class="movie-info">
//         <h3>${title}</h3>
//         <span class="${getColor(vote_average)}">${vote_average}</span>
//     </div>    

//     <div class="overview">
//          <h3>Overview</h3>

//         ${overview}
//     </div>
    
//         `
//         main.appendChild(mainEL)
//     })
    
// }

// function getColor(vote){
// if (vote>=8){
//     return 'green'
// }
// else if (vote>=5){
//     return 'orange'
// }
// else if (vote>=0){
//     return 'red'
// }
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
//  export function signn(){

//      let mail = email.value;
//      let password = pass.value;
         
//          if('click'){
//          if(!mail){
//              error.style.display ='block'
//          }
//              if(!password){
//              perror.style.display ='block'
//          }
//              if(mail && password){
             
//              sec.style.display = 'block'
//              signin.style.display = 'none'
//          }
//      }
//  }
