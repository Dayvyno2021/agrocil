import { ALL_MESSAGE_FAIL, ALL_MESSAGE_REQUEST, ALL_MESSAGE_RESET, ALL_MESSAGE_SUCCESS, DELETE_MESSAGE_FAIL, DELETE_MESSAGE_REQUEST, DELETE_MESSAGE_RESET, DELETE_MESSAGE_SUCCESS, GET_MESSAGE_FAIL, GET_MESSAGE_REQUEST, GET_MESSAGE_RESET, GET_MESSAGE_SUCCESS } from "../constants/messageContants";

export const allMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_MESSAGE_REQUEST:
      return { loading: true };
    case ALL_MESSAGE_SUCCESS:
      return { loading: false, mes: action.payload };
    case ALL_MESSAGE_FAIL:
      return { loading: false, error: action.payload };
    case ALL_MESSAGE_RESET:
      return {};
  
    default:
      return state;
  }
}

export const getMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MESSAGE_REQUEST:
      return { loading: true };
    case GET_MESSAGE_SUCCESS:
      return { loading: false, message: action.payload };
    case GET_MESSAGE_FAIL:
      return { loading: false, error: action.payload };
    case GET_MESSAGE_RESET:
      return {};
 
    default:
      return state;
  }
}

export const deleteMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MESSAGE_REQUEST:
      return { loading: true };
    case DELETE_MESSAGE_SUCCESS:
      return { loading: false, deleteItem: action.payload, success: true };
    case DELETE_MESSAGE_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_MESSAGE_RESET:
      return {};
  
    default:
      return state;
  }
}