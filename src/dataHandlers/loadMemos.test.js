import loadMemos from './loadMemos';

it('should call REST API to load memos', async () => {

  const mockResponse = [
    {
      id: 1000,
      data: jest.fn().mockReturnValue({
        title: 'mock title',
        body: 'mock body',
        creation_date: new Date('2040-12-17T03:24:00')
      })
    }
  ];

  const getMock = jest.fn().mockReturnValue(Promise.resolve({
    docs: mockResponse
  }));

  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        get: getMock
      })
    })
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  await loadMemos({firebase: mockFirebase, store: mockStore});
  expect(getMock).toHaveBeenCalled();
});

it('should format loaded memos before turning them', async () => {

  const mockResponse = [
    {
      id: 1000,
      data: jest.fn().mockReturnValue({
        title: 'mock title',
        body: 'mock body',
        creation_date: new Date('2040-12-17T03:24:00')
      })
    }
  ];

  const getMock = jest.fn().mockReturnValue(Promise.resolve({
    docs: mockResponse
  }));

  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        get: getMock
      })
    })
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  const result = await loadMemos({firebase: mockFirebase, store: mockStore});
  expect(result).toEqual([
    {
      id: 1000,
      title: 'mock title',
      body: 'mock body',
      creationDate: new Date('2040-12-17T03:24:00')
    }
  ]);
});

it('should dispatch UPDATE_MEMOS action to update store', async () => {

  const mockResponse = [
    {
      id: 1000,
      data: jest.fn().mockReturnValue({
        title: 'mock title',
        body: 'mock body',
        creation_date: new Date('2040-12-17T03:24:00')
      })
    }
  ];

  const getMock = jest.fn().mockReturnValue(Promise.resolve({
    docs: mockResponse
  }));

  const mockFirebase = {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        get: getMock
      })
    })
  };

  const mockStore = {
    dispatch: jest.fn()
  };

  await loadMemos({firebase: mockFirebase, store: mockStore});
  expect(mockStore.dispatch).toHaveBeenCalledWith({
    type: 'UPDATE_MEMOS',
    payload: [{
      id: 1000,
      title: 'mock title',
      body: 'mock body',
      creationDate: new Date('2040-12-17T03:24:00')
    }]
  });
});
