import {
  DATA_REQUEST,
  DATA_REQUEST_SUCCESS,
  DATA_REQUEST_ERROR,
  ADD_DATA_ITEM,
  RESET_DATA,
} from "constants/actionTypes/data";
import { SocketController } from "helpers/socketController";
import { RESET } from "constants/actionTypes/common";
import * as fromState from "reducers";
import { TYPE, THING } from "constants/params";

let socketController = null;

export const finishRealTimeData = () => () => {
  if (socketController !== null) {
    socketController.close();
  }
};

export const startRealTimeData = () => (dispatch, getState) => {
  const state = getState();
  const thing = fromState.getParam(state, THING).selectedItem;
  const type = fromState.getParam(state, TYPE).selectedItem;
  if (!thing || !type) {
    return;
  }
  finishRealTimeData()();
  const onData = data => {
    const {
      data: { items },
    } = getState();
    if (items.length === 0) {
      dispatch({ type: DATA_REQUEST_SUCCESS });
    }
    dispatch({ type: ADD_DATA_ITEM, item: data });
  };
  const onError = error => {
    dispatch({ type: DATA_REQUEST_ERROR, error });
    dispatch({ type: RESET, preserveError: true });
  };
  socketController = new SocketController(thing, type, onData, onError);
  socketController.listen();
  dispatch({ type: DATA_REQUEST });
};

export const resetData = () => dispatch => {
  dispatch({ type: RESET_DATA });
};