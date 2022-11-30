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
`;
// export const ContentsBody = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//     width: 88%;
//     height: 88vh;
//     background-color:#f5f5f5;
//     border-radius: 23px;
// `;

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

export const RoomGroup = styled.ul`
    display: flex;
    align-items: top;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 20px 0 0 0;
`;

export const RoomBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16vh;
    height: 16vh;
    background-color:#f5f5f5;
    border: solid black 3.5px;
    border-radius: 20px;
    cursor: pointer;
`;

export const ImageButton = styled.img`
    display: flex;
    padding: 0 0 5% 70%;
    background-color: rgba(237, 161, 57, 0);
    border: none;
    height: 90px; 
    cursor: pointer;
`;