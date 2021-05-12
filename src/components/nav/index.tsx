import './index.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/adrian_kotlinski.png';
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react'
import { iconEN, iconPL } from '../../language'
import ReactLanguageSelect from 'react-languages-select';
import Switch from "react-switch";
import 'react-languages-select/css/react-languages-select.css';
import 'react-languages-select/scss/react-languages-select.scss';
import { useDispatch } from 'react-redux';
import { setTheme, setLanguage } from '../../reducers/state';
import { useCookies } from 'react-cookie';
import { getCookie } from '../../services';
import LazyLoad from 'react-lazyload';
import Button from '@material-ui/core/Button';
import Menus from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import ReactGA from 'react-ga';

const styles = {
  bmCrossButton: {
    height: '35px',
    width: '35px'
  },
  bmCross: {
    width: '4px',
    height: '25px'
  }
}

const Nav = () => {
  const [areMenusOpen, setAreMenusOpen] = useState(false);
  const bmItem = document.querySelectorAll(".bm-item");
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['language', 'theme']);
  const [checked, setChecked] = useState(getCookie("theme") === "Dark" ? false : true);

  if (!getCookie("theme")) {
    setCookie('theme', "Dark", { path: '/' });
    setChecked(false);
  }
  function handleCloseAfterLink(event: any) {
    setAreMenusOpen(false);
  }
  const [anchorElAbout, setAnchorElAbout] = React.useState<null | HTMLElement>(null);
  const [anchorElStack, setAnchorElStack] = React.useState<null | HTMLElement>(null);
  const handleClickMenuAbout = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseMenuAbout = () => {
    setAnchorElAbout(null);
  };
  const handleClickMenuStack = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElStack(event.currentTarget);
  };

  const handleCloseMenuStack = () => {
    setAnchorElStack(null);
  };


  if (bmItem) {
    bmItem.forEach(element => {
      element.removeEventListener("click", handleCloseAfterLink);
      element.addEventListener("click", handleCloseAfterLink);
    })
  }

  const closeAllMenusOnEsc = (e: any) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      if (areMenusOpen) {
        setAreMenusOpen(false);
      }
    }
  };

  const handleOpen = () => {
    setAreMenusOpen(true);
  }
  const handleClose = () => {
    setAreMenusOpen(false);
  }

  function onSelectLanguage(e) {
    const icons: any = document.getElementsByClassName('flag-select__option__label');
    const languageIcon = icons[0];
    setTimeout(() => {
      switch (e) {
        case 'pt':
          if (icons != null) {
            dispatch(setLanguage("Polski"));
            setCookie('language', "Polski", { path: '/' });
            languageIcon.innerHTML = '';
            const img = document.createElement('img');
            img.src = iconPL;
            img.alt = 'Icon not found';
            img.classList.add('flag-icon');
            languageIcon.appendChild(img);
          }
          break;
        case 'en':
          if (icons != null) {
            dispatch(setLanguage("English"));
            setCookie('language', "English", { path: '/' });
            languageIcon.innerHTML = '';
            const img = document.createElement('img');
            img.src = iconEN;
            img.alt = 'Icon not found';
            img.classList.add('flag-icon');
            languageIcon.appendChild(img);
          }
          break;
      }
      //ref.userLanguage.updateSelected("pt")
    }, 0);
  }

  function handleChange() {
    setTimeout(() => {
      setChecked(!checked);
      if (checked) {
        dispatch(setTheme("Dark"));
        setCookie('theme', "Dark", { path: '/' });
        ReactGA.event({
          category: 'Theme',
          action: 'Theme changed to Dark'
        });
      }
      else {
        dispatch(setTheme("Light"));
        setCookie('theme', "Light", { path: '/' });
        ReactGA.event({
          category: 'Theme',
          action: 'Theme changed to Light'
        });
      }
    }, 0);
  }

  window.onload = function () {
    const icons: any = document.getElementsByClassName('flag-select__option__label');
    const languageIcon = icons[0];
    if (cookies.language) {
      dispatch(setLanguage(cookies.language));
      setTimeout(() => {
        switch (cookies.language) {
          case 'Polski':
            if (icons != null) {
              languageIcon.innerHTML = '';
              const img = document.createElement('img');
              img.src = iconPL;
              img.alt = 'Icon not found';
              img.classList.add('flag-icon');
              languageIcon.appendChild(img);
            }
            break;
          case 'English':
            if (icons != null) {
              languageIcon.innerHTML = '';
              const img = document.createElement('img');
              img.src = iconEN;
              img.alt = 'Icon not found';
              img.classList.add('flag-icon');
              languageIcon.appendChild(img);
            }
            break;
        }
      }, 0);
    }
    else {
      setTimeout(() => {
        switch (languageIcon.innerHTML) {
          case 'Polski':
            if (icons != null) {
              languageIcon.innerHTML = '';
              dispatch(setLanguage("Polski"));
              setCookie('language', "Polski", { path: '/' });
              const img = document.createElement('img');
              img.src = iconPL;
              img.alt = 'Icon not found';
              img.classList.add('flag-icon');
              languageIcon.appendChild(img);
            }
            break;
          case 'English':
            if (icons != null) {
              languageIcon.innerHTML = '';
              dispatch(setLanguage("English"));
              setCookie('language', "English", { path: '/' });
              const img = document.createElement('img');
              img.src = iconEN;
              img.alt = 'Icon not found';
              img.classList.add('flag-icon');
              languageIcon.appendChild(img);
            }
            break;
        }
      }, 0);
    }
  };

  return (
    <div>
      <div className="flex-wrapper">
        <div className="nav-left line-item item-half">
          <ul>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenuAbout}>
              <li className="line-item">
                {language.header.about}
              </li>
            </Button>
            <Menus
              id="simple-menu"
              anchorEl={anchorElAbout}
              keepMounted
              open={Boolean(anchorElAbout)}
              onClose={handleCloseMenuAbout}
            >
              <MenuItem className="menuItem" onClick={handleCloseMenuAbout}><Link to="/aboutme/plc-carrier">{language.header.pages.carrier_plc}</Link></MenuItem>
              <MenuItem className="menuItem" onClick={handleCloseMenuAbout}><Link to="/aboutme/front-end-development">{language.header.pages.carrier_front}</Link></MenuItem>
              <MenuItem className="menuItem" onClick={handleCloseMenuAbout}><Link to="/aboutme/courses">{language.header.pages.courses}</Link></MenuItem>
              <MenuItem className="menuItem" onClick={handleCloseMenuAbout}><Link to="/aboutme/education">{language.header.pages.education}</Link></MenuItem>
            </Menus>
            <Link to="/projects"><li className="line-item">{language.header.projects}</li></Link>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenuStack}>
              <li className="line-item">
                {language.header.stack}
              </li>
            </Button>
            <Menus
              id="simple-menu"
              anchorEl={anchorElStack}
              keepMounted
              open={Boolean(anchorElStack)}
              onClose={handleCloseMenuStack}
            >
              <MenuItem className="menuItem" onClick={handleCloseMenuStack}><Link to="/stack/front-end-developer">{language.header.pages.software_enginner}</Link></MenuItem>
              <MenuItem className="menuItem" onClick={handleCloseMenuStack}><Link to="/stack/automation-engineer">{language.header.pages.automation_enginner}</Link></MenuItem>
            </Menus>
          </ul>
        </div>

        <div className="nav-center line-item">
          <Link to="/">
            <LazyLoad height={70}>
              <img src={logo} alt="Logo" className="nav-logo"></img>
            </LazyLoad>
          </Link>
        </div>
        <div className="nav-right line-item item-half nav-icons">
          <ul>
            <Switch
              checked={checked}
              onChange={handleChange}
              handleDiameter={28}
              offColor="#23222e"
              onColor="#eaedf0"
              offHandleColor="#3d3b52"
              onHandleColor="#D0E2F2"
              height={40}
              width={80}
              borderRadius={6}
              activeBoxShadow="0px 0px 1px 2px #eaedf0"
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    color: "orange",
                    paddingRight: 2
                  }}
                >
                  Dark
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    color: "#3d3b52",
                    paddingRight: 2
                  }}
                >
                  Light
              </div>

              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15
                  }}
                >
                  <img src={moon} />
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "#3d3b52",
                    fontSize: 15
                  }}
                >
                  <img src={sun} className="layout-icon" />
                </div>
              }
              className="react-switch"
              id="small-radius-switch"
            />
            <ReactLanguageSelect
              defaultLanguage="en" languages={["en", "pt"]} customLabels={{ "en": "English", "pt": "Polski" }} selectedSize={14} onSelect={onSelectLanguage} />
          </ul>
        </div>
        <div className="nav-mobile">
          <Menu onClose={handleClose} onOpen={handleOpen} customOnKeyDown={closeAllMenusOnEsc} isOpen={areMenusOpen} right styles={styles}>
            <div className="nav-center-mobile line-item">
              <Link to="/">
                <img src={logo} alt="Logo" className="nav-logo"></img>
              </Link>
            </div>
            <Link to="/" className="menu-item" id="home">{language.header.home}</Link>
            <Link to="/aboutme" className="menu-item" id="buy">{language.header.about}</Link>
            <Link to="/projects" className="menu-item" id="sell">{language.header.projects}</Link>
            <Link to="/stack" className="menu-item" id="agent">{language.header.stack}</Link>
            <Link to="/contact" className="menu-item" id="offices">{language.header.contact}</Link>
            <Link to="/login"><li className="line-item">{language.header.login}</li></Link>
          </Menu>
        </div>

      </div>
    </div>
  );
};
export default Nav;