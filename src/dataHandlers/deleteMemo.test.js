import deleteMemo from './deleteMemo';

it('should call REST API to delete a memo', async () => {

  const deleteMock = jest.fn();
  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
          delete: deleteMock
        })
      })
    })
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  await deleteMemo({firebase: mockFirebase, store: mockStore, id: 1000});
  expect(deleteMock).toHaveBeenCalled();
});

it('should dispatch ADD_MEMO action to update store', async () => {

  const deleteMock = jest.fn();
  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
          delete: deleteMock
        })
      })
    })
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  const result = await deleteMemo({firebase: mockFirebase, store: mockStore, id: 1000});
  expect(result).toBe(1000);
});