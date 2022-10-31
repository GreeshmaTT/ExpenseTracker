import "./ExpenseItem.css";
import "../Expenses/ExpenseDate";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

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
