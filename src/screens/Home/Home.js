import React, { useEffect, useState } from 'react';
import { compareSchedule } from 'utils';
import { getGyms } from '../../services/api';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import GymCard from './components/GymCard/GymCard';
import Header from './components/Header/Header';
import Subtitle from './components/Subtitle/Subtitle';
import { Container, Content, Divider, Text, Title, WrapperCards, WrapperTitle } from './style';
import moment from 'moment';

const defaultSearch = { schedule: { start: '', end: '' } }
const selectedPeriod = {
    'manha': {start: moment('06:00','hh:mm'), end: moment('12:00','hh:mm')},
    'tarde': {start: moment('12:01','hh:mm'), end: moment('18:00','hh:mm')},
    'noite': {start: moment('18:01','hh:mm'), end: moment('23:00','hh:mm')},
}

const Home = () => {
    const [gyms, setGyms] = useState([]);
    const [search, setSearch] = useState([]);
    const [options, setOptions] = useState(defaultSearch);
    const [showClosed, setShowClosed] = useState(false);

    const handleSchedule = (event) => {
        setOptions(prev => ({...prev, period: event.target.value, schedule: selectedPeriod[event.target.value]}))
    }

    const handleSearch = () => {
        if (options.schedule.start === '') return setSearch([])
        let aux = gyms.filter((gym) => (
            gym.schedules?.some(schedule => compareSchedule(options.schedule, schedule))
        ))
        aux = aux.filter(gym => showClosed ? true : gym.opened )
        setSearch(aux);
    }

    const handleClosed = (event) => {
        setShowClosed(event.target.checked)
    }

    const handleClear = () => {
        setOptions(defaultSearch)
        setShowClosed(false)
        setSearch([])
    }
    
    useEffect(() => {
        if(gyms.length === 0)
            getGyms()
                .then(setGyms)
        handleSearch()
    },[gyms])
    
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
                        <Form 
                            gymCount={search.length}
                            period={options.period}
                            handleSchedule={handleSchedule}
                            search={handleSearch}
                            clear={handleClear}
                            closed={showClosed}
                            handleClosed={handleClosed}
                        />
                        <Subtitle />
                        <WrapperCards>
                            {
                                search?.map((gym) => (
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