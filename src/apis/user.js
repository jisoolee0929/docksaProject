import axios from 'axios';
import {BASE} from "config/BASE";


export const registration = async ({username,email,password1}) => {
    const data = await axios({
        method: "post",
        url: BASE + "/registration/",
        data: {
            username: username,
            email:email,
            password1:password1,
            password2:password1,
        }
    });
    return data;
}

export const login = async ({username,email, password}) => {
    const data = await axios({
        method: "post",
        url: BASE + "/login/",
        data: {
            username: username,
            email:email,
            password:password,
        }
    });
    return data;
}

export const getMyPage = async () => {
    const token = localStorage.getItem("token");
    const data = await axios({
        method: "get",
        url: BASE + "mypage/",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return data;
}

