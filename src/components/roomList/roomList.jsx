import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../../pages/Main/style.js";
import { useNavigate } from "react-router-dom";
import { getRoomListAPI } from "apis/room";

function RoomList() {
  const [rooms, setRooms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const goRoom = (id) => {
    navigate(`${"/room/" + id}`);
  };

  const getRoomList = async () => {
    const response = await getRoomListAPI();
    const time  = new Date (response.data.time);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const timeString = hour + "시 " + minute + "분";
    response.data.time = timeString;
    setRooms(response.data);
  };

  const [dummyRoomList, setDummyRoomList] = useState([
    { id: 1, when: "11:30 am", where: "정후" },
    { id: 2, when: "13:00 pm", where: "애기능" },
  ]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setRooms(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        const response = getRoomList();
        // const response = await axios.get(
        //   'https://ec2-18-181-255-9.ap-northeast-1.compute.amazonaws.com:8000/8/'
        // );
        setRooms(response.data); // 데이터는 response.data 안에 들어있다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchRooms();
  }, []);

  if (loading) return <div>로딩중..</div>;

  if(rooms) return (
    <div>
      <S.RoomGroup>
        {rooms.map((room) => (
          <S.RoomBox onClick={() => goRoom(room.id)}>
            <div>{room?.time}</div>
            <div stlye={{ display: "flex", flexDirection: "row" }}>
              <S.RoomImage>
                <img src={room.foodImage.image} alt="푸드"></img>
              </S.RoomImage>
              <S.RoomImage>
                <img src={room.place.image} alt="장소"></img>
              </S.RoomImage>
            </div>
          </S.RoomBox>
        ))}
      </S.RoomGroup>
    </div>
  );
}

export default RoomList;
