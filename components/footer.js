import Link from 'next/dist/client/link';

export default () => {
  return (
    <footer>
      <div className='container-fluid footer'>
        <div className='container11'>
          <div className='row'>
            <div className='d-flex flex-column flex-wrap flex-xl-row align-items-center justify-content-center'>
              <div className='d-flex align-items-center justify-content-start p-0 footer-col footer-col-1'>
                <strong>
                  <span style={{ paddingRight: '3px' }}>oan</span>
                </strong>
                part of
                <img src='/img/cloud-technologies-footer-logo.png' alt='' />
              </div>

              <div className='footer--menu pt-3 pt-lg-0 text-center text-lg-start p-0 footer-col footer-col-2'>
                <Link href='/offer'> Oferta / </Link>
                <Link href='/about'> O nas / </Link>
                <Link href='/contact'> Kontakt /</Link>
                <Link href='/privacy-policy'>&nbsp;Polityka prywatności /</Link>
                <Link href='/gdpr'> RODO /</Link>
                <Link href='/advertising-privacy-policy'>
                  &nbsp;Polityka prywatności usług reklamowych
                </Link>
              </div>

              <div className='d-flex justify-content-center pt-3 footer-col footer-col-3 ps-1 pe-1'>
                <a
                  className='social-link fb'
                  target='_blank'
                  href='https://www.facebook.com/OnlineAdvertisingNetwork/?ref=br_rs'
                >
                  <img src='/img/icons/fb.png' alt='' />
                </a>
                <a
                  className='social-link social-link--linkedin'
                  target='_blank'
                  href='https://www.linkedin.com/company/oan---online-advertising-network/'
                >
                  <img src='/img/icons/linkedin.png' alt='' />
                </a>
              </div>

              <div className='d-flex justify-content-center pt-4 footer-col footer-col-4'>
                <img src='/img/footer-icons.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
