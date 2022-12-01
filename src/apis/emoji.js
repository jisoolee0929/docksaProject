import { BASE } from "config/BASE";
import { axios } from "axios";

export const postEmoji = async ({roomid, commentid, emojidata}) => {
    const data = axios({
        method: "POST",
        url: BASE + roomid + commentid ,
        data: emojidata
    });
    return data;
}