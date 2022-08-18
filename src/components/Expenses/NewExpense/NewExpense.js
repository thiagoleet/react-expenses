// react
import { useState } from "react";

// styles
import "./NewExpense.css";

// components
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: crypto.randomUUID(),
    };

    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const addNewExpenseBtn = (
    <p>
      <button type="button" onClick={startEditingHandler}>
        Add New Expense
      </button>
    </p>
  );

  const expenseForm = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}
    />
  );

  return (
    <div className="new-expense">
      {!isEditing && addNewExpenseBtn}
      {isEditing && expenseForm}
    </div>
  );
};

export default NewExpense;
