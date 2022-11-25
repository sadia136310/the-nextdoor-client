import React from 'react';
import Categories from '../../Categories/Categories';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Section></Section>
        </div>
    );
};

export default Home;