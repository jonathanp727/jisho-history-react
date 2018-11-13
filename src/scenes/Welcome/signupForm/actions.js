import fetch from 'cross-fetch';
import { push } from 'connected-react-router';

export const CONNECTION_FAILURE = 'CONNECTION_FAILURE';
export const connectionFailure = () => ({
  type: CONNECTION_FAILURE
});

export const REQUEST_JOIN = 'REQUEST_JOIN';
export const requestJoin = () => ({
  type: REQUEST_JOIN
});

export const RECIEVE_JOIN = 'RECIEVE_JOIN';
export const recieveJoin = (json, name) => ({
  type: RECIEVE_JOIN,
  user: {
    id: json.id,
    username: name,
    token: json.token,
  }
});

export function join(username, password) {
  return function (dispatch, getState) {
    dispatch(requestJoin());
    return fetch(`/api/join`, {
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
          localStorage.setItem('jisho-history-userId', json.id);
          localStorage.setItem('jisho-history-userToken', json.token);
          
          dispatch(recieveJoin(json, username));
          dispatch(push('/home'));
        }
      });
  };
}
