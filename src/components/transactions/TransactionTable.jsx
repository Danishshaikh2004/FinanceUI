const TransactionTable = ({ transactions }) => {
  return (
    <div className="bg-white rounded-lg border mt-6 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="text-left p-3">Date</th>
            <th className="text-left p-3">Category</th>
            <th className="text-left p-3">Type</th>
            <th className="text-left p-3">Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-3">{t.date}</td>
              <td className="p-3">{t.category}</td>
              <td className="p-3 capitalize">{t.type}</td>
              <td
                className={`p-3 font-medium ${
                  t.type === "income"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                ₹{t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;