const Navbar = ({ role, setRole }) => {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 border-b">
      <h2 className="text-lg font-medium text-gray-700">
        Dashboard
      </h2>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Role</span>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;