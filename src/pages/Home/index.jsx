import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Front';

const Home = () =>

    <React.Fragment>
        <Navbar />
        <section className="hero is-fullheight is-danger is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Home </h1>
                    <h2 className="subtitle">Your welcome Or You're welcome</h2>
                </div>
            </div>
        </section>
        <Footer />
    </React.Fragment>

export default Home