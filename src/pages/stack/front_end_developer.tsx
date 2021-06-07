import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import StackTile from '../../components/stackTile'
import html from '../../assets/stack/html.svg'
import css from '../../assets/stack/css.svg'
import js from '../../assets/stack/javascript.svg'
import sass from '../../assets/stack/sass.svg'
import ts from '../../assets/stack/typescript.svg'
import react from '../../assets/stack/react.svg'
import nodejs from '../../assets/stack/nodejs.svg'
import github from '../../assets/stack/github.svg'
import Footer from '../../components/footer'

import {
  Css3,
  Javascript,
  StyledComponents,
  Sass,
  Html5,
  Shopify,
  Github,
  Typescript
} from '@styled-icons/simple-icons';

import {
  ReactLogo,
  Bootstrap,
  Nodejs
} from '@styled-icons/boxicons-logos';

import { PhoneDesktop } from '@styled-icons/fluentui-system-regular/PhoneDesktop';

const FrontEndDeveloperPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/front-end-developer"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();

  const skills = [
    { name: "Html 5", icon: <Html5 />, color: "#e34c26" },
    { name: "Css 3", icon: <Css3 />, color: "#2965f1" },
    { name: "Javascript", icon: <Javascript />, color: "#f0db4f" },
    { name: "Sass", icon: <Sass />, color: "#c69" },
    { name: "Bootstrap", icon: <Bootstrap />, color: "#563d7c" },
    { name: "Rwd", icon: <PhoneDesktop />, color: "#e75a7c" },
    { name: "React", icon: <ReactLogo />, color: "#61dbfb" },
    { name: "Styled components", icon: <StyledComponents />, color: "#fff" },
    { name: "Shopify", icon: <Shopify />, color: "#764abc" },
    { name: "Git", icon: <Github />, color: "#fff" },
    { name: "NodeJS", icon: <Nodejs />, color: "#0d8618" },
    { name: "TypeScript", icon: <Typescript/>, color: "#5473c7" },

];

  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Breadcrumbs />
        <h2 className="stack-hello">{language.pages.stack.front_header}</h2>
        <div className="stack-wrapper">
          {skills.map((link, index) => (
            <StackTile svg={link.icon} width="150px" heigh="150px" title={link.name} imgTitle="HTML 5" color={link.color}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FrontEndDeveloperPage;