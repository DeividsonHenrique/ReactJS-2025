import styled from "styled-components";

export const Header = styled.header`
    background: url('https://images.alphacoders.com/829/thumb-1920-829955.jpg');
    background-size: cover;
    background-position: center 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 300px;
    color: #fff;
    box-shadow: 0px 2px 2 px rgba(0, 0, 0, 0.25);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 1);
        background-color: rgba(0, 0, 0, 0.2);
    }
`;


export const Menu = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    background-color: #0C1117;
    box-shadow: 0px 2px 2 px rgba(0, 0, 0, 0.25);

    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        
        color: #fff;
    }

    li {
        cursor: pointer;
    }
`;