import React from 'react';
import Footer from '../components/footer';
import NotFound from '../components/notFound/index'

const NotFoundPage = (props) => {
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <div id="notFound"><NotFound language={language} /></div>
      </div>
      <Footer />
    </div>
  )


}

export default NotFoundPage;