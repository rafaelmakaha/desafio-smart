import React, { useEffect, useState } from 'react';
import { getGyms } from '../../services/api';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Home = () => {
    const [gyms, setGyms] = useState({});
    
    useEffect(() => {
        getGyms().then(setGyms)
    },[])
    return(
        <>
            <Header/>
            <Footer />
        </>
    )

}

export default Home;