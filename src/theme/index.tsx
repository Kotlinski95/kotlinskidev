import {getCookie} from '../services'
export type ThemeType = typeof lightTheme; // This is the type definition for my theme object.

export const lightTheme = {
  body: '#9c98cd',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(to top, #f1f1f2 20% , #9c98cd)',
  burgermenu: "#23222e",
  scrollbarColor: "#33234d",
  scrollbarShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
  nav: {
    linkColor: '#33234d',
    background: 'transparent',
    lightBackground: '#9c98cd',
    lightBackgroundOpacity: 'rgba(156, 152, 205,0.6)',
    darkBackground: '#f1f1f2',
    menuItemColor: '#33234d',
    menuItemColorHover: '#000000',
    DropdownColorHover: '#9c98cd',
    DropdownColorIcon: '#9c98cd',
    linkHover: '#ffffff',
  },
  typedText: {
    color: '#33234d',
    colorHover: '#d0cfde',
  },
  footer: {
    linkColor: '#33234d',
    lightBackground: '#9c98cd',
    darkBackground: '#f1f1f2',
    menuItemColor: '#33234d',
    menuItemColorHover: '#000000',
  },
  notFoundPage:{
    itemSelected: '#9c98cd',
    itemColor: '#33234d',
    itemBackground: 'rgba(0,0,0,0.05)',
  },
  scrollDown:{
    iconShadow: 'inset 0 0 0 1px rgb(144, 116, 181);',
    iconBackground: '#9d64c6'
  },
  tile:{
    wrapperBorder: '1px solid #9c98cd',
    wrapperShadow: '0px 0px 15px #9c98cd',
    logoFilter: 'invert(78%) sepia(88%) saturate(2448%) hue-rotate(191deg) brightness(84%) contrast(89%)',
    logoFilterHover: 'invert(73%) sepia(43%) saturate(707%) hue-rotate(200deg) brightness(84%) contrast(74%)',
    logoFill: '#9c98cd',
    background: '#f1f1f2'
  },
  slick:{
    arrows: "#9c98cd",
  },
  contact:{
    formBackground: '#9c98cd',
    inputBackground: 'rgba(255,255,255,0.6)',
    inputColor: '#33234d',
    buttonHover: '#007bff'
  },
  stack: {
    borderColor: '#9d64c6',
    color: 'rgb(185, 8, 8)'
  },
  project: {
    color: '#f1f1f2'
  },
  myProfile:{
    backgroundGradient: 'linear-gradient(to top, #f1f1f2 30% , #9c98cd)',
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
  }
}

export const darkTheme = {
  body: '#1a4137',
  text: '#FAFAFA',
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
    darkBackground: '#171718',
    menuItemColor: '#D0E2F2' ,
    menuItemColorHover: '#000000',
    DropdownColorHover: '#1a4137',
    DropdownColorIcon: '#D0E2F2',
    linkHover: '#ffffff',
  },
  typedText: {
    color: '#D0E2F2',
    colorHover: '#444446',
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
    iconShadow: 'inset 0 0 0 1px rgb(208, 226, 242);',
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
    formBackground: '#474748',
    inputBackground: 'rgba(0,0,0,0.2)',
    inputColor: '#D0E2F2',
    buttonHover: '#1a4137'
  },
  stack: {
    borderColor: '#f1f1f2',
    color: 'rgb(30, 229, 255)'
  },
  project: {
    color: '#f1f1f2'
  },
  myProfile:{
    backgroundGradient: 'linear-gradient(to top, #171718 30% , #2d2d30)',
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