import axios from "axios";
import React, { useState } from "react";
import * as S from "./style";
import { Chat } from "components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MmsRoundedIcon from '@mui/icons-material/MmsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { useNavigate } from "react-router-dom";

const RoomDetail = ({ id }) => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);

  const getRoomDetail = async () => {
    const response = await axios();
  };
  const dummyList = [
    {
      id: 1,
      mine: true,
    },
    {
      id: 2,
      mine: false,
    },
    {
      id: 3,
      mine: false,
    },

  ]

  return (

    <S.Page>
    <S.Contents>
      <S.ContentsBody>
        {dummyList.map((element, index) => (
          <Chat mine={element.mine} id = {element.id} key = {index}/>
        ))}
      </S.ContentsBody>
        <S.NavBar>
                <S.NavBarButton onClick={() => navigate("/main")} >
                    <HomeRoundedIcon style ={{color: "#f5f5f5"}}/>
                </S.NavBarButton>
                <S.NavBarButton onClick={() => navigate("/chats")}>
                    <MmsRoundedIcon style ={{color: "#f5f5f5"}}/>
                </S.NavBarButton>
                <S.NavBarButton onClick={() => navigate("/mypage")}>
                    <AccountBoxRoundedIcon style ={{color: "#f5f5f5"}}/>
                </S.NavBarButton>
        </S.NavBar>
    </S.Contents>
    </S.Page>
  );
};

export default RoomDetail;
