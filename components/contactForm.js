import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const contactForm = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const GET_CF_DATA = gql`
    query getCFData {
      pageContact(locale: "${lang}") {
        data {
          attributes {
            Title
            form_section_content
            map_address
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_CF_DATA);

  console.log(data);

  if (loading) return <p></p>;
  if (error) return <p>error...</p>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      data: {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      },
    };

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    const JSONdata = JSON.stringify(data);

    console.log(JSONdata);

    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/forms`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    if (lang === 'pl') {
      if (response.status === 200) {
        toast.success('Wiadomość została wysłana!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        name.value = '';
        email.value = '';
        message.value = '';

        console.log(name);
      } else {
        toast.warning('Upsss. spróbuj ponownie za jakiś czas..', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    if (lang === 'en') {
      if (response.status === 200) {
        toast.success('Your message was send, thanks!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        name.value = '';
        email.value = '';
        message.value = '';

        console.log(name);
      } else {
        toast.warning('Upsss. try again after 3 minutes', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <section className='contact-form' data-aos='fade-up'>
      <div className='container-fluid'>
        <div className='container box-shadow'>
          <div className='row d-flex flex-column flex-lg-row'>
            <div className='col col-lg-5 pb-5 pb-lg-0' data-aos='fade-up'>
              <h1>
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.pageContact.data.attributes.Title,
                  }}
                ></span>
              </h1>

              <span
                dangerouslySetInnerHTML={{
                  __html: data.pageContact.data.attributes.form_section_content,
                }}
              ></span>

              <span
                dangerouslySetInnerHTML={{
                  __html: data.pageContact.data.attributes.map_address,
                }}
              ></span>
            </div>

            <div
              className='col col-lg-7 d-flex justify-content-end'
              data-aos='fade-up'
            >
              <form onSubmit={handleSubmit} data-aos='fade-up'>
                <label htmlFor='name'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder={
                      lang === 'pl' ? 'Imię i nazwisko' : 'Full name'
                    }
                    required
                  />
                </label>

                <label htmlFor='email'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='E-mail'
                    required
                  />

                  <div
                    className='input-errors'
                    //   v-for="(error, index) of v$.form.data.email.$errors"
                    //   :key="index"
                  >
                    {/* <div className="error-msg">{{ error.$message }}</div> */}
                  </div>
                </label>

                <label htmlFor='message'>
                  <textarea
                    placeholder={
                      lang === 'pl' ? `W czym możemy pomóc ?` : 'Your message'
                    }
                    name='message'
                    id='message'
                    cols='30'
                    rows='10'
                    required
                  ></textarea>
                </label>

                <div className='d-flex align-items-center justify-content-end'>
                  <button type='submit' className='oan-btn'>
                    {lang === 'pl' ? 'Wyślij' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactForm;
