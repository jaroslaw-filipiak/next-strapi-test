import { useRouter } from 'next/router';

const langSwitcher = () => {
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <a onClick={handleClick} href='/'>
        <a className={lang === 'en' ? 'lang-active' : ''}>en |</a>
      </a>
      <a onClick={handleClick} href='/'>
        <a className={lang === 'pl' ? 'lang-active' : ''}> pl</a>
      </a>
    </div>
  );
};

export default langSwitcher;
