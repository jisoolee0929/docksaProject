import styled from "styled-components";

export const Page = styled.div`
  position: relative;
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
  background-color: #eda139;
  padding-top: 4.5vh;
`;

export const ContentsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-items: center;
  width: 100%;
  height: 85vh;
  background-color: white;
  margin-top: 2.5vh;
  overflow-y: scroll;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: "Mingijuk";
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 8vh;
  background-color: #eda139;
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

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  height: 10%;
`;

export const HeaderTime = styled.div``;

export const HeaderLocation = styled.div``;

export const HeaderMenu = styled.div``;

export const ChatContainer = styled.div``;

export const Title = styled.div`
  margin-top: 10%;
  font-size: 5rem;
  margin-bottom: 5%;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5rem;
  width: 15rem;
  height: 6rem;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const ChatHeader = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  z-index: 1;

  /* height: 100%; */
  background-color: #eda139;
`;

export const ChatListButton = styled.div`
  width: 20rem;
  height: 6rem;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
  margin-left: 20%;
  margin-right: 20%;

  background-color: #fad8b0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
`;

export const ImageListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 1px;
  background-color: #fad8b0;
  width: 100%;
  height: 40rem;
`;

export const ImageButton = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LetterListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10rem 10rem 10rem 10rem;
  column-gap: 1px;

  background-color: #fad8b0;
  width: 100%;
  height: 50rem;
`;

export const LetterButton = styled.div`
  width: 7rem;
  height: 7rem;
  margin: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
