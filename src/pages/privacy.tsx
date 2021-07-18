import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../components/breadcrumbs'
import Footer from '../components/footer'
import AccordionText from '../components/accordion'
import PageTransitioning from '../components/pageTransitioning/index'
import {useEffect} from 'react'

const PrivacyPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Privacy"));
  const { HandleMouseoverEffects, title } = props;
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
}, [title]);

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
    },
    interpretation_definitions: {
      interpretation: {
        header: language.pages.privacy.interpretation_header,
        content: {
          interpretation: {
            text: language.pages.privacy.interpretation_text,
            link: "",
            target: ""
          }
        }
      },
      definitions: {
        header: language.pages.privacy.definitions.header,
        content: {
          definition: {
            text: language.pages.privacy.definitions.text,
            link: "",
            target: ""
          },
          account: {
            text: `${language.pages.privacy.definitions.account_title}${language.pages.privacy.definitions.account_label}`,
            link: "",
            target: ""
          },
          company: {
            text: `${language.pages.privacy.definitions.company_title}${language.pages.privacy.definitions.company_label}`,
            link: "",
            target: ""
          },
          cookies: {
            text: `${language.pages.privacy.definitions.cookies_title}${language.pages.privacy.definitions.cookies_label}`,
            link: "",
            target: ""
          },
          country: {
            text: `${language.pages.privacy.definitions.country_title}${language.pages.privacy.definitions.country_label}`,
            link: "",
            target: ""
          },
          device: {
            text: `${language.pages.privacy.definitions.device_title}${language.pages.privacy.definitions.device_label}`,
            link: "",
            target: ""
          },
          personal: {
            text: `${language.pages.privacy.definitions.personal_title}${language.pages.privacy.definitions.personal_label}`,
            link: "",
            target: ""
          },
          service: {
            text: `${language.pages.privacy.definitions.service_title}${language.pages.privacy.definitions.service_label}`,
            link: "",
            target: ""
          },
          service_provider: {
            text: `${language.pages.privacy.definitions.service_provider_title}${language.pages.privacy.definitions.service_provider_title}`,
            link: "",
            target: ""
          },
          social: {
            text: `${language.pages.privacy.definitions.social_title}${language.pages.privacy.definitions.social_label}`,
            link: "",
            target: ""
          },
          usage: {
            text: `${language.pages.privacy.definitions.usage_title}${language.pages.privacy.definitions.usage_label}`,
            link: "",
            target: ""
          },
          website: {
            text: `${language.pages.privacy.definitions.website_title}${language.pages.privacy.definitions.website_label}`,
            link: "",
            target: ""
          },
          website_url: {
            text: language.pages.privacy.definitions.website_link,
            link: "https://www.kotlinskidev.pl",
            target: "_blank"
          },
          you: {
            text: `${language.pages.privacy.definitions.you_title}${language.pages.privacy.definitions.you_label}`,
            link: "",
            target: ""
          }
        }
      }
    },
    collecting_data: {
      personal: {
        header: language.pages.privacy.collecting_data.text,
        content: {
          personal_header: {
            text: language.pages.privacy.collecting_data.personal.header,
            link: "",
            target: ""
          },
          personal_text: {
            text: language.pages.privacy.collecting_data.personal.text,
            link: "",
            target: ""
          },
          personal_email: {
            text: language.pages.privacy.collecting_data.personal.email,
            link: "",
            target: ""
          },
          personal_name: {
            text: language.pages.privacy.collecting_data.personal.name,
            link: "",
            target: ""
          },
          personal_phone: {
            text: language.pages.privacy.collecting_data.personal.phone,
            link: "",
            target: ""
          },
          personal_address: {
            text: language.pages.privacy.collecting_data.personal.address,
            link: "",
            target: ""
          },
          usage_header: {
            text: language.pages.privacy.collecting_data.usage.header,
            link: "",
            target: ""
          },
          usage_collection: {
            text: language.pages.privacy.collecting_data.usage.collection,
            link: "",
            target: ""
          },
          usage_include: {
            text: language.pages.privacy.collecting_data.usage.include,
            link: "",
            target: ""
          },
          usage_access: {
            text: language.pages.privacy.collecting_data.usage.access,
            link: "",
            target: ""
          },
          usage_collect: {
            text: language.pages.privacy.collecting_data.usage.collect,
            link: "",
            target: ""
          },
          third_header: {
            text: language.pages.privacy.collecting_data.third.header,
            link: "",
            target: ""
          },
          third_text: {
            text: language.pages.privacy.collecting_data.third.text,
            link: "",
            target: ""
          },
          third_google: {
            text: language.pages.privacy.collecting_data.third.google,
            link: "",
            target: ""
          },
          third_facebook: {
            text: language.pages.privacy.collecting_data.third.facebook,
            link: "",
            target: ""
          },
          third_twitter: {
            text: language.pages.privacy.collecting_data.third.twitter,
            link: "",
            target: ""
          },
          third_register: {
            text: language.pages.privacy.collecting_data.third.register,
            link: "",
            target: ""
          },
          third_additional: {
            text: language.pages.privacy.collecting_data.third.additional,
            link: "",
            target: ""
          },
          tracking_header: {
            text: language.pages.privacy.collecting_data.tracking.header,
            link: "",
            target: ""
          },
          tracking_cookies: {
            text: language.pages.privacy.collecting_data.tracking.cookies,
            link: "",
            target: ""
          },
          tracking_cookies_title: {
            text: language.pages.privacy.collecting_data.tracking.cookies_title,
            link: "",
            target: ""
          },
          tracking_cookies_text: {
            text: language.pages.privacy.collecting_data.tracking.cookies_text,
            link: "",
            target: ""
          },
          tracking_flash_title: {
            text: `${language.pages.privacy.collecting_data.tracking.flash_title}${language.pages.privacy.collecting_data.tracking.flash_text}`,
            link: "",
            target: ""
          },
          tracking_flash_link: {
            text: language.pages.privacy.collecting_data.tracking.flash_link,
            link: "https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_",
            target: ""
          },
          tracking_beacons_title: {
            text: `${language.pages.privacy.collecting_data.tracking.beacons_title}${language.pages.privacy.collecting_data.tracking.beacons_text}`,
            link: "",
            target: ""
          },
          tracking_persistent: {
            text: language.pages.privacy.collecting_data.tracking.persistent,
            link: "",
            target: ""
          },
          tracking_what_cookies_are: {
            text: language.pages.privacy.collecting_data.tracking.what_cookies_are,
            link: "https://www.privacypolicies.com/blog/cookies/",
            target: ""
          },
          tracking_session: {
            text: language.pages.privacy.collecting_data.tracking.session,
            link: "",
            target: ""
          },
          tracking_necessary: {
            text: language.pages.privacy.collecting_data.tracking.necessary,
            link: "",
            target: ""
          },
          tracking_type: {
            text: language.pages.privacy.collecting_data.tracking.type,
            link: "",
            target: ""
          },
          tracking_administered: {
            text: language.pages.privacy.collecting_data.tracking.administered,
            link: "",
            target: ""
          },
          tracking_purpose: {
            text: language.pages.privacy.collecting_data.tracking.purpose,
            link: "",
            target: ""
          },
          tracking_cookies_policy: {
            text: language.pages.privacy.collecting_data.tracking.cookies_policy,
            link: "",
            target: ""
          },
          tracking_cookies_policy_type: {
            text: language.pages.privacy.collecting_data.tracking.cookies_policy_type,
            link: "",
            target: ""
          },
          tracking_cookies_policy_administered: {
            text: language.pages.privacy.collecting_data.tracking.cookies_policy_administered,
            link: "",
            target: ""
          },
          tracking_cookies_purpose: {
            text: language.pages.privacy.collecting_data.tracking.cookies_purpose,
            link: "",
            target: ""
          },
          tracking_cookies_functionality: {
            text: language.pages.privacy.collecting_data.tracking.cookies_functionality,
            link: "",
            target: ""
          },
          tracking_cookies_functionality_type: {
            text: language.pages.privacy.collecting_data.tracking.cookies_functionality_type,
            link: "",
            target: ""
          },
          tracking_beacons_text: {
            text: language.pages.privacy.collecting_data.tracking.beacons_text,
            link: "",
            target: ""
          },
          tracking_cookies_functionality_administered: {
            text: language.pages.privacy.collecting_data.tracking.cookies_functionality_administered,
            link: "",
            target: ""
          },
          tracking_cookies_website: {
            text: language.pages.privacy.collecting_data.tracking.cookies_website,
            link: "",
            target: ""
          }
          ,
          tracking_more: {
            text: language.pages.privacy.collecting_data.tracking.more,
            link: "",
            target: ""
          }
        }
      },
      use_personal: {
        header: language.pages.privacy.collecting_data.use_personal.header,
        content: {
          header: {
            text: language.pages.privacy.collecting_data.use_personal.text,
            link: "",
            target: ""
          },
          service: {
            text: `${language.pages.privacy.collecting_data.use_personal.service_title}${language.pages.privacy.collecting_data.use_personal.service_text}`,
            link: "",
            target: ""
          },
          manage_account: {
            text: `${language.pages.privacy.collecting_data.use_personal.manage_account_title}${language.pages.privacy.collecting_data.use_personal.manage_account_text}`,
            link: "",
            target: ""
          },
          performance: {
            text: `${language.pages.privacy.collecting_data.use_personal.performance_title}${language.pages.privacy.collecting_data.use_personal.performance_text}`,
            link: "",
            target: ""
          },
          provide: {
            text: `${language.pages.privacy.collecting_data.use_personal.provide_title}${language.pages.privacy.collecting_data.use_personal.provide_text}`,
            link: "",
            target: ""
          },
          manage_request: {
            text: `${language.pages.privacy.collecting_data.use_personal.manage_request_title}${language.pages.privacy.collecting_data.use_personal.manage_request_text}`,
            link: "",
            target: ""
          },
          business: {
            text: `${language.pages.privacy.collecting_data.use_personal.business_title}${language.pages.privacy.collecting_data.use_personal.business_text}`,
            link: "",
            target: ""
          },
          other: {
            text: `${language.pages.privacy.collecting_data.use_personal.other_title}${language.pages.privacy.collecting_data.use_personal.other_text}`,
            link: "",
            target: ""
          },
          situations: {
            text: language.pages.privacy.collecting_data.use_personal.situations,
            link: "",
            target: ""
          },
          web_provider: {
            text: `${language.pages.privacy.collecting_data.use_personal.web_provider_title}${language.pages.privacy.collecting_data.use_personal.web_provider_text}`,
            link: "",
            target: ""
          },
          business_transfer: {
            text: `${language.pages.privacy.collecting_data.use_personal.business_transfer_title}${language.pages.privacy.collecting_data.use_personal.business_transfer_text}`,
            link: "",
            target: ""
          },
          affiliates: {
            text: `${language.pages.privacy.collecting_data.use_personal.affiliates_title}${language.pages.privacy.collecting_data.use_personal.affiliates_text}`,
            link: "",
            target: ""
          },
          business_partners: {
            text: `${language.pages.privacy.collecting_data.use_personal.business_partners_title}${language.pages.privacy.collecting_data.use_personal.business_partners_text}`,
            link: "",
            target: ""
          },
          other_users: {
            text: `${language.pages.privacy.collecting_data.use_personal.other_users_title}${language.pages.privacy.collecting_data.use_personal.other_users_text}`,
            link: "",
            target: ""
          },
          content_title: {
            text: `${language.pages.privacy.collecting_data.use_personal.content_title}${language.pages.privacy.collecting_data.use_personal.content_text}`,
            link: "",
            target: ""
          }
        }
      },
      retention: {
        header: language.pages.privacy.collecting_data.retention.header,
        content: {
          retent: {
            text: language.pages.privacy.collecting_data.retention.retent,
            link: "",
            target: ""
          },
          usage: {
            text: language.pages.privacy.collecting_data.retention.usage,
            link: "",
            target: ""
          }
        }
      },
      transfer: {
        header: language.pages.privacy.collecting_data.transfer.header,
        content: {
          information: {
            text: language.pages.privacy.collecting_data.transfer.information,
            link: "",
            target: ""
          },
          consent: {
            text: language.pages.privacy.collecting_data.transfer.consent,
            link: "",
            target: ""
          },
          company: {
            text: language.pages.privacy.collecting_data.transfer.company,
            link: "",
            target: ""
          }
        }
      },
      disclosure: {
        header: language.pages.privacy.collecting_data.disclosure.header,
        content: {
          business_title: {
            text: language.pages.privacy.collecting_data.disclosure.business_title,
            link: "",
            target: ""
          },
          business_text: {
            text: language.pages.privacy.collecting_data.disclosure.business_text,
            link: "",
            target: ""
          },
          law_title: {
            text: language.pages.privacy.collecting_data.disclosure.law_title,
            link: "",
            target: ""
          },
          law_text: {
            text: language.pages.privacy.collecting_data.disclosure.law_text,
            link: "",
            target: ""
          },
          legal_title: {
            text: language.pages.privacy.collecting_data.disclosure.legal_title,
            link: "",
            target: ""
          },
          legal_text: {
            text: language.pages.privacy.collecting_data.disclosure.legal_text,
            link: "",
            target: ""
          },
          comply: {
            text: language.pages.privacy.collecting_data.disclosure.comply,
            link: "",
            target: ""
          },
          protect: {
            text: language.pages.privacy.collecting_data.disclosure.protect,
            link: "",
            target: ""
          },
          prevent: {
            text: language.pages.privacy.collecting_data.disclosure.prevent,
            link: "",
            target: ""
          },
          personal_safety: {
            text: language.pages.privacy.collecting_data.disclosure.personal_safety,
            link: "",
            target: ""
          },
          liability: {
            text: language.pages.privacy.collecting_data.disclosure.liability,
            link: "",
            target: ""
          }
        }
      },
      security: {
        header: language.pages.privacy.collecting_data.security.header,
        content: {
          text: {
            text: language.pages.privacy.collecting_data.security.text,
            link: "",
            target: ""
          }
        }
      },
    },
    children: {
      text: {
        text: language.pages.privacy.collecting_data.children.text,
        link: "",
        target: ""
      },
      rely: {
        text: language.pages.privacy.collecting_data.children.rely,
        link: "",
        target: ""
      }
    },
    links: {
      text: {
        text: language.pages.privacy.collecting_data.links.text,
        link: "",
        target: ""
      },
      responsibility: {
        text: language.pages.privacy.collecting_data.links.responsibility,
        link: "",
        target: ""
      }
    },
    changes: {
      update: {
        text: language.pages.privacy.collecting_data.changes.update,
        link: "",
        target: ""
      },
      let_know: {
        text: language.pages.privacy.collecting_data.changes.let_know,
        link: "",
        target: ""
      },
      advised: {
        text: language.pages.privacy.collecting_data.changes.advised,
        link: "",
        target: ""
      }
    },
    contact: {
      questions: {
        text: language.pages.privacy.collecting_data.contact.questions,
        link: "",
        target: ""
      },
      email: {
        text: language.pages.privacy.collecting_data.contact.email,
        link: "",
        target: ""
      },
      page: {
        text: language.pages.privacy.collecting_data.contact.page,
        link: "",
        target: ""
      },
      page_url: {
        text: language.pages.privacy.collecting_data.contact.page_url,
        link: "https://www.kotlinskidev.pl/contact",
        target: "_self"
      }
    }
  }
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <div className="privacy-wrapper" style={{ width: '80%' }}>
            <AccordionText data-scroll inner={false} title={language.pages.privacy.header} text={privacyContent.main} />
            <AccordionText data-scroll inner={true} title={language.pages.privacy.interpretation} text={privacyContent.interpretation_definitions} />
            <AccordionText data-scroll inner={true} title={language.pages.privacy.collecting_data.header} text={privacyContent.collecting_data} />
            <AccordionText data-scroll inner={false} title={language.pages.privacy.collecting_data.children.header} text={privacyContent.children} />
            <AccordionText data-scroll inner={false} title={language.pages.privacy.collecting_data.links.header} text={privacyContent.links} />
            <AccordionText data-scroll inner={false} title={language.pages.privacy.collecting_data.changes.header} text={privacyContent.changes} />
            <AccordionText data-scroll inner={false} title={language.pages.privacy.collecting_data.contact.header} text={privacyContent.contact} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PrivacyPage;