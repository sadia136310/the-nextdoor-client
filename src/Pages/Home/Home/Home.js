import React from 'react';
import Categories from '../../Categories/Categories';
import Sale from '../../Sale/Sale';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Section></Section>
            <Sale></Sale>
            
        </div>
    );
};

export default Home;