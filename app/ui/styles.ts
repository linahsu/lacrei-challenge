import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 30%;
    color: #018762;
    font-weight: 600;
    font-size: 18px;
`;

export const HeaderLink = styled.a`
    background-color: white;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    padding-left: 25px;
    padding-right: 25px;

    &:hover {
        background-color: #EBF2F9;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid #B2DFD0;
    width: 80%;
    margin: auto;
    margin-top: 50px;
    padding-top: 50px;
`;

export const FooterTitle = styled.p`
    font-weight: bold;
    margin-bottom: 30px;
`;

export const FooterLink = styled.p`
    margin-top: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
`;

export const Button = styled.button`
    background-color: #018762;
    border-radius: 10px;
    color: white;
    padding: 10px;
    padding-left: 25px;
    padding-right: 25px;
    shadow: 0 0 20px #404040;

    &:hover {
        background-color: #015D4D;
        transform: scale(1.1);
    }
`;