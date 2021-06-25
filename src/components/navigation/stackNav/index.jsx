import React from "react";
import {
    MainNavigationContainer,
    MainNavigationList,
    MainNavigationItem
} from '../../../styled-components/MainNavigation.styled';
import { StyledNavLink } from '../../../styled-components/Links';

function StackNavigation(props) {

    const links = [
        { name: props.language.header.pages.software_enginner, path: "/stack/front-end-developer" },
        { name: props.language.header.pages.automation_enginner, path: "/stack/automation-engineer" },
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

export default StackNavigation;