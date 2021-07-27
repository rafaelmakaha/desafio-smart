import React, { useEffect, useState } from 'react';
import { getGyms } from '../../services/api';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Subtitle from './components/Subtitle/Subtitle';
import { Container, Content, Divider, Text, Title, WrapperTitle } from './style';

const Home = () => {
    const [gyms, setGyms] = useState({});
    const [search, setSearch] = useState({});
    
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
                        <Text>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</Text>
                    </WrapperTitle>
                    <Content>
                        <Form/>
                        <Subtitle />
                    </Content>
                </Content>
            </Container>
            <Footer />
        </>
    )

}

export default Home;