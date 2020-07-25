import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR
} from './types'

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch('/logs');
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}

// Set loading false
export const setLoading = () => ({
  type: SET_LOADING
})