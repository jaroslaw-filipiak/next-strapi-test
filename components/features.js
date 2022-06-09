export default function () {
  return (
    <section className='home-features'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div
                className='features--heading'
                // v-html='pageHomepage.data.attributes.Features.section_title'
              ></div>
            </div>
          </div>

          <div className='row'>
            <div className='col text-center features--subtitle'>
              {/* <div v-html='pageHomepage.data.attributes.Features.section_subtitle'></div> */}
            </div>
          </div>

          <div className='row items-row items-row-1'>
            <div
              // v-for='item in itemsRow1'
              // v-bind:key='item.id'
              className='col-6 home-feauters--item'
            >
              <div className='item__icon'>
                {/* <img :src="item.feature_item_icon.data.attributes.url" alt="" /> */}
              </div>

              <div className='item__content'>
                {/* <h4 v-html='item.feature_item_title'></h4>
                <p v-html='item.feature_item_subtitle'></p> */}
                {/* <a @click="handleMoreBtn" className="oan-btn" href="#">{{ this.moreBtn }}</a> */}
              </div>
            </div>
          </div>

          <div className='row items-row items-row-21'>
            <div
              // v-for='item in itemsRow2'
              // v-bind:key='item.id'
              className='col-6 home-feauters--item'
            >
              <div className='item__icon'>
                {/* <img :src="item.feature_item_icon.data.attributes.url" alt="" /> */}
              </div>

              <div className='item__content'>
                {/* <h4 v-html='item.feature_item_title'></h4>
                <p v-html='item.feature_item_subtitle'></p> */}
                {/* <a @click="handleMoreBtn" className="oan-btn" href="#">{{ this.moreBtn }}</a> */}
              </div>
            </div>
          </div>

          <div className='row items-row items-row-3'>
            <div
              // v-for='item in itemsRow3'
              // v-bind:key='item.id'
              className='col-6 home-feauters--item'
            >
              <div className='item__icon'>
                {/* <img :src="item.feature_item_icon.data.attributes.url" alt="" /> */}
              </div>

              <div className='item__content'>
                {/* <h4 v-html='item.feature_item_title'></h4>
                <p v-html='item.feature_item_subtitle'></p> */}
                {/* <a @click="handleMoreBtn" className="oan-btn" href="#">{{ this.moreBtn }}</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
