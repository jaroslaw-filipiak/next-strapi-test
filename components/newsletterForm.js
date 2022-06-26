import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const newsletterForm = () => {
  const [isLawInfoVisible, setLawInfoVisibility] = useState(false);
  const [isEmailSended, setSubscription] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      data: {
        email: event.target.email.value,
      },
    };

    const JSONdata = JSON.stringify(data);

    // console.log(JSONdata);

    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/newsletters`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    console.log(result.data);
    console.log(response.status);

    if (response.status === 200) {
      setSubscription(true);
      clearInputData();
    } else {
      setSubscription(false);
    }
  };

  const handleFocus = () => {
    setLawInfoVisibility(true);
    const messageBox = document.querySelector('.newsletter-send__message-box');
    // messageBox.classList.remove('hidden');
    // messageBox.classList.add('d-none');
  };

  const handleBlur = () => {
    setLawInfoVisibility(false);
  };

  const clearInputData = () => {
    const input = document.querySelector('input[type="email"]');

    input.value = '';

    setTimeout(() => {
      const messageBox = document.querySelector(
        '.newsletter-send__message-box'
      );
      messageBox.classList.add('d-none');
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex flex-column flex-md-row flex-md-nowrap align-items-center justify-content-center justify-content-lg-start'>
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
            />
          </label>

          <div className='input-errors'>
            <div className='error-msg'></div>
          </div>
        </div>

        <div>
          <label htmlFor='submit-btn'>
            <input
              className='oan-btn'
              name='submit-btn'
              id='submit-btn'
              type='submit'

              // :value="sendBtn"
            />
          </label>
        </div>
      </div>

      <div
        className={`${
          isEmailSended
            ? 'newsletter-send__message-box'
            : 'newsletter-send__message-box d-none'
        }`}
      >
        <p>Twoja wiadomosć zostala wyslana</p>
      </div>

      <div
        className={`form--law-info ${
          isLawInfoVisible ? 'form--law-info__visible' : ''
        }`}
      >
        Wysyłając formularz, wyrażana jest zgoda na przetwarzanie danych
        osobowych przez Online Advertising Network Sp. z o.o. w celach
        promocyjnych i marketingowych usług własnych oraz informacji handlowych
        o spółce drogą elektroniczną. W każdej chwili będziecie mogli Państwo
        wycofać zgodę. Przetwarzamy Państwa dane osobowe, po Państwa akceptacji,
        aby zapewnić Państwu lepszy kontakt z nami. Naszą zaktualizowaną
        politykę prywatności znajdą Państwo <Link href='/gdpr'>tutaj</Link>
      </div>
    </form>
  );
};

export default newsletterForm;
