import Head from 'next/head';
import Image from 'next/image';

export default function () {
  return (
    <section className='home-hero' data-aos='fade-up'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row align-items-center justify-content-between'>
            <div className='col text-center text-lg-start'>
              <div>
                <h1>
                  Programmatic &amp; <br></br>
                  <span className='underline'>Data solutions</span>
                </h1>
              </div>
              <h2>
                Sprawdź jak wdrożyć działania programmatic wspierane analizą Big
                Data
              </h2>

              <div className='d-flex flex-column flex-lg-row'>
                {/* <NewsletterForm /> */}
              </div>
            </div>

            <div className='col'>
              <Image src='/img/hero-icon.png' width={499} height={455} />
            </div>

            <div className='flex-column align-items-center d-none d-lg-flex overflow-hidden'>
              <img
                className='home-hero--indicator'
                src='/img/section-indicator.png'
                alt=''
              />
              <img
                className='home-hero--indicator-icon'
                src='/img/icons/arrow-down.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
