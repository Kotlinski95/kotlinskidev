import React from "react";
import {
    MainNavigationContainer,
    MainNavigationList,
    MainNavigationItem
} from '../../../styled-components/MainNavigation.styled';
import { StyledNavLink } from '../../../styled-components/Links';

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
                <MainNavigationList clicked={click}>
                    {links.map((link, index) => (
                        <MainNavigationItem key={index}>
                            <StyledNavLink className="cursor_hover" to={link.path} exact activeClassName="current" main="true" clicked={click ? "hack" : undefined}>
                                {link.name}
                            </StyledNavLink>
                        </MainNavigationItem>
                    ))}
                </MainNavigationList>
            </MainNavigationContainer>
        </>
    );
}

export default AboutMeNavigation;