import './index.scss'
import { Link } from 'react-router-dom';
import {
    ComponentRevealShow
} from "../contentReveal";
import {FooterLink} from '../../styled-components'
import { CvPdf } from '../../docs';

const CvLink = (props) => {
    return(
        <div className="cv-wrapper" style={{width: `${props.width}`, height: `${props.height}`, overflow: 'hidden', display: `${props.display}`, justifyContent: `${props.justifyContent}`}}>
            <ComponentRevealShow data-scroll>
            <FooterLink className="cv-link" href={CvPdf} target='_blank' arrow>
                    <span className="cv-link--text">{language.pages.cv.link}</span>
            </FooterLink>
            </ComponentRevealShow>
        </div>
    );
};

export default CvLink;