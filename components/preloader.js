import Image from 'next/image';

const preloader = (props) => {
  return (
    <div className={`${props.isLoading ? 'is-loading' : 'd-none'}`}>
      <Image width={256} height={102} src='/img/logo.png' />
    </div>
  );
};

export default preloader;
