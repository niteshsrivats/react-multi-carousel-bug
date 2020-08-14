import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

const primary = `#0093DE`;
const secondary = `#D7261A`;
const textPrimary = `#333333`;
const textSecondary = `#555555`;
const textHint = `#FFFFFF`;

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
        hint: textHint,
      },
      customShadows: {
        blue: 'lol',
      },
    },
    typography: {
      h1: {
        fontSize: `2rem`,
        fontWeight: `500`,
      },
      h2: {
        fontSize: `2.5rem`,
        fontWeight: `700`,
      },
      h3: {
        fontSize: `1.5rem`,
        fontWeight: `500`,
      },
      h6: {
        fontSize: `1rem`,
        fontWeight: `500`,
      },
      subtitle1: {
        fontSize: `1.25rem`,
        fontWeight: `700`,
      },
      subtitle2: {
        fontSize: `1rem`,
        fontWeight: `400`,
      },
      body1: {
        fontSize: `1.5rem`,
        fontWeight: `400`,
        lineHeight: 2,
      },
      body2: {
        fontSize: `1rem`,
        fontWeight: `400`,
        lineHeight: 1.5,
      },
    },
  })
);

export default theme;
