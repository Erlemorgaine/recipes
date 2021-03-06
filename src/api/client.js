import request from 'superagent'

export default class ApiClient {
  defaultOptions = {
    tokenStorageKey: 'recipeApiJWT'
  }

  constructor(host, options = {}) {
    this.host = host || 'http://localhost:3030'
    this.options = { ...this.defaultOptions, ...options }
  }

  authenticate(email, password) {
    return this.post('/sessions', { email, password })
  }

  signOut() {
    this.removeToken()
  }

  get(path) {
    return request
      .get(this.createUrl(path))
      .set(this.headers())
  }

  post(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .set(this.headers(), 'Content-Type', 'application/json')
      .send(data)
  }

  put(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  patch(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  delete(path) {
    request
       .del(this.createUrl(path))
       .set(this.headers())
  }

  headers() {
    let headers = {
      Accept: 'application/json',
    }

    if (this.isAuthenticated()) {
      headers.Authorization = `Bearer ${this.getToken()}`
    }

    return headers
  }

  isAuthenticated() {
    return !!this.getToken()
  }

  // Create a full URL to our API, including the host and path
  createUrl(path) {
    return [this.host, path].join('/')
  }

  getToken() {
    return localStorage.getItem(this.options.tokenStorageKey)
  }

  storeToken(token) {
    localStorage.setItem(this.options.tokenStorageKey, token)
  }


  // createUrl(path) {
  //   return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`
  //     .replace(/\/\//g, '/')
  // }
}
