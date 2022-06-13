import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function () {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:1337/api/page-about')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <section className='home-hero'>
      <div className='container-fluid'>
        <div className='container'>
          {console.log(data)}
          <h1>{data.data.attributes.Title}</h1>
          <p>{data.data.attributes.locale}</p>
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
              {/* <img
                className='home-hero--indicator'
                src='/img/section-indicator.png'
                alt=''
              />
              <img
                className='home-hero--indicator-icon'
                src='/img/icons/arrow-down.svg'
                alt=''
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
