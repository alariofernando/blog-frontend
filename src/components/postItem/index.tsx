import React from 'react';

import './styles.css';

function PostItem() {
    return (
        <article className='post-item'>
            <header>
                <strong>Titulo do post</strong>
            </header>
            <p>
                Essa é uma breve descrição do post
            </p>
        </article>
    )
}

export default PostItem