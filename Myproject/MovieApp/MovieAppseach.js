//function form: Where you search for movies

import getMovie from "./MovieappgetMovie.js";
import ShowMovies from "./MovieAppshowMovie.js";

const Key = 'api_key=bf5d5c902f30a75e944c634dc7326704'
const Base_url ='https://api.themoviedb.org/3'
const API_url = Base_url+'/discover/movie?sort_by=popularity.desc&'+Key
const Search_Url =Base_url+'/search/movie?'+API_url;
const search = document.getElementById('search') 

let formm = document.getElementById('form')
Search_Url === true;

export default formm.addEventListener('submit', (e)=>{
    e.preventDefault();
    try{

        const searchTerms = search.value;
        
        (Search_Url+'&query='+searchTerms)
            // console.log(Search_Url+'&query='+searchTerms)
            getMovie(Search_Url+'&query='+searchTerms)
    }
    catch{

        let found = document.getElementById('found')
        const main = document.getElementById('main')
        // if(Search_Url===false){
            // getMovie(API_url);
            // found.innerHTML= `<div id="found">No result found</div>`
            // mainEL.style.display ='none'
            let mainEL = document.createElement('div')
            mainEL.classList.add('movie')
            mainEL.innerHTML = found.innerHTML
            main.appendChild(mainEL)
            // mainEl
            // found.style.display = 'block'
            // main.innerHTML = 'No result found'
        }
    // }

}
// catch(err){
//     if(searchTerms===false){
//         console.log(err)
//     }
// }
// }
)
