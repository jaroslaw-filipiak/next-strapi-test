import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  console.log(locales);
  console.log(activeLocale);

  return (
    <div className='locale-switcher'>
      {locales.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <a
            className={
              locale.slice(0, 2) === activeLocale.slice(0, 2)
                ? `lang-active lang-active-${activeLocale.slice(0, 2)}`
                : ''
            }
            key={locale}
          >
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <a>{locale.slice(0, 2)}</a>
            </Link>
          </a>
        );
      })}
    </div>
  );
}
