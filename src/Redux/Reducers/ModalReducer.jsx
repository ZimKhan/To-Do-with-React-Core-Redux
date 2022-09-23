import * as ActionType from "../ActionTypes/ModalActionTypes";
const initialState = {
  isOpen: false,
};
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case ActionType.CLOSE_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
