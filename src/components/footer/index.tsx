import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="footer-head" data-scroll>
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
                        <MenuItem data-scroll className="menuItem" onClick={handleClose}><Link to="/services/web-development">{language.footer.pages.web}</Link></MenuItem>
                        <MenuItem data-scroll className="menuItem" onClick={handleClose}><Link to="/services/shopify">{language.footer.pages.shopify}</Link></MenuItem>
                        <MenuItem data-scroll className="menuItem" onClick={handleClose}><Link to="/services/PLC">{language.footer.pages.plc}</Link></MenuItem>
                    </Menu>
                    <Link to="/contact"><li className="line-item">{language.footer.pages.contact}</li></Link>
                </ul>
            </div>
            <div className="footer-body" data-scroll>
                <ul className="line-item footer-left">
                    <li>@{new Date().getFullYear()} {language.footer.privacy.rights}</li>
                    <Link data-scroll to="/privacy"><li className="line-item">{language.footer.privacy.policy}</li></Link>
                    <Link data-scroll to="/cookies"><li className="line-item">{language.footer.privacy.cookies}</li></Link>
                </ul>
                <ul className="line-item footer-right">
                    <IconContext.Provider value={{ size: "2em", className: "social-icons" }}>
                        <li><a href="https://github.com/Kotlinski95/" data-scroll target="_blank" title="github"><FaGithub /></a></li>
                        <li><a href="https://www.instagram.com/adriankotlinski/" data-scroll target="_blank" title="instagram"><FaInstagram /></a></li>
                        <li><a href="https://www.facebook.com/adrian.kotlinski.9/" data-scroll target="_blank" title="facebook"><FaFacebookSquare /></a></li>
                        <li><a href="https://www.linkedin.com/in/adriankotlinski/" data-scroll target="_blank" title="linkedin"><FaLinkedin /></a></li>
                        <li><a href="mailto:kotlinski95@gmail.com" data-scroll title="mail"><FaAt /></a></li>
                    </IconContext.Provider>
                </ul>
            </div>
            <div className="messenger-wrapper" data-scroll>
                <MessengerCustomerChat
                    pageId="103180541943288"
                    appId="490872805660284"
                />
            </div>
        </div>

    );
};
export default Footer;