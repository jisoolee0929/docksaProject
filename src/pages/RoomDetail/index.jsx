import axios from "axios";
import React, { useState } from "react";
import * as S from "./style";
import { Chat } from "components";

const RoomDetail = ({ id }) => {
    const [chats, setChats] = useState([]);

  const getRoomDetail = async () => {
    const response = await axios();
  };

  return <S.Container>
    <S.Contents>
        <S.Header>
            <S.HeaderLocation></S.HeaderLocation>
            <S.HeaderTime></S.HeaderTime>
            <S.HeaderMenu></S.HeaderMenu>
        </S.Header>
        <S.ChatContainer>
          <Chat></Chat>
            {/* {chats && chats.map((chat) => {
                
            })} */}

        </S.ChatContainer>
    </S.Contents>
  </S.Container>;
};

export default RoomDetail;
