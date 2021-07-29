import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import background from '../../assets/background.jpeg'
import logo from '../../assets/adrian_kotlinski.png'
import ProfileImage from '../../components/profileImage'
import NavProfile from '../../components/navProfile'
import ProfileContact from '../../components/myprofile/contact'
import ProfileEducation from '../../components/myprofile/education'
import ProfileHobby from '../../components/myprofile/hobby'
import ProfileOverview from '../../components/myprofile/overview'
import ProfileSpareTime from '../../components/myprofile/spareTime'
import ProfileWork from '../../components/myprofile/work'
import Footer from '../../components/footer'
import {useEffect} from 'react';


const MyProfilePage = (props) => {
    const dispatch = useDispatch();
    dispatch(setPage("My profile"));
    const { title } = props;

    useEffect(() => {
        document.title = title || "";
    }, [title]);
    return (
        <div>
            <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <div className="myprofile-wrapper">
                    <div className="myprofile-introduce-wrapper">
                        <div className="myprofile-introduce-img">
                            <Breadcrumbs />
                            <img src={background}></img>
                        </div>
                        <ProfileImage url={logo} width="168px" height="178px" position="absolute" left="calc(50% - 84px)" bottom="125px" />
                    </div>
                    <div className="myprofile-content-wrapper">
                        <h1>{language.pages.myprofile.header}</h1>
                        <h2>{language.pages.myprofile.profession}</h2>
                        <hr />
                        <NavProfile />
                    </div>

                </div>
                <div className="myprofile-category__wrapper">
                    <ProfileOverview />
                    <ProfileWork />
                    <ProfileEducation />
                    <ProfileContact />
                    <ProfileHobby />
                    <ProfileSpareTime />
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default MyProfilePage;