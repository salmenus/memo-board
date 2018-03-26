import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('i18next', () => ({
  init: jest.fn(),
  t: () => jest.fn().mockReturnValue('t')
}));

jest.mock('@firebase/app', () => ({
  firestore: jest.fn().mockReturnValue({
    collection: jest.fn().mockReturnValue({
      get: jest.fn(),
      add: jest.fn(),
      doc: jest.fn().mockReturnValue({
        update: jest.fn(),
        delete: jest.fn()
      })
    })
  })
}));

jest.mock('@firebase/firestore', () => ({}));

configure({ adapter: new Adapter() });
