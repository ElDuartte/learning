import "./ExpenseItem.css";

function ExpenseItem() {
  return (
      <div className="expense-item">
        <div className="expense-item__description">Date</div>
        <div>
          <h2>Car Insurance</h2>
          <div className="expense-item__price">$420.69</div>
        </div>
      </div>
  )
}
export default ExpenseItem;
