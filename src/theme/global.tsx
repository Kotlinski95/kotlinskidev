import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.nav.darkBackground};
    color: ${({ theme }) => theme.text};
  }
  a {
    color: ${({ theme }) => theme.nav.linkColor};
  }

  .main {
    background-color: ${({ theme }) => theme.nav.darkBackground};
  }

  a:hover {
    color: ${({ theme }) => theme.nav.menuItemColorHover};
  }
  //==========  Navigation section ==================

  .flex-wrapper {
    background-color: ${({ theme }) => theme.nav.lightBackground};
  }

  .flex-wrapper .nav-left ul li,
  .flex-wrapper .nav-right ul li {
    color: ${({ theme }) => theme.nav.menuItemColor};
  }
  .flex-wrapper .nav-left ul li:hover,
  .flex-wrapper .nav-right ul li:hover {
    color: ${({ theme }) => theme.nav.menuItemColorHover};
  }
  .bm-burger-bars {
  background: ${({ theme }) => theme.burgermenu};
}

.bm-burger-bars-hover {
  background: ${({ theme }) => theme.nav.darkBackground};
}

.bm-cross {
  background: ${({ theme }) => theme.nav.menuItemColor};
}
.bm-menu {
  background: ${({ theme }) => theme.nav.lightBackground};
}
.bm-item-list {
  color: ${({ theme }) => theme.nav.menuItemColor};
}
.bm-item {
  color: ${({ theme }) => theme.nav.menuItemColor};
}
.flag-select {
  color: ${({ theme }) => theme.nav.menuItemColor};
}
  .flag-select__option__label {
    color: ${({ theme }) => theme.nav.menuItemColor};
  }

  .flag-select__options {
    background: ${({ theme }) => theme.nav.lightBackground};
  }

  .flag-select__option__label:hover {
    color: ${({ theme }) => theme.nav.darkBackground};
  }
  .text-typed::placeholder{
    color: ${({ theme }) => theme.typedText.color};
}
.flag-select {
  color: ${({ theme }) => theme.nav.menuItemColor};
}

.flag-select__option__label {
    color: ${({ theme }) => theme.nav.menuItemColor};
  }

  .flag-select__options {
    background: ${({ theme }) => theme.nav.lightBackground};
  }

  .flag-select__option__label:hover {
    color: ${({ theme }) => theme.nav.darkBackground};
  }
  //==========  Navigation section ==================
  .footer-wrapper{
    background-color: ${({ theme }) => theme.footer.lightBackground};
  }
  .footer-wrapper ul li {
    color: ${({ theme }) => theme.footer.menuItemColor};
  }
  .footer-wrapper ul .line-item:hover {
    color: ${({ theme }) => theme.nav.menuItemColorHover};
  }
  .footer-body .footer-right li a{
    color: ${({ theme }) => theme.footer.menuItemColor};
  }
  .social-icons:hover{
    color: ${({ theme }) => theme.nav.menuItemColorHover};
  }
  //============ material ui- menu, menu items =======
  #simple-menu .MuiPaper-root{
    background-color: ${({ theme }) => theme.footer.lightBackground};
    color: ${({ theme }) => theme.footer.menuItemColor};
  }
  #simple-menu .MuiPaper-root .menuItem:hover{
    color: ${({ theme }) => theme.nav.menuItemColorHover};
} 
//============ dropdown menu =======
.nav-item .icon-button{
  background-color: ${({ theme }) => theme.nav.darkBackground};
  color: ${({ theme }) => theme.nav.darkBackground};
}
.nav-item .icon-button:hover {
  color: ${({ theme }) => theme.nav.darkBackground};
}
.nav-item .icon-button svg{
  fill: ${({ theme }) => theme.nav.DropdownColorIcon};
}
.menu-item .icon-button{
  background-color: ${({ theme }) => theme.nav.lightBackground};
}
.dropdown{
  background-color: ${({ theme }) => theme.nav.darkBackground};
}
.menu-item{
  color: ${({ theme }) => theme.footer.menuItemColor};
}
.menu-item:hover {
    background-color: ${({ theme }) => theme.nav.DropdownColorHover};
  }
//============ breadcrumbs =======
  .breadcrumbs .line-item{
    color: ${({ theme }) => theme.typedText.color};
  }
  .breadcrumbs .line-item:hover{
    color: ${({ theme }) => theme.typedText.colorHover};
  }
  `