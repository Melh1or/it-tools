import {
  GET_TECH,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECH_ERROR
} from './types'

// get tech from server
export const getTechs = () => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch('/techs')
    const data = await res.json()

    dispatch({
      type: GET_TECH,
      payload: data
    })
  } catch(err) {
    console.log(err)
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText
    })
  }
}

// Set loading false
export const setLoading = () => ({
  type: SET_LOADING
})