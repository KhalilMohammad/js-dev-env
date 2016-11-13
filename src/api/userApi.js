import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
};

export function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    return fetch(baseUrl + url).th(onSucess, onError);
};

function del(url) {
  const request = new request (baseUrl + url , {
      method : 'DELETE'
  });

  return fetch(request).then(onSucess,onError);
};

function onSucess(response) {
    return response.json();
};

function onError(error) {
    console.log(error); // eslint-disable-line no-console
};
