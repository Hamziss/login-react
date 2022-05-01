import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL_signup = 'http://localhost:5000/api/signup'
const API_URL_login = 'http://localhost:5000/api/signin'
//service for signup
const register = async (userData) => {
    const response = await axios.post(API_URL_signup, userData).catch((err) => { toast.error(err.response.data) })

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))

    }
    return response.data
}


//service for login
const login = async (userData, loged) => {

    const response = await axios.post(API_URL_login, userData).catch((err) => { toast.error(err.response.data) })

    if (response.data && loged) {
        localStorage.setItem('user', JSON.stringify(response.data))

    }
    return response.data
}
//service for logout
const logout = () => {
    localStorage.removeItem("user")
}
const authService = {
    register,
    login,
    logout
}
export default authService