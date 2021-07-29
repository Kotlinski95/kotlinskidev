import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';

export const handleTrackingEvent = (eventName: any, eventAction: any, eventParameter: any) => {
  // Google analytics event
  ReactGA.event({
    category: eventName,
    action: eventAction,
    label: JSON.stringify(eventParameter)
  });
  //Facebook pixel event
  ReactPixel.trackCustom(eventName, eventParameter);
}