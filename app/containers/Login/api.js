import superagent from 'superagent';
import config from '../../config';

export const loginService = (credentials) =>
  superagent
    .post(`${config.api.url}/login`)
    .send(credentials)
    .then((data) => data.body);
