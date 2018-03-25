import initializeFirebaseApp from './initializeFirebaseApp';

it('calls initializeApp function with appropriate config', () => {
  const firebaseMock = {
    initializeApp: jest.fn()
  };

  initializeFirebaseApp({firebase: firebaseMock});
  expect(firebaseMock.initializeApp.mock.calls.length).toBe(1);
});
