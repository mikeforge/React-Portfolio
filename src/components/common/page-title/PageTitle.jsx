import React from 'react';

import './PageTitle.css';

const PageTitle = (props) => {
    const {title} = props;
    return (
        <section className='title'>
            {title}
        </section>
    )
}


export default PageTitle;