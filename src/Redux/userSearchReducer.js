import * as types from './actionTypes'

const initialState = 0;

const userSearchReducer = (state = initialState, action) => {
  switch(action.type){
    case types.SETDATA: 
      return {
        ...state,
        homeData: action.payload
      }
      case types.SEARCH:
        return {
          ...state,
          searched: true
        }

      case types.CHANGEUSER:
        return {
          ...state,
          userName: action.payload,
          searched: false
        }
    case types.SETFOLLOWING: 
      return {
        ...state,
        followingData: action.payload
      }

    default:
      return state
  }
};  

export default userSearchReducer;