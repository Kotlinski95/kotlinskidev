import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body,
  html {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active
  {
   -webkit-box-shadow: ${({ theme }) => theme.contact.webkit};
  }

  input:-webkit-autofill
  {
  -webkit-text-fill-color: ${({ theme }) => theme.contact.inputColor};
  }

  a {
    color: ${({ theme }) => theme.nav.linkColor};
  }

  .main,
  .main-inner {
    background: ${({ theme }) => theme.gradient};
  }

  a:hover {
    //color: ${({ theme }) => theme.nav.menuItemColorHover};
  }

  .c-scrollbar_thumb {
    box-shadow: ${({ theme }) => theme.scrollbarShadow};
    background-color: ${({ theme }) => theme.scrollbarColor};
  }

  //==========  Navigation section ==================

  .flex-wrapper .nav-left ul li,
  .flex-wrapper .nav-right ul li {
    color: ${({ theme }) => theme.nav.menuItemColor};
  }
  .flex-wrapper .nav-left ul li:hover,
  .flex-wrapper .nav-right ul li:hover {
    color: ${({ theme }) => theme.nav.menuItemColorHover};
  }

  .styled-nav--text{
  color: ${({ theme }) => theme.text};
}
.styled-nav::before,
.styled-nav:hover::before{
  background-color: ${({ theme }) => theme.text};
}

.main-navigation-list{
  background-color: ${({ theme }) => theme.nav.navListBackground};
}

  //==========  Footer section ==================
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

  .navigation .MuiButtonBase-root.MuiButton-root.MuiButton-text li:hover,
  .navigation .nav-left ul a li:hover{
    color: ${({ theme }) => theme.nav.linkHover};
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
#search form input{
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
  background-color: ${({ theme }) => theme.tile.background};
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

// ============ contact form ==============
.contact_form-wrapper{
  background-color: ${({ theme }) => theme.contact.formBackground};
}
.contact_form-wrapper h2,
.contact_form-wrapper label{
  color: ${({ theme }) => theme.contact.buttonHover};
}
.contact_form-wrapper input,
.contact_form-wrapper button,
.contact_form-wrapper textarea{
  background-color: ${({ theme }) => theme.contact.inputBackground};
  border: 1px solid  ${({ theme }) => theme.contact.inputColor};
}
.contact_form-wrapper input,
.contact_form-wrapper button,
.contact_form-wrapper textarea,
.contact_form-wrapper .contact-button{
  color: ${({ theme }) => theme.contact.inputColor};
}

.contact-button:hover{
  background-color: ${({ theme }) => theme.contact.buttonHover};
  color: ${({ theme }) => theme.contact.buttonHoverColor};
}
input::placeholder,
textarea::placeholder{
  color: ${({ theme }) => theme.contact.placeholderColor};
}

.CryptoPhoneLink,
.CryptoMailLink{
  color: ${({ theme }) => theme.contact.buttonHover};
}

.CryptoPhoneLink:hover,
.CryptoMailLink:hover{
  color: ${({ theme }) => theme.contact.buttonHoverColor};
}

// ============ stack page ================

.stack-wrapper{
  border-color: ${({ theme }) => theme.stack.borderColor};
}
.stack-hello::after{
  color: ${({ theme }) => theme.stack.color};
}

.stack-tile-title{
  color: ${({ theme }) => theme.stack.borderColor};
}

// ============= project page =============

.project-tile-title{
  color: ${({ theme }) => theme.project.color};
}

// ============= my profile ===============
.myprofile-wrapper{
  background: ${({ theme }) => theme.myProfile.backgroundGradient};
}
.myprofile-wrapper .breadcrumbs{
  background-color: ${({ theme }) => theme.myProfile.backgroundBreadCrumbs};
}
.myprofile-wrapper .selected{
  background-color: ${({ theme }) => theme.myProfile.categorySelected};
}
.myprofile-category__wrapper{
  background-color: ${({ theme }) => theme.myProfile.backgroundCategory};
}
.profileImage-wrapper img {
  border-color: ${({ theme }) => theme.myProfile.imageBorder};
}
.myprofile-nav__wrapper ul li:hover {
  color: ${({ theme }) => theme.myProfile.categoryColor};
  background-color: ${({ theme }) => theme.myProfile.categoryHover};
}

// ================ Notification =============
.notification-wrapper{
  background: ${({ theme }) => theme.notification.background};
  color: ${({ theme }) => theme.notification.color};
}
// ================ Animation =============
.cursor-object{
  border: ${({ theme }) => theme.animation.cursorBorder} !important;
}
.cursor-object::before{
  background-color: ${({ theme }) => theme.animation.cursorBorderBackground} !important;
}
.loading-screen-styled{
  background-color: ${({ theme }) => theme.animation.loadingBackground} !important;
}
.transition-helper{
  background-color: ${({ theme }) => theme.animation.transitioningBackground} !important;
}

// ================= HERO section =========
.hero-background,
.hero-background svg,
.glyph{
  fill: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
}

.hero-background-rect{
  fill: ${({ theme }) => theme.hero.rect};
}
.hero-background-g{
  fill: ${({ theme }) => theme.hero.g};
}
.hero-background-g-circle{
  fill: ${({ theme }) => theme.hero.g_circle};
}

// ================= CV ===================
.cv-link--text{
  color: ${({ theme }) => theme.text};
}
.cv-link::before,
.cv-link:hover::before{
  background-color: ${({ theme }) => theme.text};
}
// ================= Services ===================
.main-services{
  background: ${({ theme }) => theme.services.background};
}

`;
