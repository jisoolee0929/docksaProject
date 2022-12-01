import { BASE } from "config/BASE";
import axios from "axios";

const token = localStorage.getItem("token");

export const postComment = async (roomid, commentid, commentdata) => {
  const data = await axios({
    method: "post",
    url: BASE + roomid + "/" + commentid + "/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: commentdata,
  });
  return data;
};

export const deleteComment = async ({ roomid, commentid }) => {
  const data = axios({
    method: "DELETE",
    url: BASE + roomid + commentid,
  });
  return data;
};
