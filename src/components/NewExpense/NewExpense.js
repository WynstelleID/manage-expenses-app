import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [editing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  };

  const cancelHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing ? (
        <button type="button" onClick={startEditingHandler}>
          Add New Expenses
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
