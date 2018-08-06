import React from 'react';
import HelloWorld from "./HelloWorld";
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('HelloWorld', () => {
  it('should render HelloWorld', () => {
    const wrapper = mount(<HelloWorld />)
    expect(wrapper.text()).to.equal('Hello World!');
  });
});