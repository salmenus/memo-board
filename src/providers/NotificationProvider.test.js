import React from 'react';
import NotificationProvider from './NotificationProvider';
import mockRxjs from 'rxjs';

jest.mock('rxjs');

it('creates a new observable when instantiated', () => {

  const mockObservable = {
    create: jest.fn().mockReturnValue({
      throttleTime: jest.fn().mockReturnValue({
        subscribe: jest.fn()
      })
    })
  };

  mockRxjs.Observable = mockObservable;

  const provider = new NotificationProvider();
  expect(mockObservable.create.mock.calls.length).toBe(1);
});

it('set throttle time for new observable to 800 milliseconds', () => {

  const mockThrottleTime = jest.fn().mockReturnValue({
    subscribe: jest.fn()
  });

  mockRxjs.Observable = {
    create: jest.fn().mockReturnValue({
      throttleTime: mockThrottleTime
    })
  };

 const provider = new NotificationProvider();
  expect(mockThrottleTime.mock.calls.length).toBe(1);
  expect(mockThrottleTime.mock.calls[0][0]).toBe(800);
});
