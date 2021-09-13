import './index.scss'
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import CustomLink from '../customLink';
import { Theme } from '../../settings';
import { Phone, Mail } from '@styled-icons/fluentui-system-regular';
import { ComponentRevealShow, TextRevealVertical, TextRevealHorizontal } from '../contentReveal';
import { handleTrackingEvent } from '../../analytics'
import { useEffect, useState } from 'react'
import emailRegExp from '../../regExp/email'
import Loader from '../loader'
import { Regulations } from '../../docs';

import {
  CryptoMailLink,
  CryptoPhoneLink,
} from '../links/index.jsx';

import CvLink from '../cvLink';
import { AnyARecord } from 'dns';

const ContactForm = () => {
  const [sent, send] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    function validateFirstName(e) {
      if (e.target.value.length < 3 && e.target.value.length > 0) {
        e.target.classList.add('field-error');
        e.target.classList.remove('field-fullfilled');
      }
      else if (e.target.value.length >= 3) {
        e.target.classList.remove('field-error');
        e.target.classList.add('field-fullfilled');
      }
      else {
        e.target.classList.remove('field-error');
        e.target.classList.remove('field-fullfilled');
      }
    }
    function validateEmail(e) {
      let regEmail = emailRegExp();
      const regexp = new RegExp(regEmail);
      if (!regexp.test(e.target.value) && e.target.value.length > 0) {
        e.target.classList.add('field-error');
        e.target.classList.remove('field-fullfilled');
      }
      else if (regexp.test(e.target.value) && e.target.value.length > 0) {
        e.target.classList.remove('field-error');
        e.target.classList.add('field-fullfilled');
      }
      else {
        e.target.classList.remove('field-error');
        e.target.classList.remove('field-fullfilled');
      }

    }
    function validateSubject(e) {
      if (e.target.value.length < 3 && e.target.value.length > 0) {
        e.target.classList.add('field-error');
        e.target.classList.remove('field-fullfilled');
      }
      else if (e.target.value.length >= 3) {
        e.target.classList.remove('field-error');
        e.target.classList.add('field-fullfilled');
      }
      else {
        e.target.classList.remove('field-error');
        e.target.classList.remove('field-fullfilled');
      }
    }
    function validateContent(e) {
      if (e.target.value.length < 3 && e.target.value.length > 0) {
        e.target.classList.add('field-error');
        e.target.classList.remove('field-fullfilled');
      }
      else if (e.target.value.length >= 3) {
        e.target.classList.remove('field-error');
        e.target.classList.add('field-fullfilled');
      }
      else {
        e.target.classList.remove('field-error');
        e.target.classList.remove('field-fullfilled');
      }
    }
    const firstName = document.querySelector('input[name="from_name"]');
    firstName?.addEventListener('keyup', validateFirstName);
    firstName?.addEventListener('paste', validateFirstName);
    firstName?.addEventListener('focus', validateFirstName);
    firstName?.addEventListener('blur', validateFirstName);

    const email = document.querySelector('input[name="from_email"]');
    email?.addEventListener('keyup', validateEmail);
    email?.addEventListener('paste', validateEmail);
    email?.addEventListener('focus', validateEmail);
    email?.addEventListener('blur', validateEmail);

    const subject = document.querySelector('input[name="subject"]');
    subject?.addEventListener('keyup', validateSubject);
    subject?.addEventListener('paste', validateSubject);
    subject?.addEventListener('focus', validateSubject);
    subject?.addEventListener('blur', validateSubject);

    const content = document.querySelector('textarea[name="html_message"]');
    content?.addEventListener('keyup', validateContent);
    content?.addEventListener('paste', validateContent);
    content?.addEventListener('focus', validateContent);
    content?.addEventListener('blur', validateContent);

    return () => {
      firstName?.removeEventListener('keyup', validateFirstName);
      firstName?.removeEventListener('paste', validateFirstName);
      firstName?.removeEventListener('focus', validateFirstName);
      firstName?.removeEventListener('blur', validateFirstName);
      email?.removeEventListener('keyup', validateEmail);
      email?.removeEventListener('paste', validateEmail);
      email?.removeEventListener('focus', validateEmail);
      email?.removeEventListener('blur', validateEmail);
      subject?.removeEventListener('keyup', validateSubject);
      subject?.removeEventListener('paste', validateSubject);
      subject?.removeEventListener('focus', validateSubject);
      subject?.removeEventListener('blur', validateSubject);
      content?.removeEventListener('keyup', validateContent);
      content?.removeEventListener('paste', validateContent);
      content?.removeEventListener('focus', validateContent);
      content?.removeEventListener('blur', validateContent);
    };
  }, []);

  function sendEmail(e: any) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    const contactForm = document.querySelector('.contact-form');
    const validate = formValidate(contactForm);
    setSending(true);
    setError(false);
    send(false);
    if (validate) {
      emailjs.sendForm('service_sq6uips', 'template_knzgey8', e.target, 'user_m3DpFoPmnhavjj56KHKAl')
        .then((result) => {
          send(true);
          setSending(false);
          setError(false);
          handleTrackingEvent("Email", "Email Sent", { page: `${_store.getState().pageState.page}` });
        }, (error) => {
          setSending(false);
          send(false);
          setError(true);
        });
    }
  }
  function formValidate(form) {
    const inputs = document.getElementsByClassName("form-field");
    for (const input of inputs) {
      if (input.classList.contains('field-error')) {
        return false;
      }
    }
    return true;
  }
  const updateMail = (e) => {
    e.target.href = 'mailto:' + e.target.dataset.name + '@' + e.target.dataset.domain + '.' + e.target.dataset.tld;
    handleTrackingEvent("Email", "Email clicked", { page: `${_store.getState().pageState.page}` });
  };

  const updatePhone = (e) => {
    e.target.href = 'tel: +48' + e.target.dataset.first + e.target.dataset.second + e.target.dataset.third;
    handleTrackingEvent("Phone", "Phone clicked", { page: `${_store.getState().pageState.page}` });
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
  for (const formInput of formInputs) {
    formInput.focus({ preventScroll: true });
  }

  return (
    <>
      <div className="contact_form-wrapper">
        <TextRevealVertical ><h2 className="contact-hello">{language.pages.contact.title}</h2></TextRevealVertical>
        <TextRevealHorizontal ><h2>{language.pages.contact.header}</h2></TextRevealHorizontal>
        <form className="contact-form" onSubmit={sendEmail}>
          <input className="cursor_hover" type="hidden" name="contact_number" />
          <ComponentRevealShow width="80%" delay="0.3s"><label>{language.pages.contact.name}</label></ComponentRevealShow>
          <div className="contact-form__inpt-wrapper">
            <ComponentRevealShow width="80%" delay="0.3s">
              <input className="cursor_hover form-field"
                type="text"
                name="from_name"
                placeholder={language.pages.contact.name_placeholder}
                minLength={3}
                maxLength={60}
                required />
              <p className="input-clue__sign">&#10068;<span className="input-clue">{language.pages.contact.clues.first_name}</span></p>
            </ComponentRevealShow>
          </div>
          <ComponentRevealShow width="80%" delay="0.5s"><label>{language.pages.contact.email}</label></ComponentRevealShow>
          <div className="contact-form__inpt-wrapper">
            <ComponentRevealShow width="80%" delay="0.5s">
              <input className="cursor_hover form-field"
                type="email" name="from_email"
                minLength={3}
                maxLength={60}
                placeholder={language.pages.contact.email_placeholder}
                required />
              <p className="input-clue__sign">&#10068;<span className="input-clue">{language.pages.contact.clues.email}</span></p>
            </ComponentRevealShow>
          </div>
          <ComponentRevealShow width="80%" delay="0.7s"><label>{language.pages.contact.subject}</label></ComponentRevealShow>
          <div className="contact-form__inpt-wrapper">
            <ComponentRevealShow width="80%" delay="0.7s">
              <input className="cursor_hover form-field"
                type="text"
                name="subject"
                minLength={3}
                maxLength={100}
                placeholder={language.pages.contact.subject_placeholder}
                required />
              <p className="input-clue__sign">&#10068;<span className="input-clue">{language.pages.contact.clues.topic}</span></p>
            </ComponentRevealShow>
          </div>
          <ComponentRevealShow width="80%" delay="0.9s"><label>{language.pages.contact.message}</label></ComponentRevealShow>
          <div className="contact-form__inpt-wrapper">
            <ComponentRevealShow width="80%" delay="0.9s">
              <textarea className="cursor_hover form-field"
                name="html_message"
                minLength={3}
                maxLength={1000}
                placeholder={language.pages.contact.message_placeholder}
                required />
              <p className="input-clue__sign">&#10068;<span className="input-clue">{language.pages.contact.clues.message}</span></p>
            </ComponentRevealShow>
          </div>
          <div className="consent_wrapper">
            <ComponentRevealShow width="10%" delay="0.9s"><input className="cursor_hover" id="form-consent" type="checkbox" name="consent" placeholder={language.pages.contact.subject_placeholder} required /><span className="checkmark"></span> </ComponentRevealShow>
            <ComponentRevealShow width="90%" delay="0.9s"><label className="consent-label" htmlFor="form-consent">{language.pages.contact.consent} <CustomLink href={Regulations}>{language.pages.contact.consent_regulamin}</CustomLink>{language.pages.contact.consent_and}<CustomLink href="/privacy">{language.pages.contact.consent_privacy}</CustomLink></label></ComponentRevealShow>
          </div>
          {
            sending ?
              <Loader /> :
              sent ?
                <h3>{language.pages.contact.feedback}</h3> :
                <ComponentRevealShow width="80%" delay="1.1s"><input type="submit" value={language.pages.contact.send} className="cursor_hover btn" /></ComponentRevealShow>
          }
          {
            error ?
              <h3 className="error_message">{language.pages.contact.error}</h3> :
              ''
          }
        </form>
        <ComponentRevealShow width="80%">
          <div className="cursor_hover">
            <ContactContainer >
              <ContactItem >
                <SvgWrapper>
                  <Mail />
                </SvgWrapper>
                <CryptoMailLink
                  className="CryptoMailLink"
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
        <CvLink />
      </div>
    </>
  );
}
export default ContactForm;