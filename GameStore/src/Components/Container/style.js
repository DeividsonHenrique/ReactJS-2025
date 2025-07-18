import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-block: 2rem;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: 90%;
  box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.1);
`;
