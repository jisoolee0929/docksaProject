import React , {useState, useEffect} from 'react';
import axios from 'axios'
import * as S from "../../pages/Main/style.js"
import { useNavigate } from "react-router-dom";
import { getRoomList } from "apis/room";

function RoomList() {
  const [rooms, setRooms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const goRoom = (id) => {
    navigate(`${'/room/' + id}`);
  };

  const getRoomList = async () => {
    const response = await axios();
  };


  const [dummyRoomList, setDummyRoomList] = useState([
    {id: 1, time: '11:30 am', place: '정후'},
    {id: 2, time: '13:00 pm', place: '애기능'},
  ]);


  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setRooms(null);
        // loading 상태를 true 로 바꾼다.
        setLoading(true);
        
        // const response = await axios.get(
        //   'https://ec2-18-181-255-9.ap-northeast-1.compute.amazonaws.com:8000/8/'
        // );
        setRooms(getRoomList().data); // 데이터는 response.data 안에 들어있다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchRooms();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) 
  return <div><S.RoomGroup>{dummyRoomList.map((room) => (
              <S.RoomBox onClick={() => goRoom(room.id)}>
                  <div>{room.time}</div>
                  <div>{room.place}</div>
              </S.RoomBox>
            ))
        }</S.RoomGroup></div>;
  if (!rooms) return <div>생성된 방이 없어요</div>;
  return (
    <S.RoomBox>
      {rooms.map(room => (
        <li onClick={() => goRoom(room.id)}>
          <div>{room.time}</div>
          <div>{room.place}</div>
        </li>
      ))}
    </S.RoomBox>

    // <ul>
    //   {rooms.map(room => (
    //     <li key={room.id}>
    //       {room.where} ({room.when})
    //     </li>
    //   ))}
    // </ul>
  );
}

export default RoomList;