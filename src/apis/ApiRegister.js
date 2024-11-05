import axios from "axios";

const ApiRegister = ({
    username,
    password,
    image
}) => {
    let data = JSON.stringify({
        "username": username,
        "password": password,
        image
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.REACT_APP_BASE_URL + '/mini-project/api/auth/register',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios.request(config);
}

export default ApiRegister;