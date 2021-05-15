import React from 'react';
import NotFound from '../components/notFound/index'

const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
      <div id="notFound"><NotFound language={language}/></div>
    </div>
  )


}

export default NotFoundPage;