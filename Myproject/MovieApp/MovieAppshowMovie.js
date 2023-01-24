//function ShowMvies: Where the interraction of each movie takes place

import getColor from "./MovieAppgetColor.js"

const IMG_url ='https://image.tmdb.org/t/p/w500'
const main = document.getElementById('main')
export default function ShowMovies(data){
    main.innerHTML = ''
    data.forEach(movie=>{
        const{title, poster_path, vote_average, overview}= movie
        let mainEL = document.createElement('div')
        mainEL.classList.add('movie')
        mainEL.innerHTML = `
        <img src="${IMG_url+poster_path}" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>    

    <div class="overview">
         <h3>Overview</h3>
         
        ${overview}
    </div>
        `
        main.appendChild(mainEL)
    })
    
}