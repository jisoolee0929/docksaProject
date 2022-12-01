import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import loginImg from "../../assets/image/loginImg.png";
import {login} from "apis/user";

// localStorage에 유저 토큰이있으면 HOME으로 navigate
// 토큰이 없으면 로그인 Input을 보여준다.

const LogIn = () => {
  const [userAccount, setUserAccount] = useState({
    usermame: "",
    email: "",
    password: "",
  });

  // 카카오톡 로그인 버튼 클릭 시, 카카오 로그인 페이지로 이동
  // 로그인을 통해 받은 토큰값을 Rest api에 전달해서 아이디, 비밀번호 값을 받음
  // 받은 아이디, 비밀번호 값을 localStorage에 저장

  // const logInWithKakao = () => {
  //   window.location.href = KAKAO_REST_API_KEY;
  // };

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    // api로 인증하는 작업
    // 인증이 성공하면 localStorage에 토큰을 저장하고 HOME으로 navigate
    // 인증이 실패하면 alert를 띄워준다.
    try {
      const response = await login(userAccount);
      console.log(response);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      navigate("/main");

    }
    catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Container>
      <S.Contents>
        <S.Title>밥 먹으로 가자</S.Title>
        <S.Logo>
          <img src={loginImg} alt="loginImg" />
        </S.Logo>
        <S.Form>
          <S.InputWarpper>
            <S.InputText>고독한 닉네임:</S.InputText>
            <S.Input
              placeholder="닉네임"
              onChange={(e) => {
                setUserAccount({ ...userAccount, username: e.target.value });
              }}
            />
          </S.InputWarpper>

          <S.InputWarpper>
            <S.InputText>고독한 아이디:</S.InputText>
            <S.Input
              placeholder="이메일"
              onChange={(e) => {
                setUserAccount({ ...userAccount, email: e.target.value });
              }}
            />
          </S.InputWarpper>
          <S.InputWarpper>
            <S.InputText>고독한 비밀번호:</S.InputText>
            <S.Input
              placeholder="비밀번호"
              onChange={(e) => {
                setUserAccount({ ...userAccount, password: e.target.value });
              }}
            />
          </S.InputWarpper>
          {/* <S.Button onClick={logInWithKakao}>카카오 로그인</S.Button> */}
        </S.Form>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <S.ButtonWrapper>
            <S.Button onClick={handleLogin}>로그인</S.Button>
            <S.Button onClick={() => navigate("/signin")}>회원가입</S.Button>
          </S.ButtonWrapper>
        </div>
      </S.Contents>
    </S.Container>
  );
};

export default LogIn;
