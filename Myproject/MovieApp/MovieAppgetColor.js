// function getColor: where you identify the rating of the movie based on the colors green, orange, and red.

export default function getColor(vote){
    if (vote>=8){
        return 'green'
    }
    else if (vote>=5){
        return 'orange'
    }
    else if (vote>=0){
        return 'red'
    }
    }