const icons = ({ children }) => {
  return (
    <section className={`icons ${children.layout}`} data-aos='fade-up'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <h3>{children.title}</h3>
            </div>
          </div>

          <div
            className='row d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center icons--items-wrapper'
            data-aos='fade-up'
          >
            {children.icons}
          </div>
        </div>
      </div>
    </section>
  );
};

export default icons;
