import fetch from 'cross-fetch';
import { push } from 'connected-react-router';

export const CONNECTION_FAILURE = 'CONNECTION_FAILURE';
export const connectionFailure = () => ({
  type: CONNECTION_FAILURE
});

export const REQUEST_USER = 'REQUEST_USER';
export const requestUser = () => ({
  type: REQUEST_USER
});

export const RECIEVE_USER = 'RECIEVE_USER';
export const recieveUser = (json, token) => ({
  type: RECIEVE_USER,
  user: {
    id: json._id,
    username: json.username,
    token: token,
  },
  words: json.words,
});

export function fetchUser(userId, userToken) {
  return function (dispatch, getState) {
    dispatch(requestUser());
    return fetch(`/api/user/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': userToken,
      }
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          json.words.sort((a, b) => {
            return b.latestIncrement - a.latestIncrement;
          });
          dispatch(recieveUser(json, userToken));
          if(!getState().ui.isMobile) {
            getState().api.socket.emit('userId', json._id);
          }
        }
      });
  };
}

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

          json.user.words.sort((a, b) => {
            return b.latestIncrement - a.latestIncrement;
          });
          
          dispatch(recieveLogin(json));
          if(!getState().ui.isMobile) {
            getState().api.socket.emit('userId', json._id);
          }
          dispatch(push('/home'));                                          // REDIRECT TO HOME
        }
      });
  };
}

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
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
          if(!getState().ui.isMobile) {
            getState().api.socket.emit('userId', json.id);
          }
          dispatch(push('/home'));                                          // REDIRECT TO HOME
        }
      });
  };
}

export const REQUEST_PARSE_IMAGE = 'REQUEST_PARSE_IMAGE';
export const requestParseImage = () => ({
  type: REQUEST_PARSE_IMAGE,
});

export const RECIEVE_PARSE_IMAGE = 'RECIEVE_PARSE_IMAGE';
export const recieveParseImage = result => ({
  type: RECIEVE_PARSE_IMAGE,
  result
});

export function parseImage(imageData) {
  return function(dispatch, getState) {
    dispatch(requestParseImage());
    return fetch('/api/image/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'x-access-token': getState().api.user.token,
      },
      body: imageData,
    }).then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then(json => {
        dispatch(recieveParseImage(json.tokens));
      })
  };
}

export const DELETE_IMAGE_PARSING = 'DELETE_IMAGE_PARSING';
export const deleteImageParsing = () => ({
  type: DELETE_IMAGE_PARSING,
});

export const RECIEVE_ADD_WORD = 'RECIEVE_ADD_WORD';
export const recieveAddWord = (newWord) => ({
  type: RECIEVE_ADD_WORD,
  newWord
});

export const addWord = (word, sentence, addLookup) => {
  return (dispatch, getState) => {
    return fetch('/api/word', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getState().api.user.token,
      },
      body: JSON.stringify({
        word,
        sentence,
      })
    }).then(
        response => response.json(),
        (err) => console.log(err),
      )
      .then(json => {
        const sentencesArr = [];
        if(sentence) {
          sentencesArr.push(sentence);
        }
        dispatch(recieveAddWord(json.newWord));
      })
  }
}

export const OPEN_SOCKET = 'OPEN_SOCKET';
export const openSocket = socket => ({
  type: OPEN_SOCKET,
  socket,
});

export function uploadPhoto(imageData) {
  return function(dispatch, getState) {
    return fetch('/api/image/upload', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'x-access-token': getState().api.user.token,
      },
      body: imageData,
    }).then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then(json => {
        dispatch(push('/home'));   
      })
  };
}

export const RECIEVE_TOKENS_FROM_MOBILE = 'RECIEVE_TOKENS_FROM_MOBILE';
export const recieveTokensFromMobile = tokens => ({
  type: RECIEVE_TOKENS_FROM_MOBILE,
  tokens,
});

export const SEARCH_WORDS = 'SEARCH_WORDS';
export const searchWords = query => ({
  type: SEARCH_WORDS,
  query,
})
