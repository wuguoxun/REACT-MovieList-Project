import Actions from "./constants"

const initialState = {
    movie:[],
}


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case Actions.SET_MOVIE:
          return{
              ...state,
              movie: [...state.movie,...action.payload]
          }
        default:
            return {
                ...state
            }
    }
}


export default reducer