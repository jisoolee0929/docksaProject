import React, {Link, useState} from "react"
import * as S from "./style"
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MmsRoundedIcon from '@mui/icons-material/MmsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';


const MyPage = () => {
    const navigate = useNavigate();
    const createRoom = () => {
      navigate('/write');
    };

    const goRoom = (id) => {
      navigate(`${'/post/' + id}`);
    };

    const [value, setValue] = useState(100);
    
    return (
    <S.Page>
    <S.Contents>
        <S.ContentsBody>
            <img src={require("../../assets/img/nyam.png")} style={{height: "200px"}}></img>
            <S.Title>고독지수</S.Title>
            <input
              type="range"
              min={0} max={1} color="gray" step={0.02}
              onChange={(e) => {
                setValue(e.target.value);
              }} />
            {/* 
            <S.SliderOut>
              <S.SliderIn>
              </S.SliderIn>
            </S.SliderOut> */}

            <S.Title>안 고독한 식사 목록</S.Title>
            <S.RoomGroup>참여했던 독사방 목록 나열...</S.RoomGroup>
        </S.ContentsBody>
        <S.NavBar>
                <S.NavBarButton onClick={() => navigate("/main")} >
                    <HomeRoundedIcon style ={{color: "#f5f5f5"}}/>
                </S.NavBarButton>
                <S.NavBarButton onClick={() => navigate("/chatList")}>
                    <MmsRoundedIcon style ={{color: "#f5f5f5"}}/>
                </S.NavBarButton>
                <S.NavBarButton onClick={() => navigate("/myPage")}>
                    <AccountBoxRoundedIcon style ={{color: "#f5f5f5"}}/>
                </S.NavBarButton>
        </S.NavBar>
    </S.Contents>
    </S.Page>
    );
};


export default MyPage