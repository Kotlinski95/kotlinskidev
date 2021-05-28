import './index.scss'
import { FcSportsMode ,FcMusic, FcCommandLine, FcVideoProjector } from "react-icons/fc";
const ProfileHobby = () => {
    return(
        <div className="myprofile-sport__wrapper">
            <div className="myprofile-sport__item">
                <FcSportsMode />
                <p> <span>{language.pages.myprofile.hobby.running}</span></p>
            </div>
            <div className="myprofile-sport__item">
                <FcMusic />
                <p> <span>{language.pages.myprofile.hobby.music}</span></p>
            </div>
            <div className="myprofile-sport__item">
                <FcCommandLine />
                <p> <span>{language.pages.myprofile.hobby.coding}</span></p>
            </div>
            <div className="myprofile-sport__item">
                <FcVideoProjector />
                <p><span>{language.pages.myprofile.hobby.films}</span></p>
            </div>
        </div>
    );
};

export default ProfileHobby;