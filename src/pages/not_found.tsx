import Footer from '../components/footer';
import NotFound from '../components/notFound/index'
import PageTransitioning from '../components/pageTransitioning/index'

const NotFoundPage = (props) => {
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <div id="notFound"><NotFound language={language} /></div>
        </div>
        <Footer />
      </div>
    </>
  )


}

export default NotFoundPage;