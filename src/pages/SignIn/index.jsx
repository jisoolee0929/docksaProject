import React, { useState } from "react";
import * as S from "./style";
import signinImage from "../../assets/image/signinImg.png";

const SignIn = () => {
  const [userAccount, setUserAccount] = useState({
    nickName: "",
    id: "",
    password: "",
  });
  const handleSignIn = (e) => {
    e.preventdefault();
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
                setUserAccount({ ...userAccount, nickName: e.target.value });
              }}
            />
          </S.InputWarpper>
          
          <S.InputWarpper>
            <S.InputText>고독한 아이디:</S.InputText>
            <S.Input
              placeholder="아이디"
              onChange={(e) => {
                setUserAccount({ ...userAccount, id: e.target.value });
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
        </S.Form>
        <S.ButtonWrapper>
          <S.Button onClick={handleSignIn}>회원가입</S.Button>
        </S.ButtonWrapper>
      </S.Contents>
    </S.Container>
  );
};

export default SignIn;
