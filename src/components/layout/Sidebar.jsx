const Sidebar = ({ scrollToSection }) => {
  return (
    <div className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-5">
      <h1 className="text-xl font-semibold mb-8">Finance UI</h1>

      <div className="flex flex-col gap-2 text-sm">
        <button
          onClick={() => scrollToSection("overview")}
          className="text-left px-3 py-2 rounded-md bg-gray-800"
        >
          Dashboard
        </button>

        <button
          onClick={() => scrollToSection("transactions")}
          className="text-left px-3 py-2 rounded-md hover:bg-gray-800"
        >
          Transactions
        </button>

        <button
          onClick={() => scrollToSection("insights")}
          className="text-left px-3 py-2 rounded-md hover:bg-gray-800"
        >
          Insights
        </button>
      </div>
    </div>
  );
};

export default Sidebar;