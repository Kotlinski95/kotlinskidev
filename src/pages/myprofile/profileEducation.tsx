import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import background from '../../assets/background.jpeg'
import logo from '../../assets/adrian_kotlinski.png'
import ProfileImage from '../../components/profileImage'
import NavProfile from '../../components/navProfile'
import ProfileEducation from '../../components/myprofile/education'
import Footer from '../../components/footer'
import {useEffect} from 'react';
import CustomImage from '../../components/customImage';

const MyProfileEducationPage = (props) => {
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
                            <CustomImage src={background} alt='myprofile background' title='myprofile background' width='100%' height='100%' loading='lazy'></CustomImage>
                        </div>
                        <ProfileImage url={logo} title='Adrian Kotliński - Junior Front-End Developer' width="168px" height="178px" position="absolute" left="calc(50% - 84px)" bottom="125px" />
                    </div>
                    <div className="myprofile-content-wrapper">
                        <h1>{language.pages.myprofile.header}</h1>
                        <h2>{language.pages.myprofile.profession}</h2>
                        <hr />
                        <NavProfile page="education" />
                    </div>
                </div>
                <div className="myprofile-category__wrapper">
                    <ProfileEducation />
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default MyProfileEducationPage;