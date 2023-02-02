import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  //   alert(password);
  const baseUrl = 'http://127.0.0.1:3000';
  const api = '/api/v1';

  try {
    const res = await axios({
      method: 'POST',
      url: `${baseUrl}${api}/users/login`,
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in Successfully');
      console.log(res);

      // window.setTimeout(() => {
      //   location.assign('/');
      // }, 1500);
    }
  } catch (error) {
    console.log(error);
    showAlert('error', error.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      // url: `${baseUrl}${api}/users/logout`,
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });

    if (res.data.status === 'success') {
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
      location.reload(true);
    }
  } catch (error) {
    console.log(error);
    showAlert('error', 'Error Loging out! try again');
  }
};
