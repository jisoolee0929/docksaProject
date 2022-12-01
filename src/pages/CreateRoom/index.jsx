import React, { Link, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MmsRoundedIcon from "@mui/icons-material/MmsRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

const CreateRoom = () => {
  const navigate = useNavigate();

  const [selection, setSelection] = useState([]);

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelection({
      ...selection,
      value,
    });
  };

  return (
    <S.Page>
      <S.Contents>
        <S.ContentsBody>
          <S.Title1>고독한 방장이군..</S.Title1>

          <S.Category>
            <S.Title2>먹을 장소</S.Title2>
            <S.Group>
              <S.Box>
                <S.Image
                  value={0}
                  name = "place"
                  src={require("../../assets/image/jenghoo.png")}
                  style={{ width: "70%", height: "70%" }}
                  onClick={() => handleSelect()}
                />
              </S.Box>
              <S.Box>
                <S.Image
                  value={1}
                  name = "place"
                  src={require("../../assets/image/chamsal.png")}
                  style={{ width: "70%", height: "70%" }}
                  onClick={() => handleSelect()}
                />
              </S.Box>
              <S.Box>
                <S.Image
                  value={2}
                  name = "place"
                  src={require("../../assets/image/jeongmoon.png")}
                  style={{ width: "70%", height: "70%" }}
                  onClick={() => handleSelect()}
                />
              </S.Box>
            </S.Group>
          </S.Category>
          <S.Category>
            <S.Title2>먹을 시간</S.Title2>
            <S.Group>
              <S.Box>
                <S.Image
                  value={0}
                  name = "time"
                  src={require("../../assets/image/1200.png")}
                  style={{ width: "130%", height: "50%" }}
                  onClick={handleSelect}
                />
              </S.Box>
              <S.Box>
                <S.Image
                  value={1}
                  name = "time"
                  src={require("../../assets/image/1230.png")}
                  style={{ width: "130%", height: "50%" }}
                  onClick={handleSelect}
                />
              </S.Box>
            </S.Group>
          </S.Category>
          <S.Category>
            <S.Title2>먹을 음식</S.Title2>
            <S.Group>
              <S.Box>
                <S.Image
                  value={0}
                  name = "foodImage"
                  src={require("../../assets/image/korean.png")}
                  style={{ width: "90%", height: "40%" }}
                  onClick={handleSelect}
                />
              </S.Box>
              <S.Box>
                <S.Image
                  value={1}
                  name = "foodImage"
                  src={require("../../assets/image/italian.png")}
                  style={{ width: "90%", height: "40%" }}
                  onClick={handleSelect}
                />
              </S.Box>
              <S.Box>
                <S.Image
                  value={2}
                  name = "foodImage"
                  src={require("../../assets/image/sushi.png")}
                  style={{ width: "80%", height: "50%" }}
                  onClick={handleSelect}
                />
              </S.Box>
              <S.Box>
                <S.Image
                  value={3}
                  name = "foodImage"
                  src={require("../../assets/image/bibimbap.png")}
                  style={{ width: "80%", height: "50%" }}
                  onClick={handleSelect}
                />
              </S.Box>
            </S.Group>
          </S.Category>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <S.ButtonWrapper>
              <S.Button>방 만들기</S.Button>
            </S.ButtonWrapper>
          </div>
        </S.ContentsBody>
        <S.NavBar>
          <S.NavBarButton onClick={() => navigate("/main")}>
            <HomeRoundedIcon style={{ color: "#f5f5f5" }} />
          </S.NavBarButton>
          <S.NavBarButton onClick={() => navigate("/chats")}>
            <MmsRoundedIcon style={{ color: "#f5f5f5" }} />
          </S.NavBarButton>
          <S.NavBarButton onClick={() => navigate("/mypage")}>
            <AccountBoxRoundedIcon style={{ color: "#f5f5f5" }} />
          </S.NavBarButton>
        </S.NavBar>
      </S.Contents>
    </S.Page>
  );
};

export default CreateRoom;
