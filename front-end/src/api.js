import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/** API class
 * Anything the frontend needs to communicate with the backend is put in the following API class.
 * This class centralizes all API calls so that they are not littered throughout the code.
 */

class Api {
  static token;

  // This method centralizes all the logic of API calls so that any new methods added will be easy to write.
  static async request(endpoint, data = {}, method = 'get') {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      Authorization: `Bearer ${Api.token}`
    };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({url, method, data, params, headers})).data;
    } catch(e) {
      let message = e.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    };
  };

  static async register(data) {
    const res = await this.request('auth/register', data, 'post');
    return res.token;
  };

  static async login(data) {
    const res = await this.request('auth/login', data, 'post');
    return res.token;
  };

  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  };

  static async getUserWorks(username) {
    const res = await this.request(`users/works/${username}`);
    return res.works;
  };

  static async saveWork(data) {
    const res = await this.request('works/save', data, 'post');
    return res.work;
  };

  static async loadWork(workId) {
    const res = await this.request(`works/load/${workId}`);
    return res.work;
  };

  static async getLatestWorks() {
    const res = await this.request('works');
    return res.works;
  };
};

export default Api;