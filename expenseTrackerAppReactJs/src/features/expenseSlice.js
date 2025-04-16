// features/expense/expenseSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Function to load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('expenseState');
    if (serializedState === null) {
      return undefined; // Return undefined to use default initialState
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};

// Default initial state
const defaultInitialState = {
  expense: [
    {
      id: 1,
      title: 'Mouse',
      amount: 1000,
      groupId: 1,
      date: new Date().toISOString().split('T')[0],
    },
  ],
};

// Use persisted state if available, else default
const initialState = loadFromLocalStorage() || defaultInitialState;
let count=2
const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    AddExpense: (state, action) => {
      const expense = {
        id:count++,
        title: action.payload.title,
        amount: action.payload.amount,
        groupId: action.payload.groupId,
        date: action.payload.date,
      };
      state.expense.push(expense);
      // Save updated state to localStorage
      try {
        localStorage.setItem('expenseState', JSON.stringify(state));
      } catch (err) {
        console.error('Error saving state to localStorage:', err);
      }
    },
    deleteExpense:(state,action)=>{
      console.log(action)
      state.expense=state.expense.filter((exp)=>exp.id!==action.payload)
      localStorage.setItem('expenseState', JSON.stringify(state));
   }
  },
});

export const { AddExpense,deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;