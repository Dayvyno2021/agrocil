import axios from "axios";
import {ALL_MESSAGE_FAIL, ALL_MESSAGE_REQUEST, ALL_MESSAGE_SUCCESS, DELETE_MESSAGE_FAIL, DELETE_MESSAGE_REQUEST, DELETE_MESSAGE_SUCCESS, GET_MESSAGE_FAIL, GET_MESSAGE_REQUEST, GET_MESSAGE_SUCCESS} from '../constants/messageContants'

export const allMessageAction = (input) => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_MESSAGE_REQUEST });
    const { loginReducer: { acilDetails: { token } } } = getState();

    const config= {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    const {data} = await axios.post('/api/message/send-message', input, config);
    dispatch({
      type: ALL_MESSAGE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: ALL_MESSAGE_FAIL,
      payload: error.response.data.message ?
        error.response.data.message : error.response
    })
  }
}

export const getMessageAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MESSAGE_REQUEST });
    const { loginReducer: { acilDetails: { token } } } = getState();
    const config = {
      headers: {
        authorization : `Bearer ${token}`
      }
    }
    const { data } = await axios.get('/api/message/get-message', config);
    dispatch({
      type: GET_MESSAGE_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type: GET_MESSAGE_FAIL,
      payload: error?.response?.data?.message ?
        error.response.data.message : error.response
    })
  }
}

export const deleteMessageAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_MESSAGE_REQUEST });
    const { loginReducer: { acilDetails: { token } } } = getState();
    const config = {
      headers: {
        authorization : `Bearer ${token}`
      }
    }
    const { data } = await axios.delete('/api/message/delete', config);
    dispatch({
      type: DELETE_MESSAGE_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type: DELETE_MESSAGE_FAIL,
      payload: error.response.data.message ?
        error.response.data.message : error.response
    })
  }
}