import './index.scss';

const ScrollDown = (props) => {
    return (
        <>
            <div className='icon-scroll' style={{bottom: `${props.bottom}`, top: `${props.top}`}}></div>
            <p className="icon-scroll-text" style={{bottom: `${props.bottomText}`, top: `${props.topText}`}}>{props.text}</p>
        </>
    );
};

export default ScrollDown;