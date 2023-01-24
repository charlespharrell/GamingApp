import { getColor } from "./Movie4.js";

export function ShowMovies(data){
    main.innerHTML = ''
    data.forEach(movie=>{
        const {title, poster_path, vote_average, overview} = movie;
        let movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = 
        // using object destructuring
        `
        
        <img src='${IMG_url+poster_path}' alt="${title}"> 

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>    

        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieEl);
    })
}