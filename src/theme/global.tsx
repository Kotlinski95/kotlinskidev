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
    color: ${({ theme }) => theme.nav.linkColor};
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
  background: ${({ theme }) => theme.nav.darkBackground};
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
  `