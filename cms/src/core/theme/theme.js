import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  font:
    '-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  spaces: {
    xxxsmall: 7,
    xxsmall: 10,
    xsmall: 13,
    small: 16,
    medium: 25,
    large: 35,
    xlarge: 45,
    gutter: 16
  },
  fonts: {
    fontSans: '"Open Sans", Tahoma, Verdana, Arial, sans-serif',
    fontSerif: 'Georgia, Times, "Times New Roman", serif',
    fontCondensed: '"Open Sans Condensed", Tahoma, Verdana, Arial, sans-serif',
    fontIp: '"ip", sans-serif',
    fontTrebuchet: 'Trebuchet MS, sans-serif',
    fontCert: 'Times, serif'
  },
  fontSizes: {
    base: '14px',
    XS: '10px',
    S: '12px',
    M: '14px',
    L: '16px',
    XL: '18px',
    XXL: '22px',
    XXXL: '24px'
  },
  defaultLineHeight: 1.57,
  images: {},
  colors: {},
  extra: {}
})
