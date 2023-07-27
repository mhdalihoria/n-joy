import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const defLanguage = 'en';

i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        // lng: defLanguage,
        backend: {
            loadPath: '/assets/{{lng}}.json',
        },
        fallbackLng: defLanguage,
        supportedLngs: ['en', 'ar'],
        // debug: process.env.REACT_APP_DEBUG,
        debug: false,
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        // saveMissing: true,
        // saveMissingTo: "all",
        // load: 'currentOnly',
        load: 'all',
        // updateMissing: true,
        react: {
            useSuspense: true,
        },
        detection: {
            order: [
                // 'querystring', 'cookie', 'localStorage', 'sessionStorage', 
                // 'navigator', 
                // 'htmlTag', 
                'path'
            ],

            // keys or params to lookup language from
            // lookupQuerystring: 'lng',
            // lookupCookie: 'i18next',
            // lookupLocalStorage: 'i18nextLng',
            // lookupSessionStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            // lookupFromSubdomainIndex: 0,

            // cache user language on
            // caches: ['localStorage', 'cookie'],
            // excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
            // caches: [],
            // optional expire and domain for set cookie
            // cookieMinutes: 10,
            // cookieDomain: 'myDomain',

            // optional htmlTag with lang attribute, the default is:
            // htmlTag: document.documentElement,

            checkWhitelist: true,
            // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
            // cookieOptions: { path: '/', sameSite: 'strict' }
        },
        // detection: {
        //     order: ['path'],
        //     lookupFromPathIndex: 0,
        //     checkWhitelist: true
        // },
    })

// i18n.on('missingKey', function (lngs, namespace, key, res) { console.log('Missing Translate ' + key) });
const changeRouterLanguage =  (lang) => {
    let path = window.location.pathname.split('/').splice(2);
    path.unshift(`/${lang}`);
    path = path.join('/');
    if (path !== window.location.pathname) {
        // history.push({ pathname: path, search: window.location.search });
    
}
}
i18n.on('languageChanged', (lang) => {
    const html = document.querySelector('html');
    html && html.setAttribute('lang', lang);
    changeRouterLanguage(lang)
    // UtilRoute.changeRouterLanguage(lang);

});

export default i18n