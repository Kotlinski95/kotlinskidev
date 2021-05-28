import './index.scss'
import ProfileImage from '../../profileImage'
import sobre from '../../../assets/sobre.png'
import br from '../../../assets/br.png'
import blumenbecker from '../../../assets/blumenbecker.png'
import script_studio from '../../../assets/script_studio.png'

const ProfileWork = () => {
    return(
        <div className="myprofile-work__wrapper">
            <h2>{language.pages.myprofile.work.header}</h2>
            <div className="myprofile-work__item">
                <ProfileImage url={sobre} alt={language.pages.myprofile.work.sobre_title} title={language.pages.myprofile.work.sobre_title} width="40px" height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.sobre_time} <span>{language.pages.myprofile.work.sobre_name}</span></p>
            </div>
            <div className="myprofile-work__item">
                <ProfileImage url={script_studio} alt={language.pages.myprofile.work.script_studio_title} title={language.pages.myprofile.work.script_studio_title} width="40px" height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.script_studio_time} <span>{language.pages.myprofile.work.script_studio_name}</span></p>
            </div>
            <div className="myprofile-work__item">
                <ProfileImage url={blumenbecker} alt={language.pages.myprofile.work.blumenbecker_title} title={language.pages.myprofile.work.blumenbecker_title} width="40px" height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.blumenbecker_time} <span>{language.pages.myprofile.work.blumenbecker_name}</span></p>
            </div>
            <div className="myprofile-work__item">
                <ProfileImage url={br} width="40px" alt={language.pages.myprofile.work.br_title} title={language.pages.myprofile.work.br_title} height="40px" position="relative"/>
                <p>{language.pages.myprofile.work.br_time} <span>{language.pages.myprofile.work.br_name}</span></p>
            </div>
        </div>
    );
};

export default ProfileWork;