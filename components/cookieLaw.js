import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const cookieLaw = () => {
  const [isCookieSet, setCookie] = useState();

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
              {isCookieSet}
              Ta strona wykorzystuje pliki cookies zainstalowane przez Online
              Advertising Network lub podmioty trzecie do celów statystycznych,
              marketingowych oraz analitycznych, umożliwiając świadczenie
              Państwu spersonalizowanych usług reklamowych na odwiedzanych
              stronach. Informacje te są udostępniane serwisom społecznościowym,
              reklamodawcom, analitykom i innym dostawcom usług - stronom
              trzecim. W każdym czasie możesz zmienić ustawienia plików cookies
              za pomocą ustawień przeglądarki – ustawienia prywatności. W
              przeciwnym razie zaakceptuj nasze zalecane ustawienia plików
              cookies. Więcej informacji dotyczących wykorzystania plików
              cookies znajdziecie Państwo w naszej
              <router-link to='/privacy-policy'>
                Polityce Prywatności
              </router-link>
            </p>
            <button onClick={handleClick} class='oan-btn'>
              Akceptuje
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cookieLaw;
