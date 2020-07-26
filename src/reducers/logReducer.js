import {
  GET_LOGS,
  SET_LOG_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
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
    case SET_LOG_LOADING:
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
    case SET_CURRENT:
      return {
        ...state,
        current: payload
    }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => log.id === payload.id ? payload : log),
        loading: false
      }
    case SEARCH_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false
      }
    default:
      return state
  }
}