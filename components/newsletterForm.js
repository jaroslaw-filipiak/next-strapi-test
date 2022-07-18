import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';

const newsletterForm = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_LAW_INFO = gql`
    query getLawInfo {
      pageHomepage(locale: "${lang}") {
        data {
          attributes {
            Hero {
              newsletter_law_info
            }
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_LAW_INFO);

  const [isLawInfoVisible, setLawInfoVisibility] = useState(false);
  const [isEmailSended, setSubscription] = useState(false);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  const sendPost = async (e) => {
    e.preventDefault();

    console.log('Sending');

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('11');
        setEmail('22');
        setBody('33');
        setmessage('33');
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      data: {
        email: event.target.email.value,
      },
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/newsletters`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if ((response.status === 200) & (lang === 'pl')) {
      toast.success('Dziękujemy za zapis!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setSubscription(true);
      clearInputData();
    } else if ((response.status !== 200) & (lang === 'pl')) {
      toast.warning('Upsss. spróbuj ponownie za jakiś czas..', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSubscription(false);
    } else if ((response.status === 200) & (lang === 'en')) {
      toast.success('Thanks for subscription', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSubscription(false);
      clearInputData();
    } else if ((response.status !== 200) & (lang === 'en')) {
      toast.warning('Upsss. we have problem , try again', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSubscription(false);
    }
  };

  const handleFocus = () => {
    setLawInfoVisibility(true);
  };

  const handleBlur = () => {
    setLawInfoVisibility(false);
  };

  const clearInputData = () => {
    const input = document.querySelector('input[type="email"]');
    input.value = '';
  };

  return (
    <form onSubmit={sendPost}>
      <div className='newsletter-form d-flex flex-column flex-md-row flex-md-nowrap align-items-center justify-content-center justify-content-lg-start'>
        <div className='position-relative'>
          <label htmlFor='email'>
            <input
              className='home-hero--input'
              type='email'
              name='email'
              id='email'
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={lang === 'pl' ? 'Twój email' : 'Your email'}
            />
          </label>

          <div className='input-errors'>
            <div className='error-msg'></div>
          </div>
        </div>

        <div>
          <label htmlFor='submit-btn'>
            <button
              className='oan-btn'
              name='submit-btn'
              id='submit-btn'
              type='submit'
            >
              {lang === 'pl' ? 'Prześlij' : 'Send'}
            </button>
          </label>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: data.pageHomepage.data.attributes.Hero.newsletter_law_info,
        }}
        className={`form--law-info ${
          isLawInfoVisible ? 'form--law-info__visible' : ''
        }`}
      ></div>
    </form>
  );
};

export default newsletterForm;
