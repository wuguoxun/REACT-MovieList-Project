import Actions from "./constants"

const initialState = {
    movie: [],
    pageNum: 1
}


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.SET_MOVIE:
            return {
                ...state,
                movie: [...action.payload]
            }
        case Actions.SET_PREVPAGE:
            return {
                ...state,
                pageNum: state.pageNum - action.payload
            }
        case Actions.SET_NEXTPAGE:
            return {
                ...state,
                pageNum: state.pageNum + action.payload
            }
        default:
            return {
                ...state
            }
    }
}


export default reducer