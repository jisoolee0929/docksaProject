import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #eda139;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 20%;
  img {
    width: 35rem;
    height: 35rem;
  }
`;

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 5rem;`;

export const Button = styled.button`
border: none;
border-radius: 5rem;
width: 30rem;
height: 8rem;
font-size: 2rem;
font-weight: bold;
margin-bottom: 1rem;
cursor: pointer;
`;