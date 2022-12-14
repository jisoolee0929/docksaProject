import React, {Link, useState, useEffect} from "react"
import * as S from "./style"
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MmsRoundedIcon from '@mui/icons-material/MmsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import RoomList from "../../components/roomList/roomList";
import { getRoomListAPI } from "apis/room";

const Main = () => {
    const [roomList, setRoomList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getRoomListAPI().then((res) => {
            console.log(res);
            setRoomList(res.data);
        });

    },[])

    // const goRoom = (id) => {
    //   // navigate('/post');
    //   navigate(`${'/room/' + id}`);
    // };

    // const [roomList, setRoomList] = useState([
    //   {id: 1, when: '11:30 am', where: '정후'},
    //   {id: 2, when: '13:00 pm', where: '애기능'},
    // ]);
    
    return (
    <S.Page>
    <S.Contents>
        <S.ContentsBody>
            <S.RoomGroup>
                <RoomList></RoomList>
                {/* {roomList.map((element) => (
                    <S.RoomBox onClick={() => goRoom(element.id)}>
                        <div>{element.when}</div>
                        <div>{element.where}</div>
                    </S.RoomBox>
                ))
                } */}
            </S.RoomGroup>
            <S.ImageButtonWrapper>
                <S.ImageButton onClick={() => navigate("/create")}>
                    <img src={require("../../assets/img/logo.png")} style ={{height: "100px", paddingBottom: "10%"}}/>
                </S.ImageButton>
            </S.ImageButtonWrapper> 
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


export default Main