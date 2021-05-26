import './index.scss'
import { FaSearchLocation, FaPhoneAlt, FaHome, FaBirthdayCake, FaUserGraduate} from 'react-icons/fa';
const ProfileOverview = () => {
    return(
        <div className="myprofile-overview__wrapper">
            <div className="myprofile-overview__item">
                <FaUserGraduate/>
                <p>{language.pages.myprofile.overview.study_label} <span>{language.pages.myprofile.overview.study_text}</span></p>
            </div>
            <div className="myprofile-overview__item">
                <FaHome/>
                <p>{language.pages.myprofile.overview.live_label} <span>{language.pages.myprofile.overview.live_text}</span></p>
            </div>
            <div className="myprofile-overview__item">
                <FaSearchLocation/>
                <p>{language.pages.myprofile.overview.home_label} <span>{language.pages.myprofile.overview.home_text}</span></p>
            </div>
            <div className="myprofile-overview__item">
                <FaBirthdayCake/>
                <p>{language.pages.myprofile.overview.birthday_label} <span>{language.pages.myprofile.overview.birthday_text}</span></p>
            </div>
            <div className="myprofile-overview__item">
                <FaPhoneAlt/>
                <p>{language.pages.myprofile.overview.phone_label} <span>{language.pages.myprofile.overview.phone_text}</span></p>
            </div>
        </div>
    );
};

export default ProfileOverview;