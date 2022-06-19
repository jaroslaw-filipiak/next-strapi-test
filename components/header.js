import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();

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
        <button className='hamburger hamburger--slider' type='button'>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>
      <section className='header'>
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
                      Oferta
                    </a>
                  </Link>
                  <Link href='/about'>
                    <a
                      className={
                        router.pathname == '/about' ? 'router-link-active' : ''
                      }
                    >
                      O nas
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
                      {' '}
                      Kontakt
                    </a>
                  </Link>
                  {/* <LangSwitcher /> */}

                  <Link href='/contact'>
                    <a
                      className={
                        router.pathname == '/contact'
                          ? 'oan-btn no-top-underline'
                          : 'oan-btn'
                      }
                    >
                      Napisz do nas
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
