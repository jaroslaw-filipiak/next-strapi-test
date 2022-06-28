import Link from 'next/link';
import Image from 'next/dist/client/image';
import LangSwitcher from './langSwitcher';
import LocaleSwitcher from './locale-switcher';
import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const toggleMobileMenu = () => {
    const button = document.querySelector('button.hamburger--slider');
    button.classList.toggle('is-active');

    const mobileMenu = document.querySelector('.mobile-menu--wrapper');
    mobileMenu.classList.toggle('isMobileMenuVisible');
  };

  return (
    <div>
      <div className='hamburger-menu'>
        <a className='logo d-lg-none' href='/index'>
          <Image
            width={60}
            height={23.86}
            className='logo-mobile'
            src='/img/logo.png'
            alt='oan logo'
          />
        </a>
        <button
          onClick={toggleMobileMenu}
          className='hamburger hamburger--slider'
          type='button'
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>
      <section className='header mobile-menu--wrapper '>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row d-flex flex-column flex-lg-row align-items-center'>
              <div className='col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start'>
                <a className='logo d-none d-lg-block' href='/'>
                  <Image
                    src='/img/logo.png'
                    alt=''
                    width={130}
                    height='52'
                    data-aos='fade-up'
                  />
                </a>
              </div>
              <div className='col-12 col-lg-8 nav--wrapper'>
                <nav
                  className='d-flex flex-column flex-lg-row align-items-center'
                  data-aos='fade-up'
                >
                  <Link href='/'>
                    <a
                      className={
                        router.pathname == '/' ? 'router-link-active' : ''
                      }
                    >
                      {lang === 'en' ? 'Offer' : 'Oferta'}
                    </a>
                  </Link>
                  <Link href='/about'>
                    <a
                      className={
                        router.pathname == '/about' ? 'router-link-active' : ''
                      }
                    >
                      {lang === 'en' ? 'About' : 'O nas'}
                    </a>
                  </Link>
                  <Link href='/contact'>
                    <a
                      className={
                        router.pathname == '/contact'
                          ? 'router-link-active'
                          : ''
                      }
                    >
                      {lang === 'en' ? 'Contact' : 'Kontakt'}
                    </a>
                  </Link>
                  <LocaleSwitcher />
                  <LangSwitcher />
                  <Link href='/contact'>
                    <a
                      className={
                        router.pathname == '/contact'
                          ? 'oan-btn no-top-underline'
                          : 'oan-btn'
                      }
                    >
                      {lang === 'en' ? 'Write to us' : 'Napisz do nas'}
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
