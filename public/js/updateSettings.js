import axios from 'axios';
import { showAlert } from './alert';

export const updateSettings = async (data, type) => {
  try {
    const url = `http://127.0.0.1:3000/api/v1/users/${
      type === 'password' ? 'updateMyPassword' : 'updateMe'
    }`;

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    console.log(res);
    if (res.data.stats === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
      window.location.reload(true);
    }
    //
  } catch (error) {
    console.log(error);
    // showAlert('error', error.data.response.message);
  }
};
