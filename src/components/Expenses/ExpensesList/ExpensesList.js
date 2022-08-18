// styles
import "./ExpensesList.css";

// components
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  const expenseItems = props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return <ul className="expenses-list">{expenseItems}</ul>;
};

export default ExpensesList;
