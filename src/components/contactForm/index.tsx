import './index.scss'
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import {Theme} from '../../settings';
import { Phone, Mail } from '@styled-icons/fluentui-system-regular';
import {ComponentRevealShow, TextRevealVertical, TextRevealHorizontal} from '../contentReveal';
import {handleTrackingEvent} from '../../analytics'

import {
  CryptoMailLink,
  CryptoPhoneLink,
} from '../links/index.jsx';

import CvLink from '../cvLink';
import { AnyARecord } from 'dns';

const ContactForm = () => {
  function sendEmail(e: any) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_sq6uips', 'template_knzgey8', e.target, 'user_m3DpFoPmnhavjj56KHKAl')
      .then((result) => {
        window.location.reload();  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        handleTrackingEvent("Email", "Email Sent", {page: `${_store.getState().pageState.page}`});
      }, (error) => {
        console.log(error.text);
      });
  }
  const updateMail = (e) => {
    e.target.href = 'mailto:' + e.target.dataset.name + '@' + e.target.dataset.domain + '.' + e.target.dataset.tld;
    handleTrackingEvent("Email", "Email clicked", {page: `${_store.getState().pageState.page}`});
  };

  const updatePhone = (e) => {
    e.target.href = 'tel: +48' + e.target.dataset.first + e.target.dataset.second + e.target.dataset.third;
    handleTrackingEvent("Phone", "Phone clicked", {page: `${_store.getState().pageState.page}`});
  };

  const {
    breakpoints
  } = Theme;

  const ContactContainer = styled.div`
    margin: 30px 0 20px;

    @media ${breakpoints.md} {
        margin: 60px 0 60px;
    }
`

  const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
`

  const SocialsList = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 10px;
`

  const SocialsItem = styled.li`
    flex-grow: 1;   
    a {
        display: block;
    }
`

  const ContactItem = styled.div`
    font-size: clamp(16px, 5vw, 30px);
    padding: 8px 0;
    font-weight: 600;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    text-align: center;
    display: flex;
    justify-content: center;
    @media ${breakpoints.xs} {
        font-size: clamp(20px, 3vw, 50px);
    }

    &:first-of-type {
        border-bottom: none;
    }
`

  const SvgWrapper = styled.span`
    height:  clamp(16px, 5vw, 30px);
    margin-right: 4px;

    @media ${breakpoints.xs} {
        height: clamp(20px, 3vw, 50px);
        margin-right: 10px;
    }

    svg {
        height: 100%;
    }
`
    const formInputs: any = document.getElementsByClassName("form-input");
    for (const formInput of formInputs){
      formInput.focus({preventScroll:true});
    }

  return (
    <>
      <div className="contact_form-wrapper">
        <TextRevealVertical data-scroll><h2 className="projects-hello">{language.pages.contact.title}</h2></TextRevealVertical>
        <TextRevealHorizontal data-scroll><h2>{language.pages.contact.header}</h2></TextRevealHorizontal>
        <form className="contact-form" onSubmit={sendEmail}>
          <input className="cursor_hover" type="hidden" name="contact_number" />
          <ComponentRevealShow data-scroll width="80%" delay="0.3s"><label>{language.pages.contact.name}</label></ComponentRevealShow>
          <ComponentRevealShow data-scroll width="80%" delay="0.3s"><input className="cursor_hover form-input" type="text" name="from_name" placeholder={language.pages.contact.name_placeholder} /></ComponentRevealShow>
          <ComponentRevealShow data-scroll width="80%" delay="0.6s"><label>{language.pages.contact.email}</label></ComponentRevealShow>
          <ComponentRevealShow data-scroll width="80%" delay="0.6s"><input className="cursor_hover form-input" type="email" name="from_email" placeholder={language.pages.contact.email_placeholder} /></ComponentRevealShow>
          <ComponentRevealShow data-scroll width="80%" delay="0.9s"><label>{language.pages.contact.subject}</label></ComponentRevealShow>
          <ComponentRevealShow data-scroll width="80%" delay="0.9s"><input className="cursor_hover form-input" type="text" name="subject" placeholder={language.pages.contact.subject_placeholder} /></ComponentRevealShow>
          <ComponentRevealShow data-scroll width="80%" delay="1.2s"><label>{language.pages.contact.message}</label></ComponentRevealShow>
          <ComponentRevealShow data-scroll width="80%" delay="1.2s"><textarea className="cursor_hover form-input" name="html_message" placeholder={language.pages.contact.message_placeholder} /></ComponentRevealShow>
          <ComponentRevealShow data-scroll width="80%" delay="1.5s"><input type="submit" value={language.pages.contact.send} className="contact-button cursor_hover" /></ComponentRevealShow>
        </form>
        <ComponentRevealShow data-scroll width="80%">
        <div className="cursor_hover">
        <ContactContainer >
          <ContactItem >
            <SvgWrapper>
              <Mail />
            </SvgWrapper>
            <CryptoMailLink
              className= "CryptoMailLink"
              href="mailto:someWeirdEmail@onet.xyz"
              data-name="kotlinski95"
              data-domain="gmail"
              data-tld="com"
              onClick={updateMail}
            />
          </ContactItem>
          <ContactItem>
            <SvgWrapper>
              <Phone />
            </SvgWrapper>
            <CryptoPhoneLink
              className="CryptoPhoneLink"
              href="tel:608418911"
              data-first="608"
              data-second="418"
              data-third="911"
              onClick={updatePhone}
            />
          </ContactItem>
        </ContactContainer>
        </div>
        </ComponentRevealShow>
        <CvLink/>
      </div>
    </>
  );
}
export default ContactForm;