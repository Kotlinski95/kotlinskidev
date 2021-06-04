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

const FrontEndDeveloperPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/front-end-developer"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Breadcrumbs />
        <h2 className="stack-hello">{language.pages.stack.front_header}</h2>
        <div className="stack-wrapper">
          <StackTile logo={html} width="150px" heigh="150px" title="HTML" imgTitle="HTML 5" />
          <StackTile logo={css} width="150px" heigh="150px" title="CSS" imgTitle="CSS 3" />
          <StackTile logo={js} width="150px" heigh="150px" title="JAVASCRIPT" imgTitle="JavaScript" />
          <StackTile logo={sass} width="150px" heigh="150px" title="SASS" imgTitle="Sass" />
          <StackTile logo={ts} width="150px" heigh="150px" title="TYPESCRIPT" imgTitle="TypeScript" />
          <StackTile logo={react} width="150px" heigh="150px" title="REACT" imgTitle="React" />
          <StackTile logo={nodejs} width="150px" heigh="150px" title="NODE JS" imgTitle="Node JS" />
          <StackTile logo={github} width="150px" heigh="150px" title="GIT" imgTitle="Github" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FrontEndDeveloperPage;