import React from 'react';

import './styles.css';
import PageHeader from '../../components/pageHeader';

function Landing() {
    return(
        <div id="page-landing">
            <PageHeader/>
            <div id="page-landing-content" className="container">
                <article className='post-item'>
                    <header>
                        <strong>Titulo do post</strong>
                        <span>Subtitulo do post hahaha</span>
                    </header>
                    <p>
                        Essa é uma breve descrição do post
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Landing;