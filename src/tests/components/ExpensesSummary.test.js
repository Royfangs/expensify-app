import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummery } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummery expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummery expenseCount={23} expensesTotal={233252}/>);
  expect(wrapper).toMatchSnapshot();
});
