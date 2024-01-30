import React, { useEffect } from 'react';
import particlesConfig from '../assets/particlesjs-config.json';
import './stylesComp/particlesBg.scss';

const PartiBg = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('particles-js', particlesConfig);
        } else {
            console.error('O Particles.js não está disponível no window.');
        }
    }, []);

    return <div id="particles-js"></div>;
};

export default PartiBg;
