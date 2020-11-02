class ApiService {
  apiBase = '/api';
  authPath = '/auth/';

  async getResource(url, data) {
    const resource = await fetch(`${this.apiBase}${url}`, data);
    const response = await resource.json();
    response.status = resource.status;
    return response;
  }

  login = async (user) => {
    const data = {
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      mode: 'cors'
    };
    return await fetch(`${this.authPath}`, data)
  }
}

export default ApiService