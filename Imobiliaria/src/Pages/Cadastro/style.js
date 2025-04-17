import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 1.875rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

export const ContainerForm = styled.div`
  padding: 35px;
  width: 400px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
`;
