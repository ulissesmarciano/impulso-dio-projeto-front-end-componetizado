import styled from "styled-components";

export const Wrapper = styled.div`
  color: #ddd;
  margin-top: 25px;
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }
  a {
    font-size: 18px;
    color: rgb(221, 120, 48);
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  border: 3px solid rgb(95, 221, 253);
  box-shadow: 0px 0px 4px 4px rgba(95, 21, 253, 0.616);
`;