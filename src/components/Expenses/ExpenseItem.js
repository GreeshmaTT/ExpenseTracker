import "./ExpenseItem.css";
import "../Expenses/ExpenseDate";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const expenseAmount = props.amount;
  const [expenseTitle, setExpenseTitle] = useState(props.title);

  const clickHandler = () => {
    setExpenseTitle("Updated");
    // console.log(expenseTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{"$" + expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
};

export default ExpenseItem;
