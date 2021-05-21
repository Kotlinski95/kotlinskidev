import CategoryCollection from '../../tile'
import aboutme from '../../../assets/aboutme.svg';
import projects from '../../../assets/projects.svg';
import stack from '../../../assets/stack.svg';
import services from '../../../assets/services.svg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const CategoriesComponent = () => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    const items = [
        {
            url: "/aboutme",
            title: `${language.pages.home.categories.about}`,
            logo: aboutme,
            width: "90%",
            height: "70%"
        },
        {
            url: "/projects",
            title: `${language.pages.home.categories.projects}`,
            logo: projects,
            width: "90%",
            height: "70%"
        },
        {
            url: "/stack",
            title: `${language.pages.home.categories.stack}`,
            logo: stack,
            width: "90%",
            height: "70%"
        },
        {
            url: "/services",
            title: `${language.pages.home.categories.services}`,
            logo: services,
            width: "90%",
            height: "70%"
        }
    ];
    let [slides, setSlides] = useState(1);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const location = useLocation();
    React.useEffect(() => {
        setWindowDimensions(getWindowDimensions());
        if (windowDimensions.width > 768) {
            setSlides(3);
        }
        else{
            setSlides(1);
        }
      }, [location]);
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
            if (windowDimensions.width > 768) {
                setSlides(3);
            }
            else{
                setSlides(1);
            }
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('change', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('change', handleResize);
        }
    }, []);
    let settings = {
        autoplay: false,
        slickPlay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        pauseOnFocus: true,
        slidesToShow: slides,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <div className="categories-wrapper" style={{ height: '100%', position: 'relative' }}>
            <h1>{language.pages.home.categories.header}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', position: 'relative' }}>
                <Slider {...settings}>
                    {items.map((item, i) => (
                        <CategoryCollection key={i} url={item.url} title={item.title} logo={item.logo} width={item.width} height={item.height}>
                        </CategoryCollection>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default CategoriesComponent;