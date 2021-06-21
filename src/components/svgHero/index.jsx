
import './index.scss';
import Animated from '../../assets/Podpis_AK.svg';
import Animated2 from '../../assets/Podpis_AK.svg';

const SvgHeroBackground = (props) => {
    return (
        <div className="hero-background">
            <object type="image/svg+xml" data={Animated}>svg-animation</object>
        </div>
    );
};

export default SvgHeroBackground;



