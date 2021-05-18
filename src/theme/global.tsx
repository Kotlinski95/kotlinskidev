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
    @media (max-width: 769px) {
      background-color: ${({ theme }) => theme.nav.lightBackgroundOpacity};
    }
  }

  .flex-wrapper .nav-left ul li,
  .flex-wrapper .nav-right ul li {
    color: ${({ theme }) => theme.nav.menuItemColor};
  }
  .flex-wrapper .nav-left ul li:hover,
  .flex-wrapper .nav-right ul li:hover {
    color: ${({ theme }) => theme.nav.menuItemColorHover};
  }

  //==========  Navigation section ==================
  .footer-wrapper{
    background-color: ${({ theme }) => theme.footer.darkBackground};
  }
  .footer-wrapper ul li {
    color: ${({ theme }) => theme.footer.menuItemColor};
  }
  .footer-wrapper ul .line-item:hover {
    color: ${({ theme }) => theme.footer.menuItemColorHover};
  }
  .footer-body .footer-right li a{
    color: ${({ theme }) => theme.footer.menuItemColor};
  }
  .social-icons:hover{
    color: ${({ theme }) => theme.footer.menuItemColorHover};
  }
  .MuiButtonBase-root.menuItem a:hover{
    color: ${({ theme }) => theme.footer.menuItemColorHover};
  }
  //============ material ui- menu, menu items =======
  #simple-menu .MuiPaper-root{
    background-color: ${({ theme }) => theme.footer.lightBackground};
    color: ${({ theme }) => theme.footer.menuItemColor};
  }
  #simple-menu .MuiPaper-root .menuItem:hover{
    color: ${({ theme }) => theme.footer.menuItemColorHover} !important;
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
  // =========== 404 page ============
  #navigation a.navigation:hover {
	  background-color: ${({ theme }) => theme.notFoundPage.itemSelected};
  }
  #wordsearch ul li.selected {
	background-color: ${({ theme }) => theme.notFoundPage.itemSelected};
	color: ${({ theme }) => theme.notFoundPage.itemColor};
}
#main-content,
#navigation a.navigation,
#search form input,
#search form input::placeholder,
#wordsearch ul li {
  color: ${({ theme }) => theme.notFoundPage.itemColor};
}
#navigation a.navigation,
#wordsearch ul li,
#search form input,
::selection{
  background-color: ${({ theme }) => theme.notFoundPage.itemBackground};
}
// ============= scroll-down ===========
.icon-scroll{
    box-shadow: ${({ theme }) => theme.scrollDown.iconShadow};
}
.icon-scroll:before{
    background: ${({ theme }) => theme.scrollDown.iconBackground};
}

//================= tile ===============
.tile-wrapper{
  border: ${({ theme }) => theme.tile.wrapperBorder};
  box-shadow: ${({ theme }) => theme.tile.wrapperShadow};
}
.tile-wrapper:hover .tile-logo{
  filter: ${({ theme }) => theme.tile.logoFilterHover};
}
.tile-wrapper:hover .tile-title{
  color: ${({ theme }) => theme.tile.logoFill};
}
.tile-logo{
  filter: ${({ theme }) => theme.tile.logoFilter};
}
// ================= slick ===============
.slick-prev:before,
.slick-next:before{
  color: ${({ theme }) => theme.slick.arrows};
}
  `;
