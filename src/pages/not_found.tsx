import Footer from '../components/footer';
import NotFound from '../components/notFound/index'
import PageTransitioning from '../components/pageTransitioning/index'
import {useEffect} from 'react'

const NotFoundPage = (props) => {
  const {HandleMouseoverEffects, title } = props;
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
}, [title]);
  return (
    <>
      <PageTransitioning />
      <div>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <div id="notFound"><NotFound language={language} /></div>
        </div>
        <Footer />
      </div>
    </>
  )


}

export default NotFoundPage;