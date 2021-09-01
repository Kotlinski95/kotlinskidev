import './index.scss';
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaAt, FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { handleTrackingEvent } from '../../analytics';
import Loader from '../loader';
import CustomLink from '../customLink';
const MessengerCustomerChat = React.lazy(() => import('react-messenger-customer-chat'));

const Footer = () => {
    return (
        <React.Fragment>
        <div className="footer-wrapper">
            <div className="footer-head">
                <ul>
                    <li><Link to="/services" title={`Link to services`} aria-label={`Link to services`} referrer-policy='no-referrer' rel='preload'><span className="line-item list-item">{language.footer.pages.services}</span></Link></li>
                    <li><Link to="/contact" title={`Link to contact form`} aria-label={`Link to contact form`} referrer-policy='no-referrer' rel='preload'><span className="line-item list-item">{language.footer.pages.contact}</span></Link></li>
                </ul>
            </div>
            <div className="footer-body">
                <ul className="line-item footer-left">
                    <li><span>@{new Date().getFullYear()} {language.footer.privacy.rights}</span></li>
                    <li><Link to="/privacy" title={`Link to privacy policy`} aria-label={`Link to privacy policy`} referrer-policy='no-referrer' rel='preload'><span className="line-item list-item">{language.footer.privacy.policy}</span></Link></li>
                    <li><Link to="/cookies" title={`Link to cookies`} aria-label={`Link to cookies`} referrer-policy='no-referrer' rel='preload'><span className="line-item list-item">{language.footer.privacy.cookies}</span></Link></li>
                </ul>
                <ul className="line-item footer-right cursor_hover">
                    <li>
                        <IconContext.Provider value={{ size: "2em", className: "social-icons" }}>
                            <span className='list-item'><CustomLink href="https://github.com/Kotlinski95/" target="_blank" rel="nofollow noopener noreferrer" title="github" className="cursor_hover" onClick={() => {
                                handleTrackingEvent("Github", "Github clicked", { page: `${_store.getState().pageState.page}` });
                            }}><FaGithub /></CustomLink></span>
                            <span className='list-item'><CustomLink href="https://www.instagram.com/adriankotlinski/" target="_blank" rel="nofollow noopener noreferrer" title="instagram" className="cursor_hover" onClick={() => {
                                handleTrackingEvent("Instagram", "Instagram clicked", { page: `${_store.getState().pageState.page}` });
                            }}><FaInstagram /></CustomLink></span>
                            <span className='list-item'><CustomLink href="https://www.facebook.com/adrian.kotlinski.9/" target="_blank" rel="nofollow noopener noreferrer" title="facebook" className="cursor_hover" onClick={() => {
                                handleTrackingEvent("Facebook", "Facebook clicked", { page: `${_store.getState().pageState.page}` });
                            }}><FaFacebookSquare /></CustomLink></span>
                            <span className='list-item'><CustomLink href="https://www.linkedin.com/in/adriankotlinski/" target="_blank" rel="nofollow noopener noreferrer" title="linkedin" className="cursor_hover" onClick={() => {
                                handleTrackingEvent("Linkedin", "Linkedin clicked", { page: `${_store.getState().pageState.page}` });
                            }}><FaLinkedin /></CustomLink></span>
                            <span className='list-item'><CustomLink href="mailto:kotlinski95@gmail.com" title="mail" className="cursor_hover" onClick={() => {
                                handleTrackingEvent("Email", "Mail clicked", { page: `${_store.getState().pageState.page}` });
                            }}><FaAt /></CustomLink></span>
                        </IconContext.Provider>
                    </li>
                </ul>
            </div>
            <div className="messenger-wrapper">
                <Suspense fallback={<Loader />}>
                    <MessengerCustomerChat
                        pageId="103180541943288"
                        appId="490872805660284"
                    />
                </Suspense>

            </div>
        </div>
        </React.Fragment>
    );
};
export default Footer;