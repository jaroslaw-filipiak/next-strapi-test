import Link from 'next/link';
import Image from 'next/dist/client/image';
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
        <Link className='logo d-lg-none' href='/'>
          <Image
            width={60}
            height={23.86}
            className='logo-mobile'
            src='/img/logo.png'
            alt='oan logo'
          />
        </Link>
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
              <div className='col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start'>
                <Link
                  className='logo d-none d-lg-block cursor-pointer'
                  href='/'
                >
                  <Image
                    src='/img/logo.png'
                    alt=''
                    width={130}
                    height='52'
                    data-aos='fade-up'
                    className='cursor-pointer'
                  />
                </Link>
              </div>
              <div className='col-12 col-lg-9 nav--wrapper'>
                <nav
                  className='d-flex flex-column flex-lg-row align-items-center justify-content-lg-between'
                  data-aos='fade-up'
                >
                  <div className='nav--left'>
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
                          router.pathname == '/about'
                            ? 'router-link-active'
                            : ''
                        }
                      >
                        {lang === 'en' ? 'About us' : 'O nas'}
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
                  </div>

                  <div className='nav--right d-flex align-items-center'>
                    <LocaleSwitcher />

                    <Link href='/contact'>
                      <a
                        className={
                          router.pathname == '/contact'
                            ? 'oan-btn no-top-underline d-block'
                            : 'oan-btn d-block'
                        }
                      >
                        {lang === 'en' ? 'Contact us' : 'Napisz do nas'}
                      </a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
