import React from 'react';

import Footer from '../footer';
import Header from './index/header';
import Largenav from './index/largenav';

import './index/index.scss';

export default () => {
    return (
        <>
            <Header />
            <Largenav />
            <Footer />
        </>
    )
};
