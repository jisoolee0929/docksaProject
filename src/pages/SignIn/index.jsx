import React, { useState } from "react";
import * as S from "./style";

const SignIn = () => {
  const [userAccount, setUserAccount] = useState({
    id: "",
    password: "",
  });
  const handleSignIn = (e) => {
    e.preventdefault();
  };

  return (
    <S.Container>
      <S.Form>
        <S.Input
          placeholder="아이디"
          onChange={(e) => {
            setUserAccount({ ...userAccount, id: e.target.value });
          }}
        />
        <S.Input
          placeholder="비밀번호"
          onChange={(e) => {
            setUserAccount({ ...userAccount, password: e.target.value });
          }}
        />
        <S.Button onClick={handleSignIn}>회원가입</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
