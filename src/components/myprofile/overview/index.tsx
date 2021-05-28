import './index.scss'
import { FaSearchLocation, FaPhoneAlt, FaHome, FaBirthdayCake, FaUserGraduate} from 'react-icons/fa';
const ProfileOverview = () => {
    return(
        <div className="myprofile-overview__wrapper">
            <h2>{language.pages.myprofile.overview.header}</h2>
            <div className="myprofile-overview__item">
                <FaUserGraduate/>
                <p><strong>{language.pages.myprofile.overview.study_label}</strong> <span>{language.pages.myprofile.overview.study_text}</span></p>
            </div>
            <div className="myprofile-overview__item">
                <FaHome/>
                <p><strong>{language.pages.myprofile.overview.live_label}</strong> <span>{language.pages.myprofile.overview.live_text}</span></p>
            </div>
            <div className="myprofile-overview__item">
                <FaSearchLocation/>
                <p><strong>{language.pages.myprofile.overview.home_label}</strong> <span>{language.pages.myprofile.overview.home_text}</span></p>
            </div>
            <div className="myprofile-overview__item">
                <FaBirthdayCake/>
                <p><strong>{language.pages.myprofile.overview.birthday_label}</strong> <span>{language.pages.myprofile.overview.birthday_text}</span></p>
            </div>
            <div className="myprofile-overview__item">
                <FaPhoneAlt/>
                <p><strong>{language.pages.myprofile.overview.phone_label}</strong> <span>{language.pages.myprofile.overview.phone_text}</span></p>
            </div>
        </div>
    );
};

export default ProfileOverview;