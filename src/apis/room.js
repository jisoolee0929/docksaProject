import { BASE } from "config/BASE";
import { axios } from "axios";
import { GET_ROOM } from "constants/API_URL";

export const getRoomList = async () => {
  const data = axios({
    method: "GET",
    url: BASE,
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
    method: "GET",
    url: BASE + id,
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
