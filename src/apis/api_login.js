import axios from "axios";

const ApiLogin = ({
  username,
  password
}) => {
  let data = JSON.stringify({
    "username": username,
    "password": password
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: process.env.REACT_APP_BASE_URL + '/mini-project/api/auth/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios.request(config);
}

export default ApiLogin;