import React from "react";
import {
    MainNavigationContainerFooter,
    MainNavigationList,
    MainNavigationItem
} from '../../../styled-components/MainNavigation.styled';
import { StyledNavLink } from '../../../styled-components/Links';
import logo from '../../../assets/icons/myprofile.svg';

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
                <MainNavigationList clicked={click} className="main-navigation-list">
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={logo} alt="Logo" style={{width: '80px', heigth: '80px'}}></img>
                    </div>
                    {links.map((link, index) => (
                        <MainNavigationItem key={index}>
                            <StyledNavLink className="styled-nav cursor_hover" to={link.path} exact activeClassName="current" main="true" clicked={click ? "hack" : undefined}>
                            <span className="styled-nav--text">{link.name}</span>
                            </StyledNavLink>
                        </MainNavigationItem>
                    ))}
                </MainNavigationList>
            </MainNavigationContainerFooter>
        </>
    );
}

export default ServicesNavigation;