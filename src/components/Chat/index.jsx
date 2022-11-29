import * as S from './style'
import speech from '../../assets/image/speechbubble.png'
import giyuk from '../../assets/icon/giyuk.png'



const Chat = () => {
    const dummydata = {
        id:"123",
        name:"김민수",
        location: giyuk
    }

    return(
        <S.ChatContainer>
            <S.ChatContents>
                <S.ChatBubble src = {speech}></S.ChatBubble>
                <img src ={dummydata.location} alt = "채팅 이미지"></img>
            </S.ChatContents>
            <S.ChatFooter>

            </S.ChatFooter>
        </S.ChatContainer>
    )
}

export default Chat