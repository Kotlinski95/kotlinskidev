import './index.scss';
import { Link } from 'react-router-dom';
import contactPopup from '../../assets/icons/contacts.svg';
import contactPhone from '../../assets/icons/phone.svg';
import contactWhatsapp from '../../assets/icons/whatsapp.svg';
import contactForm from '../../assets/icons/contact-form.svg';
import CustomImage from '../customImage';
import { useEffect, useRef } from 'react';

const ContactPopup = (props) => {
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    const popupContent = document.querySelector('.contact-popup__content');
                    if (popupContent !== undefined && popupContent?.classList.contains('active')) {
                        document.querySelector('.contact-popup__content')?.classList.remove('active');
                    }
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function contactDetails() {
        const contentPopup = document.querySelector('.contact-popup__content');
        if (contentPopup !== undefined && !contentPopup?.classList.contains('active')) {
            contentPopup?.classList.add('active');
        }

        
    }
    return (
        <div className="contact-popup__wrapper" onClick={contactDetails} ref={wrapperRef}>
            <CustomImage
                className="contact-popup__icon"
                src={contactPopup}
                alt="Contact details"
                title="Contact details"
                width="50px"
                height="50px"
                ref={wrapperRef}
            />
            <div className="contact-popup__content" ref={wrapperRef}>
                <div className="contact-popup__inner">
                    <h2 className="contact-popup__hello">{language.contact_popup.title}</h2>
                    <p className="contact-popup__introduce">{language.contact_popup.text}</p>
                    <Link to="/contact">
                    <CustomImage
                        className="contact-popup__icon icon-block"
                        src={contactForm}
                        alt="Contact form"
                        title="Contact form"
                        width="40px"
                        height="40px"
                    />
                    </Link>

                    <CustomImage
                        className="contact-popup__icon icon-block"
                        src={contactWhatsapp}
                        alt="Contact by whatsapp"
                        title="Contact by whatsapp"
                        width="40px"
                        height="40px"
                        href="https://wa.me/608418911"
                        target="_blank"
                    />
                    <CustomImage
                        className="contact-popup__icon icon-block"
                        src={contactPhone}
                        alt="Contact by phone"
                        title="Contact by phone"
                        width="40px"
                        height="40px"
                        href="tel:608418911"
                        target="_self"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;