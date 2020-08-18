import React from 'react';

import {ReactComponent as LogoImg} from '../../assets/images/logo.svg';

function Landing() {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <LogoImg/>
                </div>
            </div>
        </div>
    )
}

export default Landing;