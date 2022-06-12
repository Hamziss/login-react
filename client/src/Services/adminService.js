import axios from "axios"
import { toast } from "react-toastify";

const API_URL_addadmin = "/api/admin/add"



export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": JSON.parse(localStorage.getItem("user")),
        },
    };

    return headers;
};




const addAdmin = async (data) => {
    const response = await axios.post(API_URL_addadmin, data, setHeaders())
        .catch((err) => { console.log(err.response.data) })

    if (response && response != undefined) { console.log(response) }
}

const adminService = {
    addAdmin
}
export default adminService