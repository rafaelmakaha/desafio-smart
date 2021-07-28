import React, { useEffect, useState } from 'react';
import { getGyms } from '../../services/api';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import GymCard from './components/GymCard/GymCard';
import Header from './components/Header/Header';
import Subtitle from './components/Subtitle/Subtitle';
import { Container, Content, Divider, Text, Title, WrapperCards, WrapperTitle } from './style';

const Home = () => {
    const [gyms, setGyms] = useState([]);
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
                        <WrapperCards>
                            {
                                gyms?.map((gym) => (
                                    <GymCard gym={gym} key={gym.id}/>
                                ))
                            }
                        </WrapperCards>
                    </Content>
                </Content>
            </Container>
            <Footer />
        </>
    )

}

export default Home;