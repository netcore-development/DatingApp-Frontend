import http from './httpService';

const apiEndpoint = '/persons';

export function getPersons() {
    return http.get(apiEndpoint);
}

export default { getPersons };