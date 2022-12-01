import {useState} from 'react';
import * as S from './style';
import logo from "../../assets/image/logo.png";
import { useNavigate } from 'react-router-dom';
import { registration } from 'apis/user';


const handleRegi = async () => {
    const result = await registration("111", "jisoo)92", "11111", "11111");
    console.log(result);
}

const Wait = () => {
    const navigate = useNavigate();
    return(
        <S.Container>
            <S.Contents>
                <S.Logo>
                    <img src={logo} alt = "로고"/>   
                </S.Logo>
                <S.ButtonWrapper>
                    <S.Button onClick = {()=> {navigate("/login")}}>로그인</S.Button>
                    <S.Button onClick = {()=> {navigate("/signin")}}>회원가입</S.Button>
                    <S.Button onClick = {handleRegi}>회원가입</S.Button>
                </S.ButtonWrapper>
            </S.Contents>

        </S.Container>

    )

}

export default Wait;