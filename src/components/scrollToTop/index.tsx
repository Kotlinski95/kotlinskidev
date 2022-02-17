

import './index.scss';
import scroll from '../../assets/icons/scroll.svg'
import CustomImage from '../customImage'

const ScrollToTop = (props) => {
    function scrollToTopPage() {
        document.querySelector("body")!.scrollTo(0, 0);
    }
    return (
        <div className="scroll-to-top__wrapper" onClick={scrollToTopPage}>
            <CustomImage
                className="scroll-to-top__icon"
                src={scroll}
                alt="Scroll to top icon"
                title="Scroll to top of page"
                width="50px"
                height="50px"
            />
        </div>
    );
};

export default ScrollToTop;