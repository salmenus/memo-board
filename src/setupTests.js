import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  init: jest.fn(),
  t: () => jest.fn().mockReturnValue('t')
}));

configure({ adapter: new Adapter() });
