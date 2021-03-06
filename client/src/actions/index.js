//Action names
export const CHOOSE_ADVERTISEMENT = "CHOOSE_ADVERTISEMENT";
export const GET_AD_DETAILS = "GET_AD_DETAILS";
export const ADD_TEXT = 'redux.ADD_TEXT';

//Actions
export const chooseAdvertisement = data => ({ type: CHOOSE_ADVERTISEMENT, payload: data });
export const getAdDetails = data => ({ type: GET_AD_DETAILS, payload: data });
export const addText = data => ({ type: ADD_TEXT, payload: data });
