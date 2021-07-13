import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import {useEffect } from 'react'
import Breadcrumbs from '../components/breadcrumbs'
import Footer from '../components/footer'
import AccordionText from '../components/accordion'
import PageTransitioning from '../components/pageTransitioning/index'

const CookiesPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Cookies"));
  const { HandleMouseoverEffects, title } = props;
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
}, [title]);

  const cookieContent = {
    main: {
      update: {
        text: language.pages.cookies.update,
        link: "",
        target: ""
      },
      explains: {
        text: language.pages.cookies.explains,
        link: "",
        target: ""
      },
      generator: {
        text: language.pages.cookies.generator,
        link: "https://www.privacypolicies.com/cookies-policy-generator/",
        target: "_blank"
      },
      cookies: {
        text: language.pages.cookies.cookies,
        link: "",
        target: ""
      },
      sensitive: {
        text: language.pages.cookies.sensitive,
        link: "",
        target: ""
      }
    },
    interpretation_definitions: {
      interpretation: {
        header: language.pages.cookies.interpretation_definitions.interpretation.header,
        content: {
          interpretation: {
            text: language.pages.cookies.interpretation_definitions.interpretation.text,
            link: "",
            target: ""
          }
        }
      },
      definitions: {
        header: language.pages.cookies.interpretation_definitions.definitions.header,
        content: {
          definition: {
            text: language.pages.cookies.interpretation_definitions.definitions.text,
            link: "",
            target: ""
          },
          company: {
            text: `${language.pages.cookies.interpretation_definitions.definitions.company_title}${language.pages.cookies.interpretation_definitions.definitions.company_text}`,
            link: "",
            target: ""
          },
          cookies: {
            text: `${language.pages.cookies.interpretation_definitions.definitions.cookies_title}${language.pages.cookies.interpretation_definitions.definitions.cookies_text}`,
            link: "",
            target: ""
          },
          website: {
            text: `${language.pages.cookies.interpretation_definitions.definitions.website_title}${language.pages.cookies.interpretation_definitions.definitions.website_text}`,
            link: "",
            target: ""
          },
          website_url: {
            text: language.pages.cookies.interpretation_definitions.definitions.website_url,
            link: "https://www.kotlinskidev.pl",
            target: "_blank"
          },
          you: {
            text: `${language.pages.cookies.interpretation_definitions.definitions.you_title}${language.pages.cookies.interpretation_definitions.definitions.you_text}`,
            link: "",
            target: ""
          },
        }
      }
    },
    cookies: {
      types: {
        header: language.pages.cookies.interpretation_definitions.cookies.text,
        content: {
          persistent: {
            text: language.pages.cookies.interpretation_definitions.cookies.persistent,
            link: "",
            target: ""
          },
          session: {
            text: language.pages.cookies.interpretation_definitions.cookies.session,
            link: "",
            target: ""
          }
          ,
          essential_cookies_text: {
            text: language.pages.cookies.interpretation_definitions.cookies.essential_cookies_text,
            link: "",
            target: ""
          },
          essential_cookies_type: {
            text: language.pages.cookies.interpretation_definitions.cookies.essential_cookies_type,
            link: "",
            target: ""
          },
          essential_cookies_administrated: {
            text: language.pages.cookies.interpretation_definitions.cookies.essential_cookies_administrated,
            link: "",
            target: ""
          },
          essential_cookies_purpose: {
            text: language.pages.cookies.interpretation_definitions.cookies.essential_cookies_purpose,
            link: "",
            target: ""
          },
          functional_cookies_text: {
            text: language.pages.cookies.interpretation_definitions.cookies.functional_cookies_text,
            link: "",
            target: ""
          },
          functional_cookies_type: {
            text: language.pages.cookies.interpretation_definitions.cookies.functional_cookies_type,
            link: "",
            target: ""
          },
          functional_cookies_administrated: {
            text: language.pages.cookies.interpretation_definitions.cookies.functional_cookies_administrated,
            link: "",
            target: ""
          },
          functional_cookies_purpose: {
            text: language.pages.cookies.interpretation_definitions.cookies.functional_cookies_purpose,
            link: "",
            target: ""
          }
        }
      },
      choises: {
        header: language.pages.cookies.interpretation_definitions.choises.header,
        content: {
          text: {
            text: language.pages.cookies.interpretation_definitions.choises.text,
            link: "",
            target: ""
          },
          not_accept: {
            text: language.pages.cookies.interpretation_definitions.choises.not_accept,
            link: "",
            target: ""
          },
          delete: {
            text: language.pages.cookies.interpretation_definitions.choises.delete,
            link: "",
            target: ""
          },
          chrome: {
            text: language.pages.cookies.interpretation_definitions.choises.chrome,
            link: "",
            target: ""
          },
          chrome_link: {
            text: language.pages.cookies.interpretation_definitions.choises.chrome_link,
            link: "https://support.google.com/accounts/answer/32050",
            target: "_blank"
          },
          explorer: {
            text: language.pages.cookies.interpretation_definitions.choises.explorer,
            link: "",
            target: ""
          },
          explorer_link: {
            text: language.pages.cookies.interpretation_definitions.choises.explorer_link,
            link: "https://support.microsoft.com/kb/278835",
            target: "_blank"
          },
          firefox: {
            text: language.pages.cookies.interpretation_definitions.choises.firefox,
            link: "",
            target: ""
          },
          firefox_link: {
            text: language.pages.cookies.interpretation_definitions.choises.firefox_link,
            link: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored",
            target: "_blank"
          },
          safari: {
            text: language.pages.cookies.interpretation_definitions.choises.safari,
            link: "",
            target: ""
          },
          safari_link: {
            text: language.pages.cookies.interpretation_definitions.choises.safari_link,
            link: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
            target: "_blank"
          },
          other: {
            text: language.pages.cookies.interpretation_definitions.choises.other,
            link: "",
            target: ""
          },
        }
      }
    },
    more: {
      update: {
        text: language.pages.cookies.interpretation_definitions.more.text,
        link: "",
        target: ""
      },
      cookies_what_are: {
        text: language.pages.cookies.interpretation_definitions.more.cookies_what_are,
        link: "https://www.privacypolicies.com/blog/cookies/",
        target: "_blank"
      }
    },
    contact: {
      Headers: {
        text: language.pages.cookies.interpretation_definitions.contact.text,
        link: "",
        target: ""
      },
      email: {
        text: language.pages.cookies.interpretation_definitions.contact.email,
        link: "",
        target: ""
      },
      website: {
        text: language.pages.cookies.interpretation_definitions.contact.website,
        link: "",
        target: ""
      },
      website_url: {
        text: language.pages.cookies.interpretation_definitions.contact.website_url,
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
          <div className="cookies-wrapper" style={{ width: '80%' }}>
            <AccordionText data-scroll inner={false} title={language.pages.cookies.header} text={cookieContent.main} />
            <AccordionText data-scroll inner={true} title={language.pages.cookies.interpretation_definitions.header} text={cookieContent.interpretation_definitions} />
            <AccordionText data-scroll inner={true} title={language.pages.cookies.interpretation_definitions.cookies.header} text={cookieContent.cookies} />
            <AccordionText data-scroll inner={false} title={language.pages.cookies.interpretation_definitions.more.header} text={cookieContent.more} />
            <AccordionText data-scroll inner={false} title={language.pages.cookies.interpretation_definitions.contact.header} text={cookieContent.contact} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default CookiesPage;