import './index.scss';
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
    return (
        <>
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
            
        </>

    );
};
export default Cookies;