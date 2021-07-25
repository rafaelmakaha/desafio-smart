import React from 'react';
import { Container, FooterContent, FooterTop, SmartLogo, Text } from './style';

const Footer = () => {

    return (
        <Container>
            <FooterTop />
            <FooterContent>
                <SmartLogo />
                <Text>Todos os direitos reservados - 2020</Text>
            </FooterContent>
        </Container>
    );
}

export default Footer;