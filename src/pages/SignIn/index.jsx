import React, { useState } from "react";
import * as S from "./style";
import signinImage from "../../assets/image/signinImg.png";
import { registration } from "apis/user";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userAccount, setUserAccount] = useState({
    usermame: "",
    email: "",
    password1: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async(e) => {
    // e.preventdefault();
    try{
      const response = await registration(userAccount);
      console.log(response);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      navigate("/main");
    }catch(e){
      console.log(e);
    }
  };

  return (
    <S.Container>
      <S.Contents>
        <S.Title>밥 먹으로 가자</S.Title>
        <S.Logo>
          <img src={signinImage} alt="loginImg" />
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
                setUserAccount({ ...userAccount, password1: e.target.value });
              }}
            />
          </S.InputWarpper>
        </S.Form>
        <S.ButtonWrapper>
          <S.Button onClick={handleSignIn}>회원가입</S.Button>
        </S.ButtonWrapper>
      </S.Contents>
    </S.Container>
  );
};

export default SignIn;
