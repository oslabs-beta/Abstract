import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import AddButton from '../components/ComponentMenu/AddButton.jsx';
import BootstrapComponent from '../components/ComponentMenu/BootstrapComponent.jsx';

configure({ adapter: new Adapter() });

// describe('React unit tests', () => {

	describe('Test Add Button', () => {
		it('should render a button', () => {
			const wrapper = shallow(<AddButton />);
			expect(wrapper.find('button').text()).toEqual('Add');
			// expect(wrapper.text()).toEqual('Add');
		});
	});
	describe('Test bootstrap buttons', () => {
		it('should render a click', () => {
			const wrapper = shallow(< BootstrapComponent/>);
			// expect(wrapper.find('button').simulate('click'));
		})
	});
// });

