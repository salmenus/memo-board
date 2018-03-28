import updateMemo from './updateMemo';

it('should call REST API to update memo', async () => {

  const updateMock = jest.fn().mockReturnValue();
  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
          update: updateMock
        })
      })
    })
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  await updateMemo({firebase: mockFirebase, store: mockStore, memo: {
    title: 'new title',
      body: 'new body'
  }});

  expect(updateMock).toHaveBeenCalledWith({
    title: 'new title',
    body: 'new body'
  });
});

it('should dispatch UPDATE_MEMO action to update store', async () => {

  const updateMock = jest.fn().mockReturnValue();
  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
          update: updateMock
        })
      })
    })
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  await updateMemo({firebase: mockFirebase, store: mockStore, memo: {
      title: 'new title',
      body: 'new body'
    }});

  expect(mockStore.dispatch).toHaveBeenCalledWith({
    type: 'UPDATE_MEMO',
    payload:{
      title: 'new title',
      body: 'new body'
    }
  });
});