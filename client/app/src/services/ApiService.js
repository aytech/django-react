import Cookies from 'universal-cookie/lib'

class ApiService {
  apiBase = '/api';
  authPath = '/auth/';
  userRetrievePath = '/users/retrieve/';
  cookies = new Cookies()

  async getResource(url, data) {
    const resource = await fetch(`${ this.apiBase }${ url }`, data);
    const response = await resource.json();
    response.status = resource.status;
    return response;
  }

  login = async (username, password) => {
    const data = {
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': this.cookies.get('csrftoken')
      },
      method: 'POST',
      mode: 'cors'
    };
    return this.getResource(this.authPath, data)
  }

  getUser = async (token) => {
    const data = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      method: 'GET',
      mode: 'cors'
    }
    return this.getResource(this.userRetrievePath, data)
  }
}

export default ApiService