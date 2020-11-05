import Cookies from 'universal-cookie/lib'

class ApiService {
  apiBase = '/api';
  authPath = '/auth/';
  cookies = new Cookies()

  async getResource(url, data) {
    const resource = await fetch(`${this.apiBase}${url}`, data);
    const response = await resource.json();
    response.status = resource.status;
    return response;
  }

  login = async (user) => {
    const data = {
      body: JSON.stringify(user),
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRFToken': this.cookies.get('csrftoken')
      },
      method: 'POST',
      mode: 'cors'
    };
    const request = await fetch(`${this.authPath}`, data)
    const response = await request.json()
    response.status = request.status
    return response
  }
}

export default ApiService