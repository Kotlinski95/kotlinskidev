import React from "react";
import {
    MainNavigationContainerFooter,
    MainNavigationList,
    MainNavigationItem
} from '../../../styled-components/MainNavigation.styled';
import { StyledNavLink } from '../../../styled-components/Links';

function ServicesNavigation(props) {

    const links = [
        { name: props.language.footer.pages.web, path: "/services/web-development" },
        { name: props.language.footer.pages.shopify, path: "/services/shopify" },
        { name: props.language.footer.pages.plc, path: "/services/PLC" }
    ];

    const { click, handleClick } = props;

    return (
        <>
            <MainNavigationContainerFooter onClick={handleClick} clicked={click}>
                <MainNavigationList clicked={click}>
                    {links.map((link, index) => (
                        <MainNavigationItem key={index}>
                            <StyledNavLink className="cursor_hover" to={link.path} exact activeClassName="current" main="true" clicked={click ? "hack" : undefined}>
                                {link.name}
                            </StyledNavLink>
                        </MainNavigationItem>
                    ))}
                </MainNavigationList>
            </MainNavigationContainerFooter>
        </>
    );
}

export default ServicesNavigation;