import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Chat } from "components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MmsRoundedIcon from "@mui/icons-material/MmsRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import { useNavigate } from "react-router-dom";
import { getRoomDetail } from "apis/room";
import { useParams } from "react-router-dom";
import loginImg from "../../assets/image/loginImg.png";
import giyuk from "../../assets/icon/giyuk.png";
import { Img_list } from "constants/Img_list";
import { Snake_list } from "constants/Snake_list";
import { RightChat } from "components";

const RoomDetail = ({ id }) => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const params = useParams();
  const [isImageOpen, setIsImageOpen] = useState(true);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isbarOpen, setIsbarOpen] = useState(false);

  const getRoomData = async () => {
    const response = await getRoomDetail(params);
    console.log(response);
    setChats(response.data.comment);
  };

  useEffect(() => {
    getRoomData();
  }, []);

  const handleOpen = () => {
    setIsImageOpen(!isImageOpen);
    setIsLetterOpen(!isLetterOpen);
  };

  const handlebarOpen = () => {
    setIsbarOpen(!isbarOpen);
  };

  const handleImgPost = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const newChat = {
      id: id,
      name: name,
      image: {
        image: Snake_list[id-1].img,
      }
    }
    setChats([...chats, newChat]);
  };
  const handleLetterPost = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const newChat = {
      id: id,
      name: name,
      image: {
        image: Img_list[id-1].img,
      }
    }
    setChats([...chats, newChat]);
  };

  return (
    <S.Page>
      <S.Contents>
        <S.Header></S.Header>
        <S.ContentsBody onClick={handlebarOpen}>
          {chats.map((chat, index) => {
            return <Chat key={chat.id + index* 100 } image={chat.image.image} name = {chat.name} id = {chat.id}/>;
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
