import { useState } from "react";

const AddTransaction = ({ onAdd }) => {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount || !form.category || !form.date) return;

    onAdd({
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    });

    setForm({
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-4 mt-6 flex flex-col sm:flex-row gap-3"
    >
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="border px-3 py-2 rounded text-sm"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border px-3 py-2 rounded text-sm"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="border px-3 py-2 rounded text-sm"
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border px-2 py-2 rounded text-sm"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm">
        Add
      </button>
    </form>
  );
};

export default AddTransaction;