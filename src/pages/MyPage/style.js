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
    width: 74%;
    height: 100%;
    padding-top:20px;
    background-color: lightgray;
`;

export const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 8vh;
`;

// export const SliderOut = styled.h3`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 84%;
//     height: 8vh;
//     background-color: white;
//     overflow: hidden;
// `;

// export const SliderIn = styled.h3`
//     display: flex;
//     align-items: start;
//     justify-content: start;
//     width: 50%;
//     height: 8vh;
//     background-color: lightgray;
// `;