import en from './en';

it('i18n/en returns a JSON object with english language key/value dictionary', () => {
  const enDictionary = Object.getOwnPropertyNames(en).filter(function(
    property
  ) {
    return typeof en[property] === 'string' && en[property].length > 0;
  });

  expect(enDictionary.length).toBe(Object.getOwnPropertyNames(en).length);
});
