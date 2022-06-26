const newsletterForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      data: {
        email: event.target.email.value,
      },
    };

    const JSONdata = JSON.stringify(data);

    console.log(JSONdata);

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

    // console.log(event);
    // console.log(event.target.email.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex flex-column flex-md-row flex-md-nowrap align-items-center justify-content-center justify-content-lg-start'>
        <div className='position-relative'>
          <label htmlFor='email'>
            <input
              // @focus="lawInfoVisible = true"
              // @blur="lawInfoVisible = false"
              // v-model="v$.form.data.email.$model"
              className='home-hero--input'
              type='text'
              name='email'
              id='email'
              required
            />
          </label>

          <div className='input-errors'>
            <div className='error-msg'></div>
          </div>
        </div>

        <div>
          <label htmlFor='submit-btn'>
            <input
              // @click="sendData"
              // :disabled="v$.form.data.$invalid"
              className='oan-btn'
              name='submit-btn'
              id='submit-btn'
              type='submit'
              // :value="sendBtn"
            />
          </label>
        </div>
      </div>

      {/* <div className="{ 'form--law-info__visible': lawInfoVisible }" className="form--law-info"> */}
      {/* <div id="law-info" v-html="pageHomepage.data.attributes.Hero.newsletter_law_info"></div> */}
      {/* </div> */}
    </form>
  );
};

export default newsletterForm;
