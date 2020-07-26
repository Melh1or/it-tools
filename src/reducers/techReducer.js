import {GET_TECH, SET_LOADING, TECH_ERROR} from "../actions/types";

const initialState = {
  techs: [],
  loading: false,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_TECH:
      return {
        ...state,
        techs: payload,
        loading: false
      }
    case TECH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  }
}