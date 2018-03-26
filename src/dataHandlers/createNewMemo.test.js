import createNewMemo from './createNewMemo';

it('should call REST API to create a new memo', async () => {

  const mockNewMemo = {id: 1111, data: jest.fn().mockReturnValue({
    creation_date: new Date('2040-12-17T03:24:00')
  })};
  const mockFirestoreAdd = jest.fn().mockReturnValue(Promise.resolve(mockNewMemo));
  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        add: mockFirestoreAdd,
        doc: jest.fn().mockReturnValue({
          get: jest.fn().mockReturnValue(mockNewMemo)
        })
      })
    })
  };

  mockFirebase.firestore.FieldValue = {
    serverTimestamp: jest.fn()
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  expect.assertions(3);
  const result = await createNewMemo({firebase: mockFirebase, store: mockStore});

  expect(mockFirestoreAdd).toHaveBeenCalled();
  expect(result).toHaveProperty('id');
  expect(result).toHaveProperty('creationDate');
});

it('should dispatch ADD_MEMO action to update store', async () => {

  const mockNewMemo = {id: 1111, data: jest.fn().mockReturnValue({
      creation_date: new Date('2040-12-17T03:24:00')
    })};
  const mockFirestoreAdd = jest.fn().mockReturnValue(Promise.resolve(mockNewMemo));
  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        add: mockFirestoreAdd,
        doc: jest.fn().mockReturnValue({
          get: jest.fn().mockReturnValue(mockNewMemo)
        })
      })
    })
  };

  mockFirebase.firestore.FieldValue = {
    serverTimestamp: jest.fn()
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  expect.assertions(1);
  const result = await createNewMemo({firebase: mockFirebase, store: mockStore});

  expect(mockStore.dispatch).toHaveBeenCalledWith({
    type: 'ADD_MEMO',
    memo: {
      id: 1111,
      creationDate: new Date('2040-12-17T03:24:00')
    }
  });
});