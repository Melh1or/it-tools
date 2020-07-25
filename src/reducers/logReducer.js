import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG, DELETE_LOG,

} from '../actions/types'


const initialState = {
  logs: [],
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGS:
      return {
        ...state,
        loading: false,
        logs: payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOGS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case ADD_LOG:
      return {
        ...state,
        loading: false,
        logs: [...state.logs, payload]
      }
    case DELETE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.filter(log => log.id !== payload)
      }
    default:
      return state
  }
}