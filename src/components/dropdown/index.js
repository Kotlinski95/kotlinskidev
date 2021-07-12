import './index.scss';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/myprofile.svg';
import { ReactComponent as PolandIcon } from '../../assets/icons/PolandIcon.svg';
import { ReactComponent as UnitedKingdomIcon } from '../../assets/icons/EnglishIcon.svg';
import { ReactComponent as LanguagesIcon } from '../../assets/icons/languages.svg';
import { ReactComponent as AboutIcon } from '../../assets/icons/about.svg';
import { ReactComponent as ProjectsIcon } from '../../assets/icons/projects.svg';
import { ReactComponent as CvIcon } from '../../assets/icons/cv.svg';
import { ReactComponent as StackIcon } from '../../assets/icons/stack.svg';
import { ReactComponent as ServicesIcon } from '../../assets/icons/services.svg';
import { ReactComponent as ContactIcon } from '../../assets/icons/contact.svg';
import { ReactComponent as AboutPlcIcon } from '../../assets/icons/about_plc.svg';
import { ReactComponent as AboutFrontIcon } from '../../assets/icons/about_front.svg';
import { ReactComponent as AboutEducationIcon } from '../../assets/icons/about_education.svg';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../reducers/state';
import { useCookies } from 'react-cookie';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { setMenu } from '../../reducers/menu'
import { CvPdf } from '../../docs';
import { handleTrackingEvent } from '../../analytics';

function DropdownMulti(props) {
  const language = props.language;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['language']);
  const iconArrow = document.querySelectorAll('.dropdown-menu .navItem-icon')[0];
  if (!cookies.language) {
    setCookie('language', "Polski", { path: '/' });
  }
  dispatch(setLanguage(cookies.language));

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
          dispatch(setMenu("false"));
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  return (
    <>
      <Navbar>
        <div className="dropdown-menu cursor_hover" ref={wrapperRef}>
          <NavItem id="dropdown-settings" className="cursor_hover" dropdown={true} icon={<CaretIcon />}>
            <DropdownMenu ></DropdownMenu>
          </NavItem>
        </div>
      </Navbar>
    </>
  );

  function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }

  function NavItem(props) {
    return (
      <li className="nav-item">
        <span className="icon-button" onClick={() => {
          props.dropdown && setOpen(!open);
          props.dropdown && dispatch(setMenu(open ? "false" : "true"));
        }}>
          <span className={`navItem-icon ${open ? 'rotate' : ''}`}>{props.icon}</span>
        </span>

        {open && props.children}
      </li>
    );
  }

  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    function DropdownItem(props) {
      return (
        <span className="menu-item" onClick={() => {

          props.goToMenu && setActiveMenu(props.goToMenu);
          !props.goToMenu && setOpen(false);
        }}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </span>
      );
    }

    function LanguageItem(props) {
      const dispatch = useDispatch();
      const [cookies, setCookie] = useCookies(['language']);
      dispatch(setLanguage(cookies.language));
      function onSelectLanguage(e) {
        setTimeout(() => {
          switch (e) {
            case 'pl':
              dispatch(setLanguage("Polski"));
              setCookie('language', "Polski", { path: '/' });
              handleTrackingEvent("Language", "Language changed to polish", { page: `${window._store.getState().pageState.page}`, value: 'polish' });
              break;
            case 'en':
              dispatch(setLanguage("English"));
              setCookie('language', "English", { path: '/' });
              handleTrackingEvent("Language", "Language changed to english", { page: `${window._store.getState().pageState.page}`, value: 'english' });
              break;
          }
        }, 0);
      }
      return (
        <span className="menu-item" onClick={(e) => {
          props.goToMenu && setActiveMenu(props.goToMenu);
          !props.goToMenu && setOpen(false);
          onSelectLanguage(props.language);
        }}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </span>
      );
    }

    return (
      <div className="dropdown cursor_hover" style={{ height: (menuHeight + 30) }} ref={dropdownRef}>

        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <Link to="/myprofile/overview"><DropdownItem leftIcon={<ProfileIcon />}>{language.header.myprofile}</DropdownItem></Link>
            <DropdownItem
              leftIcon={<AboutIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="about">
              {language.header.about}
            </DropdownItem>
            <Link to="/projects"><DropdownItem leftIcon={<ProjectsIcon />}>{language.header.projects}</DropdownItem></Link>
            <DropdownItem
              leftIcon={<StackIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="stack">
              {language.header.stack}
            </DropdownItem>
            <DropdownItem
              leftIcon={<ServicesIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="services">
              {language.footer.pages.services}
            </DropdownItem>
            <Link to="/contact"><DropdownItem leftIcon={<ContactIcon />}>{language.footer.pages.contact}</DropdownItem></Link>
            <a href={CvPdf} target='_blank' onClick={() => {
              handleTrackingEvent("CV", "CV clicked", { page: `${window._store.getState().pageState.page}`, source: 'menu' });
            }}><DropdownItem leftIcon={<CvIcon />} >{language.header.cv}</DropdownItem></a>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              {language.header.settings}
            </DropdownItem>

          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'language'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="settings" leftIcon={<ArrowIcon />}>
              <h3>{language.header.language}</h3>
            </DropdownItem>
            <LanguageItem language="pl" leftIcon={<PolandIcon />}>Polski</LanguageItem>
            <LanguageItem language="en" leftIcon={<UnitedKingdomIcon />}>English</LanguageItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h3>{language.header.settings}</h3>
            </DropdownItem>
            <DropdownItem
              leftIcon={<LanguagesIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="language">
              {language.header.language}
            </DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'about'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h3>{language.header.about}</h3>
            </DropdownItem>
            <Link to="/aboutme/front-end-development"><DropdownItem leftIcon={<AboutFrontIcon />}>{language.header.pages.carrier_front}</DropdownItem></Link>
            <Link to="/aboutme/plc-carrier"><DropdownItem leftIcon={<AboutPlcIcon />}>{language.header.pages.carrier_plc}</DropdownItem></Link>
            <Link to="/aboutme/courses"><DropdownItem leftIcon="🦋">{language.header.pages.courses}</DropdownItem></Link>
            <Link to="/aboutme/education"><DropdownItem leftIcon={<AboutEducationIcon />}>{language.header.pages.education}</DropdownItem></Link>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'stack'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h3>{language.header.stack}</h3>
            </DropdownItem>
            <Link to="/stack/front-end-developer"><DropdownItem leftIcon="🦘">{language.header.pages.software_enginner}</DropdownItem></Link>
            <Link to="/stack/automation-engineer"><DropdownItem leftIcon="🐸">{language.header.pages.automation_enginner}</DropdownItem></Link>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'services'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h3>{language.footer.pages.services}</h3>
            </DropdownItem>
            <Link to="/services/web-development"><DropdownItem leftIcon="🦘">{language.footer.pages.web}</DropdownItem></Link>
            <Link to="/services/shopify"><DropdownItem leftIcon="🦋">{language.footer.pages.shopify}</DropdownItem></Link>
            <Link to="/services/PLC"><DropdownItem leftIcon="🐸">{language.footer.pages.plc}</DropdownItem></Link>
          </div>
        </CSSTransition>
      </div>
    );
  }
}



export default DropdownMulti;
