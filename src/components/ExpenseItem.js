import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const expenseAmount = props.amount;
  const expenseTitle = props.title;

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{"$" + expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
