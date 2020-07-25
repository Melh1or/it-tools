import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG,

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

// Add new log
export const addLog = (log) => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json()

    dispatch({
      type: ADD_LOG,
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

// Delete log
export const deleteLog = (id) => async dispatch => {
  try {
    dispatch(setLoading())

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    })

    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}

// Set current log
export const setCurrent= log => ({
  type: SET_CURRENT,
  payload: log
})

// Update log
export const updateLog = (log) => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: UPDATE_LOG,
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

// Clear current log
export const clearCurrent = () => ({
  type: CLEAR_CURRENT
})

// Set loading false
export const setLoading = () => ({
  type: SET_LOADING
})