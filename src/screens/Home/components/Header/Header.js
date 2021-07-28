import React from 'react';
import { Container, HeaderBottom, SmartLogo } from './style';

const Header = () => {
    return (
        <>
            <Container>
                <SmartLogo/>
            </Container>
            <HeaderBottom/>
        </>
    );
};

export default Header;