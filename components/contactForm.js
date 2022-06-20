const contactForm = () => {
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
              <form data-aos='fade-up'>
                <label for='name'>
                  <input
                    //   v-model="v$.form.data.name.$model"
                    type='text'
                    id='name'
                    name='name'
                    placeholder={'Imię i nazwisko'}
                  />
                </label>

                <label for='email'>
                  <input
                    //   v-model="v$.form.data.email.$model"
                    type='email'
                    id='email'
                    name='email'
                    placeholder='E-mail'
                  />

                  <div
                    className='input-errors'
                    //   v-for="(error, index) of v$.form.data.email.$errors"
                    //   :key="index"
                  >
                    {/* <div className="error-msg">{{ error.$message }}</div> */}
                  </div>
                </label>

                <label for='message'>
                  <textarea
                    //   v-model="v$.form.data.message.$model"
                    placeholder={`W czym możemy pomóc ?`}
                    name='message'
                    id='message'
                    cols='30'
                    rows='10'
                  ></textarea>
                </label>

                <div className='d-flex align-items-center justify-content-end'>
                  <input
                    //   @click="sendData"
                    //   :disabled="v$.form.data.$invalid"
                    className='oan-btn'
                    type='submit'
                    value='Wyślij'
                  />
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
