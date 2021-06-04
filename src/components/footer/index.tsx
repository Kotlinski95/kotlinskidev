import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaAt, FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Footer = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className="footer-wrapper">
            <CookieConsent
                enableDeclineButton
                flipButtons
                location="bottom"
                buttonText={language.footer.cookie_consent.buttonText}
                declineButtonText={language.footer.cookie_consent.declineButtonText}
                cookieName="Accept_cookies"
                style={{ background: "#2B373B", paddingRight: '120px' }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={1}
            >
                {language.footer.cookie_consent.first_text}{" "}
                <span style={{ fontSize: "15px" }}>{language.footer.cookie_consent.second_text}</span>
            </CookieConsent>
            <div className="footer-head">
                <ul>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <li className="line-item">
                        {language.footer.pages.services}
                    </li>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem className="menuItem" onClick={handleClose}><Link to="/services/web-development">{language.footer.pages.web}</Link></MenuItem>
                        <MenuItem className="menuItem" onClick={handleClose}><Link to="/services/shopify">{language.footer.pages.shopify}</Link></MenuItem>
                        <MenuItem className="menuItem" onClick={handleClose}><Link to="/services/PLC">{language.footer.pages.plc}</Link></MenuItem>
                    </Menu>
                    <Link to="/contact"><li className="line-item">{language.footer.pages.contact}</li></Link>
                </ul>
            </div>
            <div className="footer-body">
                <ul className="line-item footer-left">
                    <li>@{new Date().getFullYear()} {language.footer.privacy.rights}</li>
                    <Link to="/privacy"><li className="line-item">{language.footer.privacy.policy}</li></Link>
                    <Link to="/cookies"><li className="line-item">{language.footer.privacy.cookies}</li></Link>
                </ul>
                <ul className="line-item footer-right">
                    <IconContext.Provider value={{ size: "2em", className: "social-icons" }}>
                        <li><a href="https://github.com/Kotlinski95/" target="_blank" title="github"><FaGithub /></a></li>
                        <li><a href="https://www.instagram.com/adriankotlinski/" target="_blank" title="instagram"><FaInstagram /></a></li>
                        <li><a href="https://www.facebook.com/adrian.kotlinski.9/" target="_blank" title="facebook"><FaFacebookSquare /></a></li>
                        <li><a href="https://www.linkedin.com/in/adriankotlinski/" target="_blank" title="linkedin"><FaLinkedin /></a></li>
                        <li><a href="mailto:kotlinski95@gmail.com" title="mail"><FaAt /></a></li>
                    </IconContext.Provider>
                </ul>
            </div>
            <div className="messenger-wrapper">
                <MessengerCustomerChat
                    pageId="103180541943288"
                    appId="490872805660284"
                />
            </div>
        </div>

    );
};
export default Footer;