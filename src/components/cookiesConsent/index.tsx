import './index.scss';
import CookieConsent from "react-cookie-consent";
import { handleTrackingEvent } from '../../analytics';

const Cookies = () => {
    return (
        <>
            <CookieConsent
                flipButtons
                location="bottom"
                buttonText={language.footer.cookie_consent.buttonText}
                declineButtonText={language.footer.cookie_consent.declineButtonText}
                cookieName="Accept_cookies"
                style={{ background: "#1c5344", padding: '15px 120px 15px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={1}
                onAccept={() => {
                    handleTrackingEvent("Cookies", "Cookies accepted", { page: `${_store.getState().pageState.page}`, value: true });
                }}
                onDecline={() => {
                    handleTrackingEvent("Cookies", "Cookies declined", { page: `${_store.getState().pageState.page}`, value: false });
                }}
            >
                {language.footer.cookie_consent.first_text}{" "}
                <span style={{ fontSize: "15px" }}>{language.footer.cookie_consent.second_text}</span>
            </CookieConsent>
        </>

    );
};
export default Cookies;