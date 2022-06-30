import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const cookieLaw = () => {
  const [isCookieSet, setCookie] = useState();
  const router = useRouter();
  const lang = router.locale.slice(0, 2);

  useEffect(() => {
    const isCookie = Cookies.get('isCookiesLawAccepted');

    if (isCookie) {
      setCookie(true);
    } else {
      setCookie(false);
    }
  });

  const handleClick = () => {
    const isCookie = Cookies.get('isCookiesLawAccepted');

    if (isCookie) {
      // if cookie is already set , this function do nothing
    } else if (!isCookie & (isCookie === undefined)) {
      console.log('nie ma jeszce żadnych cookiesow więc je ustawiam');
      Cookies.set('isCookiesLawAccepted', 'yes', { expires: 365 });
      setCookie(true);
    }

    setCookie();
  };

  return (
    <div
      class={
        isCookieSet
          ? 'd-none container-fluid cookie-law-banner'
          : `container-fluid cookie-law-banner`
      }
    >
      <div class='container'>
        <div class='row'>
          <div class='cookie-law-banner--content'>
            <p>
              {lang === 'pl'
                ? `Ta strona wykorzystuje pliki cookies zainstalowane przez Online
              Advertising Network lub podmioty trzecie do celów statystycznych,
              marketingowych oraz analitycznych, umożliwiając świadczenie
              Państwu spersonalizowanych usług reklamowych na odwiedzanych
              stronach. Informacje te są udostępniane serwisom społecznościowym,
              reklamodawcom, analitykom i innym dostawcom usług - stronom
              trzecim. W każdym czasie możesz zmienić ustawienia plików cookies
              za pomocą ustawień przeglądarki – ustawienia prywatności. W
              przeciwnym razie zaakceptuj nasze zalecane ustawienia plików
              cookies. Więcej informacji dotyczących wykorzystania plików
              cookies znajdziecie Państwo w naszej `
                : `This website uses cookies installed by Online
                Advertising Network or third parties for statistical purposes,
                marketing and analytical services, enabling the provision
                You personalized advertising services on the people you visit
                sides. This information is shared with social networks,
                advertisers, analysts and other service providers - parties
                third. You can change cookie settings at any time
                using browser settings - privacy settings. In
                otherwise, accept our recommended file settings
                cookies. More information on file usage
                cookies can be found in our `}

              <Link href='/privacy-policy'>
                {lang === 'pl' ? 'Polityce Prywatności' : 'Privacy policy'}
              </Link>
            </p>
            <button onClick={handleClick} class='oan-btn'>
              {lang === 'pl' ? 'Akceptuje' : 'Accept'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cookieLaw;
