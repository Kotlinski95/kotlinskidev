import {getCookie} from '../services'
export type ThemeType = typeof lightTheme; // This is the type definition for my theme object.

export const lightTheme = {
  body: '#a6eddb',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(180deg,#edfaf7 18.97%,#8fe6cf)',
  burgermenu: "#23222e",
  scrollbarColor: "#33234d",
  scrollbarShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
  nav: {
    linkColor: '#33234d',
    background: 'transparent',
    lightBackground: '#308871',
    lightBackgroundOpacity: 'rgba(156, 152, 205,0.6)',
    darkBackground: '#f1f1f2',
    menuItemColor: '#33234d',
    menuItemColorHover: '#000000',
    DropdownColorHover: '#5ce1bd',
    DropdownColorIcon: '#308871',
    linkHover: '#ffffff',
    navListBackground: '#82c1b0',
  },
  typedText: {
    color: '#1c5344',
    colorHover: '#d0cfde',
  },
  footer: {
    linkColor: '#33234d',
    lightBackground: '#9c98cd',
    darkBackground: '#8fe6cf',
    menuItemColor: '#33234d',
    menuItemColorHover: '#000000',
  },
  notFoundPage:{
    itemSelected: '#227660',
    itemColor: '#33234d',
    itemBackground: 'rgba(0,0,0,0.05)',
  },
  scrollDown:{
    iconShadow: 'inset 0 0 0 2px rgb(39, 109, 87);',
    iconBackground: '#1c5344'
  },
  tile:{
    wrapperBorder: '1px solid #1c5344',
    wrapperShadow: '0px 0px 15px #1c5344',
    logoFilter: 'invert(23%) sepia(51%) saturate(520%) hue-rotate(113deg) brightness(99%) contrast(90%)',
    logoFilterHover: 'invert(23%) sepia(51%) saturate(520%) hue-rotate(113deg) brightness(99%) contrast(90%)',
    logoFill: '#1c5344',
    background: '#f1f1f2'
  },
  slick:{
    arrows: "#1c5344",
  },
  contact:{
    formBackground: 'transparent',
    inputBackground: 'rgba(255,255,255,0.6)',
    inputColor: '#08100e',
    buttonHover: '#060505',
    buttonHoverColor: '#ededed',
    placeholderColor: '#6d6d6d'
  },
  stack: {
    borderColor: '#1c5344',
    color: 'rgb(185, 8, 8)'
  },
  project: {
    color: '#f1f1f2'
  },
  myProfile:{
    backgroundGradient: 'transparent',
    backgroundCategory: '#f1f1f2',
    backgroundBreadCrumbs: 'rgba(0,0,0,0.4)',
    categorySelected: '#e9d5e5',
    categoryHover: '#d5bed0',
    categoryColor: '#FFF',
    imageBorder: '#9d64c6'
  },
  notification:{
    background: "#9c98cd",
    color: "#33234d"
  },
  animation: {
    cursorBorder: "#33234d",
    cursorBorderBackground: "#9d64c6",
    loadingBackground: "#9c98cd",
    transitioningBackground: "#d5bed0"
  },
  hero: {
    rect: "#5fa596",
    g: "#a0f8eb",
    g_circle: "#a0f8eb",
  }
}

export const darkTheme = {
  body: '#1a4137',
  text: '#e1f7f1',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(180deg,#010a08 18.97%,#1c5344)',
  burgermenu: "#D0E2F2",
  scrollbarColor: "#ffffff",
  scrollbarShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
  nav: {
    linkColor: '#D0E2F2',
    background: 'transparent',
    lightBackground: '#2d2d30',
    lightBackgroundOpacity: 'rgba(63, 63, 63, 0.9)',
    darkBackground: '#53665e',
    menuItemColor: '#D0E2F2' ,
    menuItemColorHover: '#000000',
    DropdownColorHover: '#1a4137',
    DropdownColorIcon: '#D0E2F2',
    linkHover: '#ffffff',
    navListBackground: '#1a4137',
  },
  typedText: {
    color: '#D0E2F2',
    colorHover: '#fff',
  },
  footer: {
    linkColor: '#D0E2F2',
    lightBackground: '#2d2d30',
    darkBackground: '#171718',
    menuItemColor: '#D0E2F2',
    menuItemColorHover: '#727272',
  },
  notFoundPage:{
    itemSelected: '#0e604b',
    itemColor: '#D0E2F2' ,
    itemBackground: 'rgba(0,0,0,0.2)',
  },
  scrollDown:{
    iconShadow: 'inset 0 0 0 2px rgb(208, 226, 242);',
    iconBackground: '#D0E2F2',
  },
  tile:{
    wrapperBorder: '1px solid #D0E2F2',
    wrapperShadow: '0px 0px 15px #D0E2F2',
    logoFilter: 'invert(99%) sepia(98%) saturate(293%) hue-rotate(204deg) brightness(113%) contrast(100%)',
    logoFilterHover: 'invert(93%) sepia(2%) saturate(3896%) hue-rotate(179deg) brightness(95%) contrast(101%)',
    logoFill: '#D0E2F2',
    background: '#2d2d30'
  },
  slick:{
    arrows: "#D0E2F2",
  },
  contact:{
    formBackground: 'transparent',
    inputBackground: 'rgba(0,0,0,0.2)',
    inputColor: '#D0E2F2',
    buttonHover: '#e1f7f1',
    buttonHoverColor: '#060505',
    placeholderColor: '#e1f7f1'
  },
  stack: {
    borderColor: '#f1f1f2',
    color: 'rgb(30, 229, 255)'
  },
  project: {
    color: '#f1f1f2'
  },
  myProfile:{
    backgroundGradient: 'transparent',
    backgroundCategory: '#252526',
    backgroundBreadCrumbs: 'rgba(0,0,0,0.4)',
    categorySelected: '#2e2d2d',
    categoryHover: '#2e2d2d',
    categoryColor: '#FFF',
    imageBorder: '#171718'
  },
  notification:{
    background: "#1a4137",
    color: "#FFF"
  },
  animation: {
    cursorBorder: "1px solid #bcd8c8",
    cursorBorderBackground: "#ddeee5",
    loadingBackground: "#1a4137",
    transitioningBackground: "#1a4137"
  },
  hero: {
    rect: "#3E514D",
    g: "#fff",
    g_circle: "#F3FFFD",
  }

}
let theme;
if (document.cookie){
  theme = (getCookie("theme") === "Light") ? lightTheme : darkTheme;
}
else{
  theme = darkTheme; // set the light theme as the default.
}
export default theme;