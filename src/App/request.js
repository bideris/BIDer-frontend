import { apiUrl } from "./api";
import axios from 'axios';


export default function makeRequest(url, data) {
    console.log(apiUrl + url);
    return axios.post(apiUrl + url, data).then(data => {
        if (data.status === 200)
            return data.data;
        alert("Server is down");
        return null;
    }).catch(err => {
        console.log(data);
        return null;
    });
}