import {
  GET_TECH,
  ADD_TECH,
  DELETE_TECH,
  SET_TECH_LOADING,
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

// add tech
export const addTech = (tech) => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch('/techs', {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_TECH,
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

// get tech from server
export const deleteTech = (id) => async dispatch => {
  try {
    dispatch(setLoading())

     await fetch(`/techs/${id}`, {
       method: 'DELETE'
     })

    dispatch({
      type: DELETE_TECH,
      payload: id
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
  type: SET_TECH_LOADING
})