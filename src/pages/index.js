import React from 'react';

import Footer from '../footer';
import Header from '../components/index/header';
import Largenav from '../components/index/largenav';

import '../components/index/index.scss';

export default () => {
    return (
        <div className="index">
            <Header />
            <Largenav />
            <Footer />
        </div>
    )
};
