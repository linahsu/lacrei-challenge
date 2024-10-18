import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        width: 90%;
        flex-direction: column;
    }
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 30%;
    color: #018762;
    font-weight: 600;
    font-size: 18px;

    @media (max-width: 768px) {
        margin-right: 20px;
        margin-top: 40px;
        width: 100%;
    }
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

    @media (max-width: 768px) {
        background-color: #018762;
        color: white;

        &:hover {
            background-color: #015D4D;
        }
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

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FooterTitle = styled.p`
    font-weight: bold;
    margin-bottom: 30px;
`;

export const FooterLink = styled.p`
    margin-top: 20px;
`;

export const HomeImage = styled.img`
    margin: auto;
    width: 50%;
`;

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    width: 50%;
`;

export const SecurityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
`;

export const SecurityImage = styled.img`
    width: 50%;
`;

export const SecurityButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 50px;
    height: 300px;
`;

export const Button = styled.button`
    background-color: white;
    border: 2px solid #018762;
    border-radius: 10px;
    color: #018762;
    font-weight: bold;
    padding: 10px;
    padding-left: 25px;
    padding-right: 25px;
    shadow: 0 0 20px #404040;

    &:hover {
        background-color: #015D4D;
        border: 2px solid #015D4D;
        color: white;
    }
`;