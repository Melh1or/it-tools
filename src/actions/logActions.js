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
    debugger
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
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
      payload: err.response.statusText
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
      payload: err.response.statusText
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
      payload: err.response.statusText
    })
  }
}

// Search logs
export const searchLogs = (text) => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch(`/logs?q=${text}`)
    const data = await res.json()

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}

// Set loading false
export const setLoading = () => ({
  type: SET_LOG_LOADING
})