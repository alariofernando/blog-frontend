import React from 'react';

import './styles.css';
import PageHeader from '../../components/pageHeader';
import PostItem from '../../components/postItem';

function Landing() {
    return(
        <div id="page-landing" className="container">
            <PageHeader/>
            <main>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </main>
        </div>
    )
}

export default Landing;