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
    darkBackground: '#f1f1f2',
    menuItemColor: '#33234d',
    menuItemColorHover: '#000000',
  },
  typedText: {
    color: '#33234d',
  },
  footer: {
    linkColor: '#33234d',
    lightBackground: '#9c98cd',
    darkBackground: '#f1f1f2',
    menuItemColor: '#33234d',
    menuItemColorHover: '#000000',
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
    lightBackground: '#3d3b52',
    darkBackground: '#23222e',
    menuItemColor: '#D0E2F2' ,
    menuItemColorHover: '#000000',
  },
  typedText: {
    color: '#D0E2F2',
  },
  footer: {
    linkColor: '#D0E2F2',
    lightBackground: '#3d3b52',
    darkBackground: '#23222e',
    menuItemColor: '#D0E2F2',
    menuItemColorHover: '#000000',
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