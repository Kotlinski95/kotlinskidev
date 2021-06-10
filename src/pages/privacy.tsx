import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../components/breadcrumbs'
import Footer from '../components/footer'
import AccordionText from '../components/accordion'

const PrivacyPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Privacy"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  const privacyContent = {
    main: {
      update: {
        text: language.pages.privacy.update,
        link: "",
        target: ""
      },
      describe: {
        text: language.pages.privacy.describe,
        link: "",
        target: ""
      },
      personal_data: {
        text: language.pages.privacy.personal_data,
        link: "",
        target: ""
      },
      personal_data_link: {
        text: language.pages.privacy.generator,
        link: "https://www.privacypolicies.com/privacy-policy-generator/",
        target: "_blank"
      },
    }
  }
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Breadcrumbs />
        <div className="privacy-wrapper" style={{ width: '80%' }}>
          <AccordionText title={language.pages.privacy.header} text={privacyContent.main}/>
          <h1>{language.pages.privacy.header}</h1>
          <p>{language.pages.privacy.update}</p>
          <p>{language.pages.privacy.describe}</p>
          <p>{language.pages.privacy.personal_data}<a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank">{language.pages.privacy.generator}</a>.</p>
          <h1>{language.pages.privacy.interpretation}</h1>
          <h2>{language.pages.privacy.interpretation_header}</h2>
          <p>{language.pages.privacy.interpretation_text}</p>
          <h2>{language.pages.privacy.definitions.header}</h2>
          <p>{language.pages.privacy.definitions.text}</p>
          <ul>
            <li>
              <p><strong>{language.pages.privacy.definitions.account_title}</strong>{language.pages.privacy.definitions.account_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.company_title}</strong>{language.pages.privacy.definitions.company_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.cookies_title}</strong>{language.pages.privacy.definitions.cookies_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.country_title}</strong>{language.pages.privacy.definitions.country_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.device_title}</strong>{language.pages.privacy.definitions.device_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.personal_title}</strong>{language.pages.privacy.definitions.personal_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.service_title}</strong>{language.pages.privacy.definitions.service_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.service_provider_title}</strong> {language.pages.privacy.definitions.service_provider_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.social_title}</strong> {language.pages.privacy.definitions.social_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.usage_title}</strong> {language.pages.privacy.definitions.usage_label}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.website_title}</strong> {language.pages.privacy.definitions.website_label}<a href="https://www.kotlinskidev.pl" rel="external nofollow noopener" target="_blank">{language.pages.privacy.definitions.website_link}</a></p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.definitions.you_title}</strong>{language.pages.privacy.definitions.you_label}</p>
            </li>
          </ul>
          <h1>{language.pages.privacy.collecting_data.header}</h1>
          <h2>{language.pages.privacy.collecting_data.text}</h2>
          <h3>{language.pages.privacy.collecting_data.personal.header}</h3>
          <p>{language.pages.privacy.collecting_data.personal.text}</p>
          <ul>
            <li>
              <p>{language.pages.privacy.collecting_data.personal.email}</p>
            </li>
            <li>
              <p>{language.pages.privacy.collecting_data.personal.name}</p>
            </li>
            <li>
              <p>{language.pages.privacy.collecting_data.personal.phone}</p>
            </li>
            <li>
              <p>{language.pages.privacy.collecting_data.personal.address}</p>
            </li>
            <li>
              <p>{language.pages.privacy.collecting_data.personal.usage}</p>
            </li>
          </ul>
          <h3>{language.pages.privacy.collecting_data.usage.header}</h3>
          <p>{language.pages.privacy.collecting_data.usage.collection}</p>
          <p>{language.pages.privacy.collecting_data.usage.include}</p>
          <p>{language.pages.privacy.collecting_data.usage.access}</p>
          <p>{language.pages.privacy.collecting_data.usage.collect}</p>
          <h3>{language.pages.privacy.collecting_data.third.header}</h3>
          <p>{language.pages.privacy.collecting_data.third.text}</p>
          <ul>
            <li>{language.pages.privacy.collecting_data.third.google}</li>
            <li>{language.pages.privacy.collecting_data.third.facebook}</li>
            <li>{language.pages.privacy.collecting_data.third.twitter}</li>
          </ul>
          <p>{language.pages.privacy.collecting_data.third.register}</p>
          <p>{language.pages.privacy.collecting_data.third.additional}</p>
          <h3>{language.pages.privacy.collecting_data.tracking.header}</h3>
          <p>{language.pages.privacy.collecting_data.tracking.cookies}</p>
          <ul>
            <li><strong>{language.pages.privacy.collecting_data.tracking.cookies_title}</strong> {language.pages.privacy.collecting_data.tracking.cookies_text}</li>
            <li><strong>{language.pages.privacy.collecting_data.tracking.flash_title}</strong>{language.pages.privacy.collecting_data.tracking.flash_text} <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_" rel="external nofollow noopener" target="_blank">{language.pages.privacy.collecting_data.tracking.flash_link}</a></li>
            <li><strong>{language.pages.privacy.collecting_data.tracking.beacons_title}</strong>{language.pages.privacy.collecting_data.tracking.beacons_text}</li>
          </ul>
          <p>{language.pages.privacy.collecting_data.tracking.persistent}<a href="https://www.privacypolicies.com/blog/cookies/" target="_blank">{language.pages.privacy.collecting_data.tracking.what_cookies_are}</a>.</p>
          <p>{language.pages.privacy.collecting_data.tracking.session}</p>
          <ul>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.tracking.necessary}</strong></p>
              <p>{language.pages.privacy.collecting_data.tracking.type}</p>
              <p>{language.pages.privacy.collecting_data.tracking.administered}</p>
              <p>{language.pages.privacy.collecting_data.tracking.purpose}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.tracking.cookies_policy}</strong></p>
              <p>{language.pages.privacy.collecting_data.tracking.cookies_policy_type}</p>
              <p>{language.pages.privacy.collecting_data.tracking.cookies_policy_administered}</p>
              <p>{language.pages.privacy.collecting_data.tracking.cookies_purpose}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.tracking.cookies_functionality}</strong></p>
              <p>{language.pages.privacy.collecting_data.tracking.cookies_functionality_type}</p>
              <p>{language.pages.privacy.collecting_data.tracking.cookies_functionality_administered}</p>
              <p>{language.pages.privacy.collecting_data.tracking.cookies_website}</p>
            </li>
          </ul>
          <p>{language.pages.privacy.collecting_data.tracking.more}</p>
          <h2>{language.pages.privacy.collecting_data.use_personal.header}</h2>
          <p>{language.pages.privacy.collecting_data.use_personal.text}</p>
          <ul>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.use_personal.service_title}</strong> {language.pages.privacy.collecting_data.use_personal.service_text}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.use_personal.manage_account_title}</strong> {language.pages.privacy.collecting_data.use_personal.manage_account_text}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.use_personal.performance_title}</strong> {language.pages.privacy.collecting_data.use_personal.performance_text}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.use_personal.contact_title}</strong> {language.pages.privacy.collecting_data.use_personal.contact_text}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.use_personal.provide_title}</strong> {language.pages.privacy.collecting_data.use_personal.provide_text}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.use_personal.manage_request_title}</strong> {language.pages.privacy.collecting_data.use_personal.manage_request_text}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.use_personal.business_title}</strong> {language.pages.privacy.collecting_data.use_personal.business_text}</p>
            </li>
            <li>
              <p><strong>{language.pages.privacy.collecting_data.use_personal.other_title}</strong> {language.pages.privacy.collecting_data.use_personal.other_text}</p>
            </li>
          </ul>
          <p>{language.pages.privacy.collecting_data.use_personal.situations}</p>
          <ul>
            <li><strong>{language.pages.privacy.collecting_data.use_personal.web_provider_title}</strong> {language.pages.privacy.collecting_data.use_personal.web_provider_text}</li>
            <li><strong>{language.pages.privacy.collecting_data.use_personal.business_transfer_title}</strong> {language.pages.privacy.collecting_data.use_personal.business_transfer_text}</li>
            <li><strong>{language.pages.privacy.collecting_data.use_personal.affiliates_title}</strong> {language.pages.privacy.collecting_data.use_personal.affiliate_text}</li>
            <li><strong>{language.pages.privacy.collecting_data.use_personal.business_partner_title}</strong> {language.pages.privacy.collecting_data.use_personal.business_partner_text}</li>
            <li><strong>{language.pages.privacy.collecting_data.use_personal.other_users_title}</strong> {language.pages.privacy.collecting_data.use_personal.other_users_text}</li>
            <li><strong>{language.pages.privacy.collecting_data.use_personal.consent_title}</strong> {language.pages.privacy.collecting_data.use_personal.consent_text}</li>
          </ul>
          <h2>{language.pages.privacy.collecting_data.retention.header}</h2>
          <p>{language.pages.privacy.collecting_data.retention.retent}</p>
          <p>{language.pages.privacy.collecting_data.retention.usage}</p>
          <h2>{language.pages.privacy.collecting_data.transfer.header}</h2>
          <p>{language.pages.privacy.collecting_data.retention.information}</p>
          <p>{language.pages.privacy.collecting_data.retention.consent}</p>
          <p>{language.pages.privacy.collecting_data.retention.company}</p>
          <h2>{language.pages.privacy.collecting_data.disclosure.header}</h2>
          <h3>{language.pages.privacy.collecting_data.disclosure.business_title}</h3>
          <p>{language.pages.privacy.collecting_data.disclosure.business_text}</p>
          <h3>{language.pages.privacy.collecting_data.disclosure.law_title}</h3>
          <p>{language.pages.privacy.collecting_data.disclosure.law_text}</p>
          <h3>{language.pages.privacy.collecting_data.disclosure.legal_title}</h3>
          <p>{language.pages.privacy.collecting_data.disclosure.legal_text}</p>
          <ul>
            <li>{language.pages.privacy.collecting_data.disclosure.comply}</li>
            <li>{language.pages.privacy.collecting_data.disclosure.protect}</li>
            <li>{language.pages.privacy.collecting_data.disclosure.prevent}</li>
            <li>{language.pages.privacy.collecting_data.disclosure.personal_safety}</li>
            <li>{language.pages.privacy.collecting_data.disclosure.liability}</li>
          </ul>
          <h2>{language.pages.privacy.collecting_data.security.header}</h2>
          <p>{language.pages.privacy.collecting_data.security.text}</p>
          <h1>{language.pages.privacy.collecting_data.children.header}</h1>
          <p>{language.pages.privacy.collecting_data.children.text}</p>
          <p>{language.pages.privacy.collecting_data.children.rely}</p>
          <h1>{language.pages.privacy.collecting_data.links.header}</h1>
          <p>{language.pages.privacy.collecting_data.links.text}</p>
          <p>{language.pages.privacy.collecting_data.links.responsibility}</p>
          <h1>{language.pages.privacy.collecting_data.changes.header}</h1>
          <p>{language.pages.privacy.collecting_data.changes.update}</p>
          <p>{language.pages.privacy.collecting_data.changes.let_know}</p>
          <p>{language.pages.privacy.collecting_data.changes.advised}</p>
          <h1>{language.pages.privacy.collecting_data.contact.header}</h1>
          <p>{language.pages.privacy.collecting_data.contact.questions}</p>
          <ul>
            <li>
              <p>{language.pages.privacy.collecting_data.contact.email}</p>
            </li>
            <li>
              <p>{language.pages.privacy.collecting_data.contact.page} <a href="https://www.kotlinskidev.pl/contact" rel="external nofollow noopener" target="_blank">{language.pages.privacy.collecting_data.contact.page_url}</a></p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PrivacyPage;