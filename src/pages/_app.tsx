import { AppProps } from 'next/app';

import '@/styles/globals.css';
import 'normalize.css';
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import 'src/styles/globals.css';
import '../../public/styles/base.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
