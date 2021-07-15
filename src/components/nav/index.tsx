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
import ReactGA from 'react-ga';
import DropdownMulti from '../dropdown/index.js'
import NotificationDropdown from '../dropdownNotification/index.js'
import AboutMeNavigation from '../navigation/aboutMeNav';
import StackNavigation from '../navigation/stackNav';
import CustomLink from '../customLink'
import CustomImage from '../customImage'

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
          <AboutMeNavigation language={language} click={clickAboutMe} role="navigation" aria-label="navigation about" handleClick={handleClickAboutMe} />
          <StackNavigation language={language} click={clickStack} role="navigation" aria-label="navigation stack" handleClick={handleClickStack} />
            <Button className="cursor_hover" role="button" aria-label="simple-menu" aria-haspopup="true" onClick={handleClickAboutMe}>
              <li className="line-item">
                {language.header.about}
              </li>
            </Button>
            <Link to="/projects" title="Link to projects page" aria-label="Link to projects page" referrer-policy = 'no-referrer' rel='noopener'><li className="line-item cursor_hover">{language.header.projects}</li></Link>
            <Button className="cursor_hover" role="button" aria-label="simple-menu" aria-haspopup="true" onClick={handleClickStack}>
              <li className="line-item">
                {language.header.stack}
              </li>
            </Button>
          </ul>
        </div>
        <div className="nav-center line-item cursor_hover">
          <Link to="/" title="Link to homepage" aria-label="Link to homepage" referrer-policy = 'no-referrer' rel='noopener'>
              <CustomImage src={logo} alt="Logo" width='50' height='50' loading='lazy' className="nav-logo" title='Link to homepage' role='link'></CustomImage>
          </Link>
        </div>
        <div className="nav-right line-item item-half nav-icons">
          <ul>
            <li style={{padding: '0'}}><Switch
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
                  <CustomImage src={moon} alt='Dark mode' title='Switch to Light mode' width='20px' height='20px' />
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
                  <CustomImage src={sun} className="layout-icon" alt='Light mode' title='Switch to Dark mode' width='20px' height='20px' />
                </div>
              }
              className="react-switch cursor_hover"
              id="small-radius-switch"
            /></li>
            <li style={{padding: '0'}}><NotificationDropdown language={language} /></li>
            <li style={{padding: '0'}}><DropdownMulti language={language}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;