import { OPEN_MODAL, CLOSE_MODAL } from "../ActionTypes/ModalActionTypes";
export const OpenModalAction = (item) => {
  return {
    type: OPEN_MODAL,
    payload: item,
  };
};
export const CloseModalAction = (item) => {
  return {
    type: CLOSE_MODAL,
    payload: item,
  };
};
