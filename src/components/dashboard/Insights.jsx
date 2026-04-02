const Insights = ({ transactions }) => {
  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryMap = {};

  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  let topCategory = "N/A";
  let max = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > max) {
      max = categoryMap[key];
      topCategory = key;
    }
  }

  const totalExpense = expenses.reduce(
    (sum, t) => sum + t.amount,
    0
  );

  return (
    <div className="bg-white border rounded-lg p-4 mt-6">
      <h3 className="text-sm font-medium text-gray-600 mb-2">
        Insights
      </h3>

      <p className="text-sm text-gray-700">
        Highest spending category:{" "}
        <span className="font-medium">{topCategory}</span>
      </p>

      <p className="text-sm text-gray-700 mt-1">
        Total expenses: ₹{totalExpense}
      </p>
    </div>
  );
};

export default Insights;