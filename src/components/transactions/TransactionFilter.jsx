const TransactionFilter = ({
  filterType,
  setFilterType,
  search,
  setSearch,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-6">
      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-2 text-sm w-full sm:w-64"
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border rounded px-2 py-2 text-sm w-full sm:w-40"
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default TransactionFilter;