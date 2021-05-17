import CategoryCollection from '../../tile'
import aboutme from '../../../assets/aboutme.svg';
import projects from '../../../assets/projects.svg';
import stack from '../../../assets/stack.svg';
import services from '../../../assets/services.svg';

const CategoriesComponent = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', height: '100%', width: '100%', position: 'relative' }}>
                <CategoryCollection url="/aboutme" title="About me" logo={aboutme} width="20%" height="80%" />
                <CategoryCollection url="/projects" title="Projects" width="20%" logo={projects} height="80%" />
                <CategoryCollection url="/stack" title="Stack" width="20%" logo={stack} height="80%" />
                <CategoryCollection url="services" title="Services" width="20%" logo={services} height="80%" />
            </div>

        </div>
    );
};

export default CategoriesComponent;