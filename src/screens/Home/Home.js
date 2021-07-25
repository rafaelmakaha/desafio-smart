import React, { useEffect, useState } from 'react';
import { getGyms } from '../../services/api';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Subtitle from './components/Subtitle/Subtitle';
import { Content, Divider, Title, WrapperTitle } from './style';

const Home = () => {
    const [gyms, setGyms] = useState({});
    
    useEffect(() => {
        getGyms().then(setGyms)
    },[])
    return(
        <>
            <Header/>
            <Content>
                <WrapperTitle>
                    <Title>Reabertura <br/> Smart Fit</Title>
                    <Divider/>
                </WrapperTitle>
                <Subtitle />
            </Content>
            <Footer />
        </>
    )

}

export default Home;