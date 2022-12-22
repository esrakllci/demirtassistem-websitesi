import i18n from "i18next";
import { initReactI18next } from "react-i18next";



i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translations: require("./assets/lang/en.json")
            },
            tr: {
                translations: require("./assets/lang/tr.json")
            }
        },

        lng: "tr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });
i18n.languages = ['en', 'tr'];

export default i18n;