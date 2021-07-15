import React from "react";
import {
    MainNavigationContainer,
    MainNavigationList,
    MainNavigationItem
} from '../../../styled-components/MainNavigation.styled';
import { StyledNavLink } from '../../../styled-components/Links';
import logo from '../../../assets/icons/myprofile.svg';
import CustomImage from '../../customImage'

function AboutMeNavigation(props) {

    const links = [
        { name: props.language.header.pages.carrier_front, path: "/aboutme/front-end-development" },
        { name: props.language.header.pages.carrier_plc, path: "/aboutme/plc-carrier" },
        { name: props.language.header.pages.courses, path: "/aboutme/courses" },
        { name: props.language.header.pages.education, path: "/aboutme/education" }
    ];

    const { click, handleClick } = props;

    return (
        <>
            <MainNavigationContainer onClick={handleClick} clicked={click}>
                <MainNavigationList clicked={click} className="main-navigation-list">
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <CustomImage src={logo} alt="Logo" width='80px' height='80px' title="Logo"></CustomImage>
                    </div>
                    {links.map((link, index) => (
                        <MainNavigationItem key={index}>
                            <StyledNavLink className="styled-nav cursor_hover" to={link.path} exact activeClassName="current" main="true" clicked={click ? "hack" : undefined}>
                                <span className="styled-nav--text">{link.name}</span>
                            </StyledNavLink>
                        </MainNavigationItem>
                    ))}
                </MainNavigationList>
            </MainNavigationContainer>
        </>
    );
}

export default AboutMeNavigation;