import Header from './header';
import Footer from './footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ToastContainer />
      <Footer />
    </>
  );
}
