import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import background from '../../assets/background.jpeg'
import logo from '../../assets/adrian_kotlinski.png'
import ProfileImage from '../../components/profileImage'
import NavProfile from '../../components/navProfile'
import ProfileContact from '../../components/myprofile/contact'
import Footer from '../../components/footer'
import {useEffect } from 'react';

const MyProfileContactPage = (props) => {
    const dispatch = useDispatch();
    dispatch(setPage("My profile"));
    useEffect(() => {
        document.title = props.title || "";
    }, [props.title]);
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
                        <NavProfile page="contact" />
                    </div>
                </div>
                <div className="myprofile-category__wrapper">
                    <ProfileContact />
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default MyProfileContactPage;