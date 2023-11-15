import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';

import 'normalize.css';
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
// import "../../public/styles/global.css";
import '../../public/styles/base.css';

import { theme } from '@/lib/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
