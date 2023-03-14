/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '@/styles/globals.css'
import Layout from '../components/Layouts/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
