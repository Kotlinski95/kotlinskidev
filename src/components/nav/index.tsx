import './index.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/myprofile.svg';
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import { useState } from 'react'
import Switch from "react-switch";
import { useDispatch } from 'react-redux';
import { setTheme } from '../../reducers/state';
import { useCookies } from 'react-cookie';
import { getCookie } from '../../services';
import LazyLoad from 'react-lazyload';
import Button from '@material-ui/core/Button';
import Menus from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import ReactGA from 'react-ga';
import DropdownMulti from '../dropdown/index.js'
import NotificationDropdown from '../dropdownNotification/index.js'
import AboutMeNavigation from '../navigation/aboutMeNav';
import StackNavigation from '../navigation/stackNav';

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

  const [clickAboutMe, setClickAboutMe] = useState(false);
  const handleClickAboutMe = () => setClickAboutMe(!clickAboutMe);

  const [clickStack, setClickStack] = useState(false);
  const handleClickStack = () => setClickStack(!clickStack);

  if (!getCookie("theme")) {
    setCookie('theme', "Dark", { path: '/' });
    setChecked(false);
  }
  function handleCloseAfterLink(event: any) {
    setAreMenusOpen(false);
  }

  const [anchorElStack, setAnchorElStack] = React.useState<null | HTMLElement>(null);

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

  return (
    <div>
      <div className="flex-wrapper navigation">
        <div className="nav-left line-item item-half">
          <ul>
          <AboutMeNavigation language={language} click={clickAboutMe} handleClick={handleClickAboutMe} />
          <StackNavigation language={language} click={clickStack} handleClick={handleClickStack} />
            <Button className="cursor_hover" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAboutMe}>
              <li className="line-item">
                {language.header.about}
              </li>
            </Button>
            <Link to="/projects"><li className="line-item cursor_hover">{language.header.projects}</li></Link>
            <Button className="cursor_hover" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickStack}>
              <li className="line-item">
                {language.header.stack}
              </li>
            </Button>
          </ul>
        </div>
        <div className="nav-center line-item cursor_hover">
          <Link to="/">
            <LazyLoad height={60}>
              <img src={logo} alt="Logo" className="nav-logo" ></img>
            </LazyLoad>
          </Link>
        </div>
        <div className="nav-right line-item item-half nav-icons">
          <ul>
            <Switch
              checked={checked}
              onChange={handleChange}
              handleDiameter={28}
              offColor="#53665e"
              onColor="#eaedf0"
              offHandleColor="#2d2d30"
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
                    zIndex: 999,
                    color: "#D0E2F2",
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
                    zIndex: 999,
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
                    fontSize: 15,
                    zIndex: 999
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
                    fontSize: 15,
                    zIndex: 999
                  }}
                >
                  <img src={sun} className="layout-icon" />
                </div>
              }
              className="react-switch cursor_hover"
              id="small-radius-switch"
            />
            <NotificationDropdown language={language} />
            <DropdownMulti language={language}/>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;