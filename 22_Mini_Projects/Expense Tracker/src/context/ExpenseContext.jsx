// This file is implementing React Context API + useReducer for global expense state management. 
// Think of it as a mini Redux store built using React's built-in features.

import { createContext, useContext, useEffect, useReducer } from "react";

// Create a Context object that will hold our expense data
const ExpenseContext = createContext();

// Initial state for useReducer
const initialState = {
  expenses: JSON.parse(localStorage.getItem("expenses")) || [], // Array of all expenses
  loading: false, // Loading state for async operations
  error: null, // Store any errors
};

// Reducer function
// Similar to Redux reducer
// Takes current state and an action, then returns new state
const expenseReducer = (state, action) => {
  switch (action.type) {

    // Add a new expense
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    // Delete expense by id
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload.id
        ),
      };

    // Update an existing expense
    case "UPDATE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id
            ? action.payload // Replace updated expense
            : expense // Keep old expense
        ),
      };

    // Replace entire expenses array
    case "SET_EXPENSES":
      return {
        ...state,
        expenses: action.payload,
      };

    // Update loading state
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    // Update error state
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    // If action type doesn't match anything
    default:
      return state;
  }
};

// Provider component
// Wraps the entire app and provides expense data
export const ExpenseProvider = ({ children }) => {

  // useReducer returns:
  // state -> current state
  // dispatch -> function to send actions to reducer
  const [state, dispatch] = useReducer(
    expenseReducer,
    initialState
  );

  // Runs whenever expenses change
  useEffect(() => {
    try {

      // Save expenses to localStorage
      localStorage.setItem(
        "expenses",
        JSON.stringify(state.expenses)
      );

    } catch (error) {

      console.log(
        "Failed to save expenses to local Storage: ",
        error
      );

      // Store error in state
      dispatch({
        type: "SET_ERROR",
        payload: error,
      });
    }
  }, [state.expenses]);

  // Value that will be shared through Context
  const value = {
    ...state,

    // Function to add expense
    addExpense: (expense) => {

      // Create expense with unique id
      const newExpense = {
        ...expense,
        id: crypto.randomUUID(),
      };

      dispatch({
        type: "ADD_EXPENSE",
        payload: newExpense,
      });
    },

    // Delete expense by id
    deleteExpense: (id) => {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: { id },
      });
    },

    // Update existing expense
    updateExpense: (expense) => {
      dispatch({
        type: "UPDATE_EXPENSE",
        payload: expense,
      });
    },
  };

  // Make data available to all children
  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom Hook
// Allows components to easily access ExpenseContext
export const useExpenses = () => {

  const context = useContext(ExpenseContext);

  // Safety check
  // Prevent using hook outside Provider
  if (context === undefined) {
    throw new Error(
      "useExpenses must be used within an ExpenseProvider"
    );
  }

  return context;
};