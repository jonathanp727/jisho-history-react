import fetch from 'cross-fetch';

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
    id: json._id,
    username: json.username,
    words: json.words,
  }
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
          window.localStorage.setItem('userId', json.id);
          window.localStorage.setItem('userToken', json.token);
          dispatch(recieveLogin(json));
        }
      });
  };
}
