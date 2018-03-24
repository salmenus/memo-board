import i18next from 'i18next';
import englishTranslation from '../i18n/en';

export default ({i18n} = {i18n: i18next}) => {
  i18n.init(
    {
      lng: 'en',
      debug: true,
      fallbackLng: 'cimode',
      saveMissing: false,
      resources: {
        en: {
          translation: englishTranslation
        }
      },
      interpolation: {
        escapeValue: false
      },
      react: {
        wait: false,
        nsMode: 'default'
      }
    }
  );
};
