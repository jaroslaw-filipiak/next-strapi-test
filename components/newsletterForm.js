const newsletterForm = () => {
  return (
    <form>
      <div className='d-flex flex-column flex-md-row flex-md-nowrap align-items-center justify-content-center justify-content-lg-start'>
        <div className='position-relative'>
          <label for='email'>
            <input
              // @focus="lawInfoVisible = true"
              // @blur="lawInfoVisible = false"
              // v-model="v$.form.data.email.$model"
              className='home-hero--input'
              type='text'
              name='email'
              id='email'
            />
          </label>

          <div className='input-errors'>
            <div className='error-msg'></div>
          </div>
        </div>

        <div>
          <label for='submit-btn'>
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
