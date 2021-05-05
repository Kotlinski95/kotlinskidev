import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaAt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <CookieConsent
                enableDeclineButton
                flipButtons
                location="bottom"
                buttonText={language.footer.cookie_consent.buttonText}
                declineButtonText={language.footer.cookie_consent.declineButtonText}
                cookieName="Accept_cookies"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={1}
            >
                {language.footer.cookie_consent.first_text}{" "}
                <span style={{ fontSize: "15px" }}>{language.footer.cookie_consent.second_text}</span>
            </CookieConsent>
            <div className="footer-head">
                <ul>
                    <Link to="/services"><li className="line-item">{language.footer.pages.services}</li></Link>
                    <Link to="/contact"><li className="line-item">{language.footer.pages.contact}</li></Link>
                </ul>
            </div>
            <div className="footer-body">
                <ul className="line-item footer-left">
                    <li>{language.footer.privacy.rights}</li>
                    <Link to="/privacy"><li className="line-item">{language.footer.privacy.policy}</li></Link>
                </ul>
                <ul className="line-item footer-right">
                    <IconContext.Provider value={{ size: "2em", className: "social-icons" }}>
                        <li><a href="https://www.instagram.com/adriankotlinski/" target="_blank"><FaInstagram /></a></li>
                        <li><a href="https://www.facebook.com/adrian.kotlinski.9/" target="_blank"><FaFacebookSquare /></a></li>
                        <li><a href="https://www.linkedin.com/in/adriankotlinski/" target="_blank"><FaLinkedin /></a></li>
                        <li><a href="mailto:kotlinski95@gmail.com"><FaAt /></a></li>
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