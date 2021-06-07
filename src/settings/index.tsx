const Theme = {
    typography: {
        primaryFont: 'Poppins, Roboto, Helvetica, sans-serif',
        secondaryFont: 'Montserrat, Roboto, Ubuntu, sans-serif'
    },
    breakpoints: {
        xs: `(min-width: 512px)`,
        sm: `(min-width: 768px)`,
        smPortrait: `(orientation: portrait) and (min-width: 768px)`,
        md: `(min-width: 992px)`,
        lg: `(min-width: 1200px)`,
        xl: `(min-width: 1440px)`
    },
    structure: {
        paddingMobile: '20px',
        paddingDesktop: '10vw'
    }
}

export default Theme;