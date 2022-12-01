import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Chat } from "components";
import { useNavigate } from "react-router-dom";
import { getRoomDetail } from "apis/room";
import { useParams } from "react-router-dom";
import loginImg from "../../assets/image/loginImg.png";
import giyuk from "../../assets/icon/giyuk.png";
import { Img_list } from "constants/Img_list";
import { Snake_list } from "constants/Snake_list";
import { RightChat } from "components";
import { postComment } from "apis/comment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import twelve from "assets/image/먹을시간_12시.png";
import chamsal from "assets/image/먹을장소_참살.png";
import italian from "assets/image/italian.png";
import { getMyPage } from "apis/user";


const RoomDetail = ({ id }) => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const params = useParams();
  const [isImageOpen, setIsImageOpen] = useState(true);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isbarOpen, setIsbarOpen] = useState(false);
  const [chatNum, setChatNum] = useState(0);
  const [userInfo, setUserInfo] = useState()
  const [roomInfo, setRoomInfo] = useState()
  console.log("params", params);
  console.log(roomInfo);

  const getRoomData = async () => {

    const response = await getRoomDetail(params.id);
    console.log(response);
    setRoomInfo(response.data);

    setChats(response.data.comment);
    setChatNum(response.data.comment.length);
  };

  useEffect(() => {
    getRoomData();
    getMyPage().then((res) => {
      console.log(res);
      setUserInfo(res.data);
    });
  }, []);
    console.log("roominfo", roomInfo);

  const handleOpen = () => {
    setIsImageOpen(!isImageOpen);
    setIsLetterOpen(!isLetterOpen);
  };

  const handlebarOpen = () => {
    setIsbarOpen(!isbarOpen);
  };

  const handleImgPost = async (e) => {
    const id = e.target.id;
    const newChat = {
      // id: id,
      user: userInfo?.username,
      room: roomInfo.room.id,
      commentImage: Img_list[id - 1].pk
    };
    const newChat2 = {
      id: id,
      user: userInfo?.username,
      room: roomInfo.room.id,
      image: {
        id:id,
        image: Img_list[id - 1].img,
      },
    };
    setChats([...chats, newChat2]);
    setChatNum(chatNum + 1);
    try {
      const response = await postComment(params.id, chatNum + 1, newChat);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const handleLetterPost = async (e) => {
    const id = e.target.id;
    const newChat = {
      // id: id,
      user: userInfo?.username,
      room: roomInfo.room.id,
      commentImage: Img_list[id - 1].pk
    };
    const newChat2 = {
      id: id,
      user: userInfo?.username,
      room: roomInfo.room.id,
      image: {
        id:id,
        image: Img_list[id - 1].img,
      },
    };
    setChats([...chats, newChat2]);
    setChatNum(chatNum + 1);
    try {
      const response = await postComment(params.id, chatNum + 1, newChat);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(roomInfo?.room?.foodImgae?.image)

  return (
    <S.Page>
      <S.Contents>
        <S.Header>
          <S.HeaderButton>
            <ArrowBackIosIcon
              onClick={() => {
                navigate(-1);
              }}
            />
          </S.HeaderButton>
          <S.HeaderTime>
            <img src = {twelve} alt ="시간" ></img>
          </S.HeaderTime>
          <S.HeaderLocation>
            <img src = {roomInfo?.room?.place?.image } alt ="장소" ></img>
          </S.HeaderLocation>
          <S.HeaderMenu>
            <img src = {roomInfo?.room?.foodImage?.image } alt ="메뉴" ></img>
          </S.HeaderMenu>
        </S.Header>
        <S.ContentsBody onClick={handlebarOpen}>
          {chats.map((chat, index) => {
            return (
              <Chat
                key={chat.id + index * 100}
                image={chat.image.image}
                name={chat.name}
                id={chat.id}
              />
            );
          })}
        </S.ContentsBody>
      </S.Contents>
      <S.ChatHeader>
        <S.ButtonContainer>
          <S.ChatListButton onClick={handleOpen}>
            <img src={loginImg} alt="동물" />
          </S.ChatListButton>
          <S.ChatListButton onClick={handleOpen}>
            <img src={giyuk} alt="초성" />
          </S.ChatListButton>
        </S.ButtonContainer>
        {isImageOpen && isbarOpen && (
          <div style={{ width: "100%", height: "20rem", overflowY: "scroll" }}>
            <S.ImageListContainer>
              {Snake_list.map((img) => {
                return (
                  <S.ImageButton onClick={handleImgPost} id={img.id}>
                    <img src={img.img} alt="img" />
                  </S.ImageButton>
                );
              })}
            </S.ImageListContainer>
          </div>
        )}
        {isLetterOpen && isbarOpen && (
          <div style={{ width: "100%", height: "20rem", overflowY: "scroll" }}>
            <S.LetterListContainer>
              {Img_list.map((img) => {
                return (
                  <S.LetterButton onClick={handleLetterPost} id={img.id}>
                    <img src={img.img} alt="lettter" />
                  </S.LetterButton>
                );
              })}
            </S.LetterListContainer>
          </div>
        )}
      </S.ChatHeader>
      <S.ChatContainer></S.ChatContainer>
    </S.Page>
  );
};

export default RoomDetail;
