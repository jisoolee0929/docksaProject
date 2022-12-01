import { BASE } from "config/BASE";
import axios  from "axios";
import { GET_ROOM } from "constants/API_URL";

// const token  = 
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNDEwOTMxLCJpYXQiOjE2Njk4MDYxMzEsImp0aSI6IjA3YmRlYzY3Yzk0NjQzODhhZTI1MDFlMTFiZGE4OGJhIiwidXNlcl9pZCI6MTJ9.s7R-iVisOSk_iZ6of1flSGHqArKzr4tZDpoitxX3_Xc"
const token = localStorage.getItem("token");

export const getRoomList = async () => {
  const data = axios({
    method: "get",
    url: BASE,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return data;
};

export const postRoom = async (roomdata) => {
  const data = axios({
    method: "POST",
    url: BASE,
    data: roomdata,
  });
  return data;
};

export const getRoomDetail = async (id) => {
  const data = axios({
    method: "get",
    url: BASE  + id + "/",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return data;
};

export const postRoomDetail = async (id, roomdata) => {
  const data = axios({
    method: "POST",
    url: BASE + id,
    data: roomdata,
  });
  return data;
};

export const putRoomDetail = async (id, roomdata) => {
  const data = axios({
    method: "PUT",
    url: BASE + id,
    data: roomdata,
  });
  return data;
};

export const deleteRoomDetail = async (id) => {
  const data = axios({
    method: "DELETE",
    url: BASE + id,
  });
  return data;
};
