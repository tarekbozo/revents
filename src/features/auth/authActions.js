import { SIGN_IN_USER, SIGN_OUT_USER } from './authConst';

export function singInUser(payload) {
  return {
    type: SIGN_IN_USER,
    payload,
  };
}
export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}
