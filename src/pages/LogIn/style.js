import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: "Mingijuk";
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #eda139;
`;

export const Title = styled.div`
  margin-top: 10%;
  font-size: 5rem;
  margin-bottom: 5%;
`;

export const Input = styled.input`
  border: none;
  font-size: 2rem;
  /* width: 80%;
height: 50%; */
  :focus {
    outline: none;
  }
  background-color: #f5f5f5;
`;
export const InputText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-right: 2rem;
`;
export const InputWarpper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem;
  background-color: #f5f5f5;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border-radius: 5rem;
  border: 1px solid #000000;
  background-color: #f5f5f5;
`;

export const Logo = styled.div`
  width: 100%;

  text-align: center;
  /* margin-top: 20%; */
  img {
    width: 30rem;
    height: 30rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 5rem;
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
