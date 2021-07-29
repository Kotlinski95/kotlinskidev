import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import ServiceCarousel from '../../components/serviceCarousel'

import shopify from '../../assets/landing_page/shopify.jpg'
import shopify_tablet from '../../assets/landing_page/shopify_tablet.jpg'
import shopify_rwd from '../../assets/landing_page/shopify_rwd.jpg'

import shopify_mobile from '../../assets/landing_page/shopify_mobile.jpg'
import shopify_tablet_mobile from '../../assets/landing_page/shopify_tablet_mobile.jpg'
import shopify_rwd_mobile from '../../assets/landing_page/shopify_rwd_mobile.jpg'

const ShopifyDevelopmentPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  const { HandleMouseoverEffects, title } = props;
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
}, [title]);
  const data = [
    {
      image: shopify,
      imageMobile: shopify_mobile,
      header: language.pages.services.shopify.inner.header1,
      text: language.pages.services.shopify.inner.text1,
      link: language.pages.services.shopify.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: shopify_tablet,
      imageMobile: shopify_tablet_mobile,
      header: language.pages.services.shopify.inner.header2,
      text: language.pages.services.shopify.inner.text2,
      link: language.pages.services.shopify.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: shopify_rwd,
      imageMobile: shopify_rwd_mobile,
      header: language.pages.services.shopify.inner.header3,
      text: language.pages.services.shopify.inner.text3,
      link: language.pages.services.shopify.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    }
  ]
  return (
    <>
      <PageTransitioning />
      <div>
        <div className="main-inner main-services" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <ServiceCarousel slides={Object.keys(data).length} visibleSlides={1} data={data}/>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ShopifyDevelopmentPage;