import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Search from "./search";

const WebTrader = () => {
  return (
    <div className="flex bg-[#111827] h-screen">
      <Sidebar />
      <Search />
      <Dashboard />
    </div>
  );
};

export default WebTrader;
