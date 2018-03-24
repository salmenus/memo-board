import i18next from 'i18next';
import initializeI18n from './initializeI18n';

it('calls init function with appropriate config', () => {
  initializeI18n();
  expect(i18next.init.mock.calls.length).toBe(1);
});
