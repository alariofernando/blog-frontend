import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as LogoImg} from '../../assets/images/logo.svg';
import './styles.css';

function PageHeader() {
    return (
        <header className="page-header">
            <div className="logo-container">
                <Link to="/">
                    <LogoImg/>
                </Link>
            </div>
        </header>
    )
}

export default PageHeader;