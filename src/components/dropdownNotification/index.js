import './index.scss';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Badge } from '@material-ui/core';
import NotificationComponent from '../notification';
import {setMenuNotification } from '../../reducers/notification'
import { useDispatch } from 'react-redux';

function NotificationDropdown(props) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                  setOpen(false);
                  dispatch(setMenuNotification("false"));
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
            <Navbar >
                <li>
                <div className="dropdown-notification cursor_hover" ref={wrapperRef} >
                <NavItem  dropdown={true} icon={
                    <Badge badgeContent={1} color="secondary">
                        <BellIcon />
                    </Badge>
                }>
                    <DropdownMenu ></DropdownMenu>
                </NavItem>
                </div>
                </li>
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
            <span className="nav-item">
                <span className="icon-button" onClick={() => {
                    props.dropdown && setOpen(!open);
                    props.dropdown && dispatch(setMenuNotification(open ? "false" : "true"));
                }}>
                    {props.icon}
                </span>

                {open && props.children}
            </span>
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
