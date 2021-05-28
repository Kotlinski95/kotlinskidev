import './index.scss'
import ProfileImage from '../../profileImage'
import agh from '../../../assets/agh.png'
import zs6 from '../../../assets/zs6.png'

const ProfileEducation = () => {
    return(
        <div className="myprofile-education__wrapper">
        <h2>{language.pages.myprofile.education.header}</h2>
        <div className="myprofile-education__item">
            <ProfileImage url={agh} width="40px" height="40px" position="relative"/>
            <p>{language.pages.myprofile.education.agh_2_time} <span>{language.pages.myprofile.education.agh_2_name}</span></p>
        </div>
        <div className="myprofile-education__item">
            <ProfileImage url={agh} width="40px" height="40px" position="relative"/>
            <p>{language.pages.myprofile.education.agh_1_time} <span>{language.pages.myprofile.education.agh_1_name}</span></p>
        </div>
        <div className="myprofile-education__item">
            <ProfileImage url={zs6} width="40px" height="40px" position="relative"/>
            <p>{language.pages.myprofile.education.zs6_time} <span>{language.pages.myprofile.education.zs6_name}</span></p>
        </div>
    </div>
    );
};

export default ProfileEducation;