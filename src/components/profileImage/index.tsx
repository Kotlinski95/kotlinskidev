import './index.scss'
const ProfileImage = (props) => {
    return(
        <div className="profileImage-wrapper">
            <img src={props.url} alt={props.alt} title={props.title} style={{width: props.width, height: props.height, position: props.position, left: props.left, bottom: props.bottom }}></img>
        </div>
    );
};

export default ProfileImage;