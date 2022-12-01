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
  background-color: #eda139;
  padding-top: 4.5vh;
`;

export const ContentsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 85vh;
  background-color: #f5f5f5;
  margin-top: 2.5vh;
  margin-bottom: 0;
  padding: 0;
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

export const RoomGroup = styled.ul`
  display: flex;
  align-items: top;
  justify-content: space-around;
  width: 100%;
  height: 80%;
  margin: 0;
  padding: 20px 0 0 0;
`;

export const RoomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18vh;
  height: 18vh;
  background-color: #f5f5f5;
  border: solid black 3.5px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 15px;
`;

export const ImageButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  background-color: rgba(237, 161, 57, 0);
  border: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const ImageButton = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 0;
  background-color: rgba(237, 161, 57, 0);
  border: none;
  cursor: pointer;
`;

export const RoomImage = styled.div`
  width: 5rem;
  img {
    width: 100%;
  }
`;
