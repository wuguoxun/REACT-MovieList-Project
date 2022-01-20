import Actions from "./constants"

const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc"
const api_key = "&api_key=cf6a625dad19542626af577057e312b0"
const page_url = "&language=en-US&query=search&page=2?api_key=cf6a625dad19542626af577057e312b0&language=en-US&query=search&page="

const setMovie = (payload) => ({
    type: Actions.SET_MOVIE,
    payload
})

const nextPage = (payload = 1) => ({
    type: Actions.SET_NEXTPAGE,
    payload
})

const prevPage = (payload = 1) => ({
    type: Actions.SET_PREVPAGE,
    payload
})

const setLikeList = (payload) => ({
    type: Actions.SET_LIKELIST,
    payload
})

const getMovie = () => {
    return (dispatch) => {
        fetch(url + api_key)
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch(setMovie(data.results))
            })
    }
}

const getPage = () => {
    return (dispatch, getState) => {
        fetch(url + api_key + page_url + getState().pageNum)
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch(setMovie(data.results))
            })
    }
}

const like = (id) => {
    return (dispatch, getState) => {
        dispatch(setLikeList([...getState().likeList].concat(id)))
    }
}

const unlike = (id) => {
    return (dispatch, getState) => {
        const removeFromLikeList = getState().likeList.filter((movie) => {
            return movie !== id
        })
        dispatch(setLikeList(removeFromLikeList))
    }
}


export const actions = {
    getMovie,
    nextPage,
    prevPage,
    getPage,
    like,
    unlike,
}


