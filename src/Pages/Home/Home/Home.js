import React from 'react';
import Categories from '../../Categories/Categories';
import Contact from '../../Contact/Contact';
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
            <Contact></Contact>
            
        </div>
    );
};

export default Home;