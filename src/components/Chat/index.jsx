import * as S from "./style";
import speech from "../../assets/image/speechbubble.png";
import giyuk from "../../assets/icon/giyuk.png";

const Chat = ({ mine, id }) => {
  const dummydata = {
    id: "123",
    name: "김민수",
    location: giyuk,
  };

  return (
    <S.ChatContainer>
      <S.ChatContents>
        <S.Chatbubble>
          <img src={speech} alt="채팅버블"></img>
        </S.Chatbubble>
        <S.ChatImg>
          <img src={dummydata.location} alt="채팅 이미지"></img>
        </S.ChatImg>
      </S.ChatContents>
      <S.ChatFooter></S.ChatFooter>
    </S.ChatContainer>
  );
};

export default Chat;
