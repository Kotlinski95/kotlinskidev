import './index.scss'
import { Link } from 'react-router-dom';
const NavProfile = () => {
    return(
        <div className="myprofile-nav__wrapper">
            <ul>
                <Link to="/myprofile/overview"><li className="line-item">{language.pages.myprofile.bookmarks.overview}</li></Link>
                <Link to="/myprofile/work"><li className="line-item">{language.pages.myprofile.bookmarks.work}</li></Link>
                <Link to="/myprofile/education"><li className="line-item">{language.pages.myprofile.bookmarks.education}</li></Link>
                <Link to="/myprofile/contact"><li className="line-item">{language.pages.myprofile.bookmarks.contact}</li></Link>
                <Link to="/myprofile/hobby"><li className="line-item">{language.pages.myprofile.bookmarks.hobby}</li></Link>
                <Link to="/myprofile/spare-time"><li className="line-item">{language.pages.myprofile.bookmarks.spareTime}</li></Link>
            </ul>
        </div>
    );
};

export default NavProfile;