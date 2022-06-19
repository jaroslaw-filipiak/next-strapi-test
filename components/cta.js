const cta = ({ children }) => {
  return (
    <section className='cta'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row' data-aos='fade-up'>
            {children.left}
            {children.right}
          </div>
        </div>
      </div>
    </section>
  );
};

export default cta;
