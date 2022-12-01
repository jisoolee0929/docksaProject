import * as S from "./style";
import speech from "../../assets/image/speechbubble.png";
import giyuk from "../../assets/icon/giyuk.png";
import speech2 from "assets/image/말풍선_왼_누끼.png";

const Chat = ({ image,name,id }) => {

  return (
    <S.ChatContainer>
      <S.ChatContents>
        <S.Chatbubble>
          <img src={speech} alt="채팅버블"></img>
        </S.Chatbubble>
        <S.ChatImg>
          <img src={image} alt="채팅 이미지"></img>
        </S.ChatImg>
      </S.ChatContents>
      <S.ChatFooter></S.ChatFooter>
    </S.ChatContainer>
  );
};

export default Chat;
