import React from "react";
import {
    MainNavigationContainer,
    MainNavigationList,
    MainNavigationItem
} from '../../../styled-components/MainNavigation.styled';
import { StyledNavLink } from '../../../styled-components/Links';
import logo from '../../../assets/icons/myprofile.svg';
import CustomImage from '../../customImage'

function StackNavigation(props) {

    const links = [
        { name: props.language.header.pages.software_enginner, path: "/stack/front-end-developer" },
        { name: props.language.header.pages.automation_enginner, path: "/stack/automation-engineer" },
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

export default StackNavigation;