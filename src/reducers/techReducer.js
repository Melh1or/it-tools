import {ADD_TECH, DELETE_TECH, GET_TECH, SET_LOG_LOADING, TECH_ERROR} from "../actions/types";

const initialState = {
  techs: [],
  loading: false,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOG_LOADING:
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
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false
      }
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(t => t.id !== payload),
        loading: false
      }
    default:
      return state
  }
}