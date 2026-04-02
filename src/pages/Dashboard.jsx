import { useState, useMemo, useRef, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import SummaryCard from "../components/dashboard/SummaryCard";
import Charts from "../components/dashboard/Charts";
import TransactionTable from "../components/transactions/TransactionTable";
import TransactionFilter from "../components/transactions/TransactionFilter";
import AddTransaction from "../components/transactions/AddTransaction";
import Insights from "../components/dashboard/Insights";
import { transactionsData } from "../data/mockData";

const Dashboard = () => {
  // load from localStorage
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        return transactionsData;
      }
    }

    return transactionsData;
  });

  const [role, setRole] = useState("viewer");

  const [filterType, setFilterType] = useState("all");
  const [search, setSearch] = useState("");

  // section refs
  const overviewRef = useRef(null);
  const transactionsRef = useRef(null);
  const insightsRef = useRef(null);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // scroll handler
  const scrollToSection = (section) => {
    if (section === "overview") {
      overviewRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "transactions") {
      transactionsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "insights") {
      insightsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // add transaction
  const handleAddTransaction = (newTx) => {
    setTransactions((prev) => [newTx, ...prev]);
  };

  // totals
  const totalBalance = useMemo(() => {
    let total = 0;

    transactions.forEach((item) => {
      if (item.type === "income") {
        total += item.amount;
      } else {
        total -= item.amount;
      }
    });

    return total;
  }, [transactions]);

  const totalIncome = useMemo(() => {
    return transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
  }, [transactions]);

  const totalExpense = useMemo(() => {
    return transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
  }, [transactions]);

  // filtering
  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchesType =
        filterType === "all" || t.type === filterType;

      const matchesSearch = t.category
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesType && matchesSearch;
    });
  }, [transactions, filterType, search]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar scrollToSection={scrollToSection} />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 min-h-screen bg-gray-50">
        <Navbar role={role} setRole={setRole} />

        <div className="p-6">
          {/* Overview */}
          <section ref={overviewRef}>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <SummaryCard title="Total Balance" value={totalBalance} />
              <SummaryCard title="Income" value={totalIncome} />
              <SummaryCard title="Expenses" value={totalExpense} />
            </div>

            <Charts transactions={transactions} />
          </section>

          {/* Transactions */}
          <section ref={transactionsRef} className="mt-10">
            <TransactionFilter
              filterType={filterType}
              setFilterType={setFilterType}
              search={search}
              setSearch={setSearch}
            />

            {role === "admin" && (
              <AddTransaction onAdd={handleAddTransaction} />
            )}

            <TransactionTable transactions={filteredTransactions} />
          </section>

          {/* Insights */}
          <section ref={insightsRef} className="mt-10">
            <Insights transactions={transactions} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;