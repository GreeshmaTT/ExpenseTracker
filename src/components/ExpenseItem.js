import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const expenseAmount = props.amount;
  const expenseTitle = props.title;

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{"$" + expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
