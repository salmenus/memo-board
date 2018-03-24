import i18next from 'i18next';
import englishTranslation from '../i18n/en';

export default () => {
  i18next.init(
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
