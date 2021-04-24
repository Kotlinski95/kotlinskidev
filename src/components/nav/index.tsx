import './index.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/adrian_kotlinski.png';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react'

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

  function handleCloseAfterLink(event: any) {
    setAreMenusOpen(false);
  }

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


  return (
    <div>
      <div className="flex-wrapper">
        <div className="nav-left line-item item-half">
          <ul>
            <Link to="/aboutme"><li className="line-item">About me</li></Link>
            <Link to="/projects"><li className="line-item">Projects</li></Link>
            <Link to="/stack"><li className="line-item">Stack</li></Link>
          </ul>
        </div>
        <div className="nav-center line-item">
          <Link to="/">
            <img src={logo} alt="Logo" className="nav-logo"></img>
          </Link>
        </div>
        <div className="nav-right line-item item-half">
          <ul>
            <Link to="/contact"><li className="line-item">Contact</li></Link>
            <Link to="/login"><li className="line-item">Sign in</li></Link>
          </ul>
        </div>
        <div className="nav-mobile">
          <Menu onClose={handleClose} onOpen={handleOpen} customOnKeyDown={closeAllMenusOnEsc} isOpen={areMenusOpen} right styles={styles}>
            <Link to="/" className="menu-item" id="home">Home</Link>
            <Link to="/aboutme" className="menu-item" id="buy">About me</Link>
            <Link to="/projects" className="menu-item" id="sell">Projects</Link>
            <Link to="/stack" className="menu-item" id="agent">Stack</Link>
            <Link to="/contact" className="menu-item" id="offices">Contact</Link>
            <Link to="/login"><li className="line-item">Sign in</li></Link>
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default Nav;