import React, { useEffect, useState } from 'react';
import { getGyms } from '../../services/api';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Subtitle from './components/Subtitle/Subtitle';
import { Container, Content, Divider, Title, WrapperTitle } from './style';

const Home = () => {
    const [gyms, setGyms] = useState({});
    
    useEffect(() => {
        getGyms().then(setGyms)
    },[])
    return(
        <>
            <Header/>
            <Container>
                <Content>
                    <WrapperTitle>
                        <Title>Reabertura <br/> Smart Fit</Title>
                        <Divider/>
                    </WrapperTitle>
                    <Content>
                        <Subtitle />
                    </Content>
                </Content>
            </Container>
            <Footer />
        </>
    )

}

export default Home;