import Link from 'next/dist/client/link';

const langSwitcher = () => {
  return (
    <div>
      <Link href='/'>
        <a className={'lang-active'}>en |</a>
      </Link>
      <Link href='/'>
        <a className={''}> pl</a>
      </Link>
    </div>
  );
};

export default langSwitcher;
