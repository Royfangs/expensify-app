import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//Using toEqual to compare object

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', { note: 'this is test note' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    update: {
      note: 'this is test note'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Tea',
    amount: 5000,
    createdAt: 1000,
    note: 'This was green tea'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object without provided values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    }
  });
});