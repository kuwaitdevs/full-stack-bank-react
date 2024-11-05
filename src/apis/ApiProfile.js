import axios from "axios";

const ApiProfile = () => {
    const token = localStorage.getItem("token");

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.REACT_APP_BASE_URL + '/mini-project/api/auth/me',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
    };

    return axios.request(config);
}

export default ApiProfile;