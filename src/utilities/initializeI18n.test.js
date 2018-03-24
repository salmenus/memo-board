import initializeI18n from './initializeI18n';

it('calls init function with appropriate config', () => {
  const i18nMock = {
    init: jest.fn()
  };

  initializeI18n({i18n: i18nMock});
  expect(i18nMock.init.mock.calls.length).toBe(1);
});
