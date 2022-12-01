import React, {Link, useState, useEffect} from "react"
import axios from 'axios'
import * as S from "./style"
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MmsRoundedIcon from '@mui/icons-material/MmsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ProgressBar from "../../components/progressBar/progressBar";
import { getMyPage } from "apis/user";

const MyPage = () => {
    const navigate = useNavigate();
    // const [myroom, setMyroom] = useState(0);
    // const [value, setValue] = useState(100);
    const [userInfo, setUserInfo] = useState()
    
    
    const [godokValue, setGodokValue] = useState(80);
    //약속 개수 카운트해서 godokValue에 반영.
    const handleGodokValue = (e) =>{
      // const {value} = e.target;
      // setGodokValue({
      //   ...godokValue, value
      // })
  };
  useEffect(() => {
    getMyPage().then((res) => {
      console.log(res);

      setUserInfo(res.data);
    });
  },[]);
    
    return (
    <S.Page>
    <S.Contents>
        <S.ContentsBody>
            <img src={require("../../assets/img/nyam.png")} style={{height: "200px"}}></img>
            <S.Title2>기본 정보</S.Title2>
            <div style = {{display:"flex", flexDirection:"column", fontSize:"2rem"}}>
                <div>이메일 : {userInfo?.email}</div>
                <div>닉네임 : {userInfo?.username}</div>
            </div>
            <S.Title2>고독지수</S.Title2>
            {/* <input
              type="range"
              min={0} max={1} color="gray" step={0.02}
              onChange={(e) => {
                setValue(e.target.value);
              }} /> */}

            {/* <S.SliderOut src={require("../../assets/image/rectangle.png")}>
            </S.SliderOut> */}

            {/* <progress value="20" max="100"></progress> */}
            

            <ProgressBar bgcolor="#EDA139" completed={godokValue}></ProgressBar>

            
            
            {/* <S.RoomGroup>

            </S.RoomGroup> */}
        </S.ContentsBody>
        <S.NavBar>
                <S.NavBarButton onClick={() => navigate("/main")} >
                    <HomeRoundedIcon style ={{color: "#f5f5f5"}}/>
                </S.NavBarButton>
                <S.NavBarButton onClick={() => navigate("/chats")}>
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