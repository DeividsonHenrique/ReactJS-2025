import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  background-color: var(--blue);
  line-height: 25px;
  border: none;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  padding: 12px 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
