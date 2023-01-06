import React from 'react';

const getCurrentYear = () => {
    return new Date().getFullYear()
}

const Footer = () => {
    return <footer>
        <p>CopyRight {getCurrentYear()}</p>
    </footer>
}

export default Footer