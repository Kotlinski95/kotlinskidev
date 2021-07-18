import './index.scss'
import CustomImage from '../customImage'

const ProfileImage = (props) => {
    return(
        <div className="profileImage-wrapper">
            <CustomImage src={props.url} alt={props.alt} title={props.title} width={props.width} height={props.height} style={{position: props.position, left: props.left, bottom: props.bottom }}></CustomImage>
        </div>
    );
};

export default ProfileImage;