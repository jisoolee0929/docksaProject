import axios from 'axios';
import {BASE} from "config/BASE";


export const registration = async ({username,email,password1,password2}) => {
    const data = await axios({
        method: "post",
        url: BASE + "/registration/",
        data: {
            username: "test1",
            email:"jisoolee@gmail.com",
            password1:"12341234!",
            password2:"12341234!",
        }
    });
    return data;
}



export const getRoom =async (rooNum, token, data1) => {
    const data = await axios({
        method: "post",
        url: BASE + rooNum,
        headers: {
            Authorization: `Berar ${token}`
        },
        data: data1
    });
    return data;
}
