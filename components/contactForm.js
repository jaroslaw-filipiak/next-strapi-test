const contactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      data: {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      },
    };

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

    console.log(result.data);
    console.log(response.status);

    // if (response.status === 200) {
    //   setSubscription(true);
    //   clearInputData();
    // } else {
    //   setSubscription(false);
    // }
  };
  return (
    <section className='contact-form' data-aos='fade-up'>
      <div className='container-fluid'>
        <div className='container box-shadow'>
          <div className='row d-flex flex-column flex-lg-row'>
            <div className='col col-lg-5 pb-5 pb-lg-0' data-aos='fade-up'>
              <h1>
                <span className='underline'>Cześć</span>
              </h1>
              <p>
                Napisz do nas i porozmawiajmy, jak dotrzeć do twoich nowych
                klientów.
              </p>
              <p>
                Online Advertising Network Sp. z o.o. <br></br>
                ul. Zajęcza 4 00-351<br></br>
                Warszawa<br></br>
                team@oan.pl<br></br>
                (+48) 606 414 898
              </p>
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
                    placeholder={'Imię i nazwisko'}
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
                    placeholder={`W czym możemy pomóc ?`}
                    name='message'
                    id='message'
                    cols='30'
                    rows='10'
                    required
                  ></textarea>
                </label>

                <div className='d-flex align-items-center justify-content-end'>
                  <input className='oan-btn' type='submit' value='Wyślij' />
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
