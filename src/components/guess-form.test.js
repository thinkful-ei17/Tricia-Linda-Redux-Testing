import React from 'react';
import { shallow, mount } from 'enzyme';

import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire the onMakeGuess callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 10;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it('Should reset the input when the form is submitted', () => {
    const spy = jest.fn();
    const wrapper = mount(<GuessForm dispatch={spy}/>);
    const input = wrapper.find('input[type="number"]');
    console.log('this is the input: ', input.debug());
    input.instance().value = 10;
    wrapper.simulate('submit');
    input.instance().value = "";
    expect(spy).toHaveBeenCalledWith(input.instance().value);
  });
});