import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    width: 350px;
    height: 250px;
    margin: 1rem;
    cursor: pointer;
    border-radius: 10px;
    padding: 0.2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 1);
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 200px;
    background: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
`;

export const Subtitle = styled.div`
    width: 100%;
`;

export const Price = styled.div`
    width: 100%;


    span {
        font-size: 1.1rem;
        color: #ff7e00;
        font-weight: 600;
        padding-right: 1rem;
    }
`;