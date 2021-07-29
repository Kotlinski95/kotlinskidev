import './index.scss'
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

const StackTile = (props) => {
    return (
        <InView triggerOnce threshold={0.3}>
        {({ inView, ref, entry }) => (
            <div ref={ref} className='stack-tile-wrapper cursor_hover' style={{width: `${props.width}`, height: `${props.height}`, color: `${props.color}`}} title={props.title}>
                <Link className="stack-tile-link" to={props.url}></Link>
                {
                        props.svg ?
                        <svg
                            className='stack-tile-svg'
                            style={{
                                    transform: inView ? 'rotateX(0)' : 'rotateX(90deg);',
                                    color: inView ? 'inherit' : '#fff',
                                    opacity: inView ? '1' : '0',
                            }}>{props.svg}
                        </svg> :
                            <img
                                src={props.logo}
                                alt="Logo"
                                className="stack-tile-logo stack-tile-img"
                                title={props.imgTitle}
                                style={{
                                    transform: inView ? 'rotateX(0)' : 'rotateX(90deg);',
                                    color: inView ? 'inherit' : '#fff',
                                    opacity: inView ? '1' : '0',
                                }}
                            ></img>
                }
                <p className="stack-tile-title">{props.title}</p>
            </div>
        )}
        </InView>

    );
};

export default StackTile;