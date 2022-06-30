import Image from 'next/image';
import { useRouter } from 'next/router';

const map = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  return (
    <section className='map'>
      <div
        className='container-fluid map--bg'
        data-aos='fade-up'
        style={{ backgroundImage: `url('/img/map-placeholder.jpg')` }}
      >
        <div className='container position-relative'>
          <div className='map-pin'>
            <Image src='/img/map-pin.png' width={36} height={54} />

            <div className='map-pin--animation'>
              <div className='hex hex-1'></div>
              <div className='hex hex-2'></div>
              <div className='hex hex-3'></div>
              <div className='hex hex-4'></div>
            </div>
          </div>

          <div className='row d-none d-lg-flex justify-content-end justify-content-lg-start'>
            <div className='col-12 col-lg-3 map--infobox' data-aos='fade-up'>
              <div data-aos='fade-up' className='map--infobox-city h3'>
                {lang === 'pl' ? 'Warszawa' : 'Warsaw'}
              </div>
              <div data-aos='fade-up' className='map--infobox-address'>
                ul. Marszałkowska 89 <br />
                00-693 {lang === 'pl' ? 'Warszawa' : 'Warsaw'}
              </div>
              <a
                data-aos='fade-up'
                className='oan-btn'
                style={{ width: 'auto' }}
                target='_blank'
                href='https://www.google.pl/maps/place/Marsza%C5%82kowska+89,+00-026+Warszawa/@52.2282182,21.010172,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecce74915a473:0xd2a707ba40286dee!8m2!3d52.2279781!4d21.0123111?shorturl=1'
              >
                {lang === 'pl' ? 'Pokaż dojazd' : 'Destination'}
              </a>
            </div>
          </div>

          <div className='row d-lg-none '>
            <div className='col-12  map--infobox' data-aos='fade-up'>
              <div data-aos='fade-up' className='map--infobox-city h3'>
                {lang === 'pl' ? 'Warszawa' : 'Warsaw'}
              </div>
              <div data-aos='fade-up' className='map--infobox-address'>
                ul. Marszałkowska 89 <br />
                00-693 {lang === 'pl' ? 'Warszawa' : 'Warsaw'}
              </div>
              <a
                data-aos='fade-up'
                className='oan-btn'
                style={{ width: 'auto' }}
                target='_blank'
                href='https://www.google.pl/maps/place/Marsza%C5%82kowska+89,+00-026+Warszawa/@52.2282182,21.010172,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecce74915a473:0xd2a707ba40286dee!8m2!3d52.2279781!4d21.0123111?shorturl=1'
              >
                {lang === 'pl' ? 'Pokaż dojazd' : 'Destination'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default map;
