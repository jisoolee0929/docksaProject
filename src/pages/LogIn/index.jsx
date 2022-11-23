import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import { KAKAO_REST_API_KEY } from "../../apis/user";

// localStorage에 유저 토큰이있으면 HOME으로 navigate
// 토큰이 없으면 로그인 Input을 보여준다.

const LogIn = () => {
  const [userAccount, setUserAccount] = useState({
    id: "",
    password: "",
  });

  // 카카오톡 로그인 버튼 클릭 시, 카카오 로그인 페이지로 이동
  // 로그인을 통해 받은 토큰값을 Rest api에 전달해서 아이디, 비밀번호 값을 받음
  // 받은 아이디, 비밀번호 값을 localStorage에 저장

  const logInWithKakao = () => {
    window.location.href = KAKAO_REST_API_KEY;    
  };

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventdefault();
    // api로 인증하는 작업
    // 인증이 성공하면 localStorage에 토큰을 저장하고 HOME으로 navigate
    // 인증이 실패하면 alert를 띄워준다.
    const token = "";
    if (token) {
      localStorage.setItem("token", token);
      navigate("/home");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <S.Container>
      <S.Form>
        <S.Input
          placeholder="아이디"
          onChange={(e) =>
            setUserAccount({ ...userAccount, id: e.target.value })
          }
        />
        <S.Input
          placeholder="비밀번호"
          onChange={(e) =>
            setUserAccount({ ...userAccount, password: e.target.value })
          }
        />
        <S.Button onClick={handleLogin}>로그인</S.Button>
        <S.Button onClick={() => navigate("/signin")}>회원가입</S.Button>
        {/* <S.Button onClick={logInWithKakao}>카카오 로그인</S.Button> */}
      </S.Form>
    </S.Container>
  );
};

export default LogIn;
