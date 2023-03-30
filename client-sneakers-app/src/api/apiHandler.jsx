import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_LOCAL_URL,
  withCredentials: false, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    console.log(error.response)
    return error.response
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(url, userInfo) {
    return service
      .post(url, userInfo)
      .then((res) => {
        return res.data
      })
      .catch(errorHandler);
  },

  login(url, userInfo) {
    return service
      .post(url, userInfo)
      .then((res) => {
        console.log('res: ', res)
        return res.data
      })
      .catch(errorHandler);
  },

  // isLoggedIn() {
  //   return service
  //     .get("/api/auth/isLoggedIn")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  // logout() {
  //   return service
  //     .get("/api/auth/logout")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  // getItems() {
  //   return service
  //     .get("/api/items")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  getAll(endPoint) {
    console.log(endPoint)
    return service
      .get(endPoint)
      .then((res) => {
        console.log('res: ', res)
        return res.data
      })
      .catch(errorHandler);
  },

  createOne(endPoint, data) {
    console.log('apihandler', data)
    return service
      .post(endPoint, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOne(endPoint) {
    return service
      .get(endPoint)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  updateOne(endPoint, data) {
    console.log('api handler');
    console.log(endPoint);
    console.log(data);
    return service
      .patch(endPoint, data)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  deleteOne(endPoint) {
    return service
      .delete(endPoint)
      .then((res) => res.data)
      .catch(errorHandler)
  },


  // Admin
  // adminCreateOne(endPoint, data) {
  //   console.log('apihandler', data)
  //   const localInfo = localStorage.getItem('user');
  //   const { token } = JSON.parse(localInfo);
  //   return service
  //     .post(endPoint, data, {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }})
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  adminCreateOne(endPoint, data, headers) {
    console.log('apihandler', data)
    console.log('headers: ', headers)
    return service
      .post(endPoint, data, headers)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  adminGetAll(endPoint, headers) {
    console.log('apihandler')
    console.log('headers: ', headers)
    return service
      .get(endPoint, headers)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  adminGetOne(endPoint, headers) {
    console.log('apihandler')
    console.log('headers: ', headers)
    return service
      .get(endPoint, headers)
      .then((res) => res.data)
      .catch(errorHandler);
  },


  adminDeleteOne(endPoint, headers) {
    return service
      .delete(endPoint, headers)
      .then((res) => res.data)
      .catch(errorHandler)
  },
}

