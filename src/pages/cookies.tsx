import TypedText from '../components/typedText'
import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../components/breadcrumbs'
import Footer from '../components/footer'

const CookiesPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Cookies"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Breadcrumbs />
        <div className="cookies-wrapper" style={{ width: '80%' }}>
          <h1>{language.pages.cookies.header}</h1>
          <p>{language.pages.cookies.update}</p>
          <p>{language.pages.cookies.explains} <a href="https://www.privacypolicies.com/cookies-policy-generator/" target="_blank">{language.pages.cookies.generator}</a>.</p>
          <p>{language.pages.cookies.cookies}</p>
          <p>{language.pages.cookies.sensitive}</p>
          <h1>{language.pages.cookies.interpretation_definitions.header}</h1>
          <h2>{language.pages.cookies.interpretation_definitions.interpretation.header}</h2>
          <p>{language.pages.cookies.interpretation_definitions.interpretation.text}</p>
          <h2>{language.pages.cookies.interpretation_definitions.definitions.header}</h2>
          <p>{language.pages.cookies.interpretation_definitions.definitions.text}</p>
          <ul>
            <li><strong>{language.pages.cookies.interpretation_definitions.definitions.company_title}</strong> {language.pages.cookies.interpretation_definitions.definitions.company_text}</li>
            <li><strong>{language.pages.cookies.interpretation_definitions.definitions.cookies_title}</strong> {language.pages.cookies.interpretation_definitions.definitions.cookies_text}</li>
            <li><strong>{language.pages.cookies.interpretation_definitions.definitions.website_title}</strong> {language.pages.cookies.interpretation_definitions.definitions.website_text} <a href="https://www.kotlinskidev.pl/" rel="external nofollow noopener" target="_blank">{language.pages.cookies.interpretation_definitions.definitions.website_url}</a></li>
            <li><strong>{language.pages.cookies.interpretation_definitions.definitions.you_title}</strong> {language.pages.cookies.interpretation_definitions.definitions.you_text}</li>
          </ul>
          <h1>{language.pages.cookies.interpretation_definitions.cookies.header}</h1>
          <h2>{language.pages.cookies.interpretation_definitions.cookies.text}</h2>
          <p>{language.pages.cookies.interpretation_definitions.cookies.persistent}</p>
          <p>{language.pages.cookies.interpretation_definitions.cookies.session}</p>
          <ul>
            <li>
              <p><strong>{language.pages.cookies.interpretation_definitions.cookies.essential_cookies_text}</strong></p>
              <p>{language.pages.cookies.interpretation_definitions.cookies.essential_cookies_type}</p>
              <p>{language.pages.cookies.interpretation_definitions.cookies.essential_cookies_administered}</p>
              <p>{language.pages.cookies.interpretation_definitions.cookies.essential_cookies_purpose}</p>
            </li>
            <li>
              <p><strong>{language.pages.cookies.interpretation_definitions.cookies.functional_cookies_text}</strong></p>
              <p>{language.pages.cookies.interpretation_definitions.cookies.functional_cookies_type}</p>
              <p>{language.pages.cookies.interpretation_definitions.cookies.functional_cookies_administered}</p>
              <p>{language.pages.cookies.interpretation_definitions.cookies.functional_cookies_purpose}</p>
            </li>
          </ul>
          <h2>{language.pages.cookies.interpretation_definitions.choises.header}</h2>
          <p>{language.pages.cookies.interpretation_definitions.choises.text}</p>
          <p>{language.pages.cookies.interpretation_definitions.choises.not_accept}</p>
          <p>{language.pages.cookies.interpretation_definitions.choises.delete}</p>
          <ul>
            <li>
              <p>{language.pages.cookies.interpretation_definitions.choises.chrome} <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank">{language.pages.cookies.interpretation_definitions.choises.chrome_link}</a></p>
            </li>
            <li>
              <p>{language.pages.cookies.interpretation_definitions.choises.explorer} <a href="http://support.microsoft.com/kb/278835" rel="external nofollow noopener" target="_blank">{language.pages.cookies.interpretation_definitions.choises.explorer_link}</a></p>
            </li>
            <li>
              <p>{language.pages.cookies.interpretation_definitions.choises.firefox} <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank">{language.pages.cookies.interpretation_definitions.choises.firefox_link}</a></p>
            </li>
            <li>
              <p>{language.pages.cookies.interpretation_definitions.choises.safari}<a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank">{language.pages.cookies.interpretation_definitions.choises.safari_link}</a></p>
            </li>
          </ul>
          <p>{language.pages.cookies.interpretation_definitions.choises.other}</p>
          <h2>{language.pages.cookies.interpretation_definitions.more.header}</h2>
          <p>{language.pages.cookies.interpretation_definitions.more.text} <a href="https://www.privacypolicies.com/blog/cookies/" target="_blank">{language.pages.cookies.interpretation_definitions.more.cookies_what_are}</a>.</p>
          <h2>{language.pages.cookies.interpretation_definitions.contact.header}</h2>
          <p>{language.pages.cookies.interpretation_definitions.contact.text}</p>
          <ul>
            <li>
              <p>{language.pages.cookies.interpretation_definitions.contact.email}</p>
            </li>
            <li>
              <p>{language.pages.cookies.interpretation_definitions.contact.website} <a href="https://www.kotlinskidev.pl/contact" rel="external nofollow noopener" target="_blank">{language.pages.cookies.interpretation_definitions.contact.website_url}</a></p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CookiesPage;