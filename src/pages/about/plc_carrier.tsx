import TypedText from '../../components/typedText'
import {setPage} from '../../reducers/state'
import {useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'

const PlcCarrierPage = () => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/plc-carrier"));
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
      <Breadcrumbs />
      <div className="aboutme-wrapper">
        <h1 className="aboutme_title">{language.pages.aboutme.plc.header}</h1>
        <h3 className="aboutme_text">{language.pages.aboutme.plc.text}</h3>
        <AnimatedArrow text={language.pages.aboutme.plc.back_to_home} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme"/>
        <h2 className="aboutme_title">{language.pages.aboutme.plc.blumenbecker.header}</h2>
        <h4 className="aboutme_text">{language.pages.aboutme.plc.blumenbecker.text}</h4>
        <AnimatedArrow text={language.pages.aboutme.plc.blumenbecker.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.plc.blumenbecker.link}/>
        <h2 className="aboutme_title">{language.pages.aboutme.plc.bernecker.header}</h2>
        <h4 className="aboutme_text">{language.pages.aboutme.plc.bernecker.text}</h4>
        <AnimatedArrow text={language.pages.aboutme.plc.bernecker.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.plc.bernecker.link}/>
      </div>
    </div>
  );
};
export default PlcCarrierPage;