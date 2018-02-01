import React from 'react';
import { shallow } from 'enzyme';
import {restartGame} from '../actions';
import {TopNav} from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should call onNewGame when new game is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav dispatch={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
    const action = callback.mock.calls[0][0];
    expect(action.type).toEqual('RESTART_GAME');
    console.log(callback.mock.calls);
    expect(action.correctAnswer).toBeGreaterThan(0);
    expect(action.correctAnswer).toBeLessThan(101);
  });

  it('Should call onGenerateAuralUpdate when state-of-game link is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav dispatch={callback} />);
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});
