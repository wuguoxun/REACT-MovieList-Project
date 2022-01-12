import Actions from "./constants"

const setMovie = (payload)=>({
    type:Actions.SET_MOVIE,
    payload
})


const getMovie =()=>{
    return(dispatch,getState)=>{
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf6a625dad19542626af577057e312b0")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(setMovie(data.results))
        })
    }
}

export const actions = {
    getMovie,
}


