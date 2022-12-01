import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    overflow: hidden;
`;

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    background-color: #EDA139;
    padding-top: 4.5vh;
`;

export const ContentsBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 85vh;
    background-color:#f5f5f5;
    margin-top: 2.5vh;
    overflow; scroll;
`;

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 8vh;
    background-color: #EDA139;
    cursor: pointer;
`;

export const NavBarButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    cursor: pointer;
`;

export const Category = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: space-around;
    width: 90%;
    margin: 0;
    padding: 0;
`;

export const Group = styled.ul`
    display: flex;
    align-items: top;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 18px 0 0 0;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    width: 16vh;
    height: 16vh;
    cursor: pointer;
`;

export const Image = styled.img`
    display: relative;
    padding: 0;
    background-color: rgba(237, 161, 57, 0);
    border: none;
    height: 90px; 
`;

export const Title1 = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7%;
    font-size: 2.5rem;
    margin-bottom: 6%;
`;

export const Title2 = styled.h3`
    display: flex;
    align-items: start;
    justify-content: start;
    font-size: 1.5rem;
    margin: 0;
    padding: 0 0 0 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 10% 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5rem;
  width: 10rem;
  height: 5rem;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;
