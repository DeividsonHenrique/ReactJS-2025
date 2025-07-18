import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 300px;
    margin: 1rem;
    
`;

export const Image = styled.div`
    width: 100%;
    height: 200px;
    background: url('https://picfiles.alphacoders.com/444/thumb-1920-444480.jpg');
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