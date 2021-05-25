import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import background from '../../assets/background.jpeg'
import logo from '../../assets/adrian_kotlinski.png'
import ProfileImage from '../../components/profileImage'
import NavProfile from '../../components/navProfile'

const MyProfileEducationPage = () => {
    const dispatch = useDispatch();
    dispatch(setPage("My profile"));
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
            <div className="myprofile-wrapper">
                <div className="myprofile-introduce-wrapper">
                    <div className="myprofile-introduce-img">
                        <Breadcrumbs />
                        <img src={background}></img>
                    </div>
                    <ProfileImage url={logo} width="168px" height="178px" />
                </div>
                <div className="myprofile-content-wrapper">
                    <h1>Adrian Kotliński</h1>
                    <hr/>
                    <NavProfile/>
                </div>

            </div>
        </div>
    );
};
export default MyProfileEducationPage;