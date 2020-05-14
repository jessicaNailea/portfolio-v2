// Group the axios calls and export its methods
// In the future, if we want to change the library, this is the
// only single place we have to modify.
// Te rest of the app will not be affected

import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    (error.response.status >= 400) & (error.response.status < 500);

  if (!expectedError) {
    alert("An unexpected error ocurred");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
