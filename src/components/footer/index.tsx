import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaAt, FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Button from '@material-ui/core/Button';
import ServicesNavigation from '../navigation/servicesNav';
import { useState } from 'react'

const Footer = () => {


    return (
        <div className="footer-wrapper">
            <div className="footer-head" data-scroll>
                <ul>
                    <Link to="/services"><li className="line-item">{language.footer.pages.services}</li></Link>
                    <Link to="/contact"><li className="line-item">{language.footer.pages.contact}</li></Link>
                </ul>
            </div>
            <div className="footer-body" data-scroll>
                <ul className="line-item footer-left">
                    <li>@{new Date().getFullYear()} {language.footer.privacy.rights}</li>
                    <Link to="/privacy"><li className="line-item">{language.footer.privacy.policy}</li></Link>
                    <Link to="/cookies"><li className="line-item">{language.footer.privacy.cookies}</li></Link>
                </ul>
                <ul className="line-item footer-right cursor_hover">
                    <IconContext.Provider value={{ size: "2em", className: "social-icons" }}>
                        <li><a href="https://github.com/Kotlinski95/" target="_blank" title="github" className="cursor_hover"><FaGithub /></a></li>
                        <li><a href="https://www.instagram.com/adriankotlinski/" target="_blank" title="instagram" className="cursor_hover"><FaInstagram /></a></li>
                        <li><a href="https://www.facebook.com/adrian.kotlinski.9/" target="_blank" title="facebook" className="cursor_hover"><FaFacebookSquare /></a></li>
                        <li><a href="https://www.linkedin.com/in/adriankotlinski/" target="_blank" title="linkedin" className="cursor_hover"><FaLinkedin /></a></li>
                        <li><a href="mailto:kotlinski95@gmail.com" title="mail" className="cursor_hover"><FaAt /></a></li>
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