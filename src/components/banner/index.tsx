import './index.scss';
import Marquee from 'react-css-marquee'
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {
    return (
        <React.Fragment>
            <Link to="/contact" title={`Link to contact`} aria-label={`Link to contact`} referrer-policy = 'no-referrer' rel='preload'>
            <div className="banner_wrapper">
                <Marquee
                    text={language.general.banner}
                    hoverStop={true}
                    spacing={0}
                    flip={true}
                />
            </div>
            </Link>
        </React.Fragment>
    );
};

export default Banner;