import './index.scss';

const ScrollDown = (props) => {
    return (
        <div className="cursor_hover" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className='icon-scroll' style={{ display: `${props.display}`, bottom: `${props.bottom}`, top: `${props.top}`}}></div>
            <p className="icon-scroll-text" style={{display: `${props.display}`, bottom: `${props.bottomText}`, top: `${props.topText}`}}>{props.text}</p>
        </div>
    );
};

export default ScrollDown;