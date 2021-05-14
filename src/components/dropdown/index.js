import './index.scss';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/myprofile.svg';
import { ReactComponent as PolandIcon } from '../../assets/icons/PolandIcon.svg';
import { ReactComponent as UnitedKingdomIcon } from '../../assets/icons/EnglishIcon.svg';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../reducers/state';
import { useCookies } from 'react-cookie';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';



function DropdownMulti() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['language']);
  if (cookies.language) {
    dispatch(setLanguage(cookies.language));
  }
  else {
    setCookie('language', "Polski", { path: '/' });
    dispatch(setLanguage(cookies.language));
  }
  return (
    <>
      <Navbar>
        <NavItem icon={<BellIcon />} />
        <NavItem id="dropdown-settings" dropdown={true} icon={<CaretIcon />}>
          <DropdownMenu ></DropdownMenu>
        </NavItem>
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
        <a href="#" className="icon-button" onClick={() => props.dropdown && setOpen(!open)}>
          {props.icon}
        </a>
  
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
        <a href="#" className="menu-item" onClick={() => {

          props.goToMenu && setActiveMenu(props.goToMenu);
          !props.goToMenu && setOpen(false);
        }}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
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
              break;
            case 'en':
              dispatch(setLanguage("English"));
              setCookie('language', "English", { path: '/' });
              break;
          }
        }, 0);
      }
      return (
        <a href="#" className="menu-item" onClick={(e) => {
          props.goToMenu && setActiveMenu(props.goToMenu);
          !props.goToMenu && setOpen(false);
          onSelectLanguage(props.language);
        }}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }

    return (
      <div className="dropdown" style={{ height: (menuHeight + 30) }} ref={dropdownRef}>

        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem leftIcon={<ProfileIcon/>}>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              Language
            </DropdownItem>
            <DropdownItem
              leftIcon="🦧"
              rightIcon={<ChevronIcon />}
              goToMenu="animals">
              Animals
            </DropdownItem>

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
              <h6>Language</h6>
            </DropdownItem>
            <LanguageItem language="pl" leftIcon={<PolandIcon />}>Polski</LanguageItem>
            <LanguageItem language="en" leftIcon={<UnitedKingdomIcon />}>English</LanguageItem>

          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h6>Animals</h6>
            </DropdownItem>
            <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
            <DropdownItem leftIcon="🐸">Frog</DropdownItem>
            <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
            <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }
}



export default DropdownMulti;
