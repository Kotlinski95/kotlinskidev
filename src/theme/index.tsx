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
    lightBackgroundOpacity: 'rgba(107, 128, 150,0.2)',
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