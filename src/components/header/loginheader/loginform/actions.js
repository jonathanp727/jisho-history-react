import fetch from 'cross-fetch';
import { push } from 'connected-react-router';

export const CONNECTION_FAILURE = 'CONNECTION_FAILURE';
export const connectionFailure = () => ({
  type: CONNECTION_FAILURE
});

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const requestLogin = () => ({
  type: REQUEST_LOGIN
});

export const RECIEVE_LOGIN = 'RECIEVE_LOGIN';
export const recieveLogin = json => ({
  type: RECIEVE_LOGIN,
  user: {
    id: json.user._id,
    username: json.user.username,
    token: json.token,
  },
  words: json.user.words,
});

export function login(username, password) {
  return function (dispatch, getState) {
    dispatch(requestLogin());
    return fetch(`/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username': username,
        'password': password,
      })
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          console.log(json);
          localStorage.setItem('jisho-history-userId', json.user._id);
          localStorage.setItem('jisho-history-userToken', json.token);
          dispatch(recieveLogin(json));
          dispatch(push('/home'));
        }
      });
  };
}
