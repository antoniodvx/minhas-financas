import React from 'react';
import LogoImg from '../../assets/logo.svg';
import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink } from './styles';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogImg src={LogoImg} alt="Logo Minhas Finanças" />
                <Title>Minhas Finanças</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowDownward />
                    Saidas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;