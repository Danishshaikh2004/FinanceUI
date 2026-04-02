const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg border hover:shadow-sm transition">
      <p className="text-sm text-gray-500">{title}</p>

      <div className="mt-2 text-xl font-semibold text-gray-800">
        ₹{value}
      </div>
    </div>
  );
};

export default SummaryCard;