import { BASE } from "config/BASE";
import { axios } from "axios";


export const postComment = async ({roomid, commentdata}) => {
    const data = axios({
        method: "POST",
        url: BASE + roomid,
        data: commentdata,
    });
    return data;
}

export const deleteComment = async ({roomid, commentid}) => {
    const data = axios({
        method: "DELETE",
        url: BASE + roomid + commentid,
    });
    return data;
}