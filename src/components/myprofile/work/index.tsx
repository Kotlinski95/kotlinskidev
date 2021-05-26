import './index.scss'
import ProfileImage from '../../profileImage'
const ProfileWork = () => {
    return(
        <div className="myprofile-work__wrapper">
            <h2>{language.pages.myprofile.work.header}</h2> 
            <div className="myprofile-work__item">
                <ProfileImage width="40px" height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.sobre_time} <span>{language.pages.myprofile.work.sobre_name}</span></p>
            </div>
            <div className="myprofile-work__item">
                <ProfileImage width="40px" height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.script_studio_time} <span>{language.pages.myprofile.work.script_studio_name}</span></p>
            </div>
            <div className="myprofile-work__item">
                <ProfileImage width="40px" height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.blumenbecker_time} <span>{language.pages.myprofile.work.blumenbecker_name}</span></p>
            </div>
            <div className="myprofile-work__item">
                <ProfileImage width="40px" height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.br_time} <span>{language.pages.myprofile.work.br_name}</span></p>
            </div>
            <div className="myprofile-work__item">
                <ProfileImage width="40px" height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.abis_time} <span>{language.pages.myprofile.work.abis_name}</span></p>
            </div>
        </div>
    );
};

export default ProfileWork;