import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding: 25px 150px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--white);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 300px;
  }
`;

export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      border: 1px solid var(--gray);
      border-radius: 20px;
      padding: 10px;
      transition: 0.3s ease-in-out;

      span {
        font-size: 1.2rem;
        font-weight: 300;
      }

      &:hover {
        background-color: var(--gray);
        cursor: pointer;
      }
    }
  }
`;
