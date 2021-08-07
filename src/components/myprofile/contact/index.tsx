import './index.scss'
import { FaSearchLocation, FaPhoneAlt, FaHome, FaBirthdayCake, FaAt} from 'react-icons/fa';
const ProfileContact = () => {
    return(
        <div className="myprofile-contact__wrapper">
            <h2>{language.pages.myprofile.contact.header}</h2>
            <div className="myprofile-contact__item">
                <FaPhoneAlt />
                <p><strong>{language.pages.myprofile.contact.phone_label}</strong> <span>{language.pages.myprofile.contact.phone}</span></p>
            </div>
            <div className="myprofile-contact__item">
                <FaAt />
                <p><strong>{language.pages.myprofile.contact.mail_label}</strong> <span>{language.pages.myprofile.contact.mail}</span></p>
            </div>
        </div>
    );
};

export default ProfileContact;