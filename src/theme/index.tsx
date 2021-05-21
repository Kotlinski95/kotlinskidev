import {getCookie} from '../services'
export type ThemeType = typeof lightTheme; // This is the type definition for my theme object.

export const lightTheme = {
  body: '#E2E2E1',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  burgermenu: "#23222e",
  nav: {
    linkColor: '#33234d',
    lightBackground: '#9c98cd',
    lightBackgroundOpacity: 'rgba(156, 152, 205,0.6)',
    darkBackground: '#f1f1f2',
    menuItemColor: '#33234d',
    menuItemColorHover: '#000000',
    DropdownColorHover: '#9c98cd',
    DropdownColorIcon: '#9c98cd',
  },
  typedText: {
    color: '#33234d',
    colorHover: '#9c98cd',
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
    logoFill: '#9c98cd'
  },
  slick:{
    arrows: "#9c98cd",
  }
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  burgermenu: "#D0E2F2",
  nav: {
    linkColor: '#D0E2F2',
    lightBackground: '#2d2d30',
    lightBackgroundOpacity: 'rgba(63, 63, 63, 0.9)',
    darkBackground: '#171718',
    menuItemColor: '#D0E2F2' ,
    menuItemColorHover: '#000000',
    DropdownColorHover: '#2d2d30',
    DropdownColorIcon: '#D0E2F2',
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
    itemSelected: '#3d3b52',
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
    logoFill: '#D0E2F2'
  },
  slick:{
    arrows: "#D0E2F2",
  }
}
//onst [cookies, setCookie] = useCookies(['theme']);
let theme;
if (document.cookie){
  theme = (getCookie("theme") === "Light") ? lightTheme : darkTheme;
}
else{
  theme = darkTheme; // set the light theme as the default.
}
export default theme;