import fetch from 'cross-fetch';

export const CONNECTION_FAILURE = 'CONNECTION_FAILURE';
export const connectionFailure = () => ({
  type: CONNECTION_FAILURE
});

export const REQUEST_USER = 'REQUEST_USER';
export const requestUser = () => ({
  type: REQUEST_USER
});

export const RECIEVE_USER = 'RECIEVE_USER';
export const recieveUser = json => ({
  type: RECIEVE_USER,
  user: {
    id: json._id,
    username: json.username,
    words: json.words,
  }
});

export function fetchUser(user) {
  return function (dispatch, getState) {
    dispatch(requestUser());
    return fetch(`/api/user/${user.id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      }
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          dispatch(recieveUser(json));
        }
      });
  };
}
