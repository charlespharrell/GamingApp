//function getMovie: Where the Movie API is fetced converted to json, and displayed on the browser

import  signn  from './Movieapp2signn.js';
import  ShowMovies from  './MovieAppshowMovie.js';
import form  from './MovieAppseach.js';

const Key = 'api_key=bf5d5c902f30a75e944c634dc7326704'
const Base_url ='https://api.themoviedb.org/3'
const API_url = Base_url+'/discover/movie?sort_by=popularity.desc&'+Key

    export default function getMovie(url){
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.results)
            ShowMovies(data.results)
        })
    }
    getMovie(API_url)
    
