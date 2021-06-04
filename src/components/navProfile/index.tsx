import './index.scss'
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
const NavProfile = (props) => {
    let navProfileValue: number = 0;
    enum Profile {
        overview = 0,
        work,
        education,
        contact,
        hobby,
        sparetime,
      }
      switch (props.page){
            case "overview":
                navProfileValue = Profile.overview;
            break;
            case "work":
                navProfileValue = Profile.work;
            break;
            case "education":
                navProfileValue = Profile.education;
            break;
            case "contact":
                navProfileValue = Profile.contact;
            break;
            case "hobby":
                navProfileValue = Profile.hobby;
            break;
            case "sparetime":
                navProfileValue = Profile.sparetime;
            break;
            default:
            break;
      }
      useEffect(function(){
        const items = document.querySelectorAll('.myprofile-nav__wrapper .line-item');
        items[navProfileValue].classList.add('selected');
      }, [navProfileValue])

    return(
        <div className="myprofile-nav__wrapper">
            <ul>
                <Link to="/myprofile/overview"><li className="line-item">{language.pages.myprofile.bookmarks.overview}</li></Link>
                <Link to="/myprofile/work"><li className="line-item">{language.pages.myprofile.bookmarks.work}</li></Link>
                <Link to="/myprofile/education"><li className="line-item">{language.pages.myprofile.bookmarks.education}</li></Link>
                <Link to="/myprofile/contact"><li className="line-item">{language.pages.myprofile.bookmarks.contact}</li></Link>
                <Link to="/myprofile/hobby"><li className="line-item">{language.pages.myprofile.bookmarks.hobby}</li></Link>
                {/* <Link to="/myprofile/spare-time"><li className="line-item">{language.pages.myprofile.bookmarks.spareTime}</li></Link> */}
            </ul>
        </div>
    );
};

export default NavProfile;