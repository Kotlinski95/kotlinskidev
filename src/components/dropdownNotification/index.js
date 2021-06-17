import './index.scss';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Badge } from '@material-ui/core';
import NotificationComponent from '../notification';

function NotificationDropdown(props) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navbar >
                <div className="dropdown-notification cursor_hover" >
                <NavItem  dropdown={true} icon={
                    <Badge badgeContent={1} color="secondary">
                        <BellIcon />
                    </Badge>
                }>
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
                <span className="icon-button" onClick={() => props.dropdown && setOpen(!open)}>
                    {props.icon}
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
                    {props.children}
                </span>
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
                        <DropdownItem goToMenu="main">
                            <NotificationComponent/>
                        </DropdownItem>

                    </div>
                </CSSTransition>
            </div>
        );
    }
}

export default NotificationDropdown;
