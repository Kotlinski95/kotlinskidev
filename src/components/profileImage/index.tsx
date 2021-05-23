import './index.scss'
const ProfileImage = (props) => {
    return(
        <div className="profileImage-wrapper">
            <img src={props.url} alt={props.alt} style={{width: props.width, height: props.height}}></img>
        </div>
    );
};

export default ProfileImage;