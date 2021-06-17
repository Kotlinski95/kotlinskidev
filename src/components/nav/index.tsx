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
import { useRef, useEffect } from 'react'

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
            <Button className="cursor_hover" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenuAbout}>
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
              <MenuItem className="menuItem header" onClick={handleCloseMenuAbout}><Link to="/aboutme">{language.header.about}</Link></MenuItem>
              <hr />
              <MenuItem className="menuItem" onClick={handleCloseMenuAbout}><Link to="/aboutme/front-end-development">{language.header.pages.carrier_front}</Link></MenuItem>
              <MenuItem className="menuItem" onClick={handleCloseMenuAbout}><Link to="/aboutme/plc-carrier">{language.header.pages.carrier_plc}</Link></MenuItem>
              <MenuItem className="menuItem" onClick={handleCloseMenuAbout}><Link to="/aboutme/courses">{language.header.pages.courses}</Link></MenuItem>
              <MenuItem className="menuItem" onClick={handleCloseMenuAbout}><Link to="/aboutme/education">{language.header.pages.education}</Link></MenuItem>
            </Menus>
            <Link to="/projects"><li className="line-item cursor_hover">{language.header.projects}</li></Link>
            <Button className="cursor_hover" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenuStack}>
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
        <div className="nav-center line-item cursor_hover">
          <Link to="/">
            <LazyLoad height={70}>
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
              offColor="#171718"
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