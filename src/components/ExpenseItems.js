import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 26);
  const expenseAmount = 290.2;
  const expenseTitle = "Car Insurance";

  return (
    <div className="expense-item">
      <div className="expense-date">{expenseDate.toUTCString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{"$" + expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
