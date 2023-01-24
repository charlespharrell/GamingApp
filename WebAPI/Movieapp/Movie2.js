import API_url from "/Movie.js"
import { ShowMovies } from "./Movie3"
export function getMovie(url){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data.results)
        ShowMovies(data.results)
    })
}
getMovie(API_url)