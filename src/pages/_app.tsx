import type { AppProps } from 'next/app';
import '../assets/styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
