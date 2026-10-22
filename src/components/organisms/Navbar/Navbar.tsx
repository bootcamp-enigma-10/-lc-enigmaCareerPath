import { Search, Calendar, Bell } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeUser, setActiveUser] = useState("Admin");

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    if (storedUser) {
      setActiveUser(storedUser);
    }
  }, []);

  const initial = activeUser.charAt(0).toUpperCase();
  return (
    <header className="fixed left-64 right-0 top-0 z-10 flex h-16 items-center justify-end border-b border-slate-200 bg-white px-8">
      <div className="flex items-center gap-6">
        <button className="relative text-slate-400 hover:text-slate-600">
          <Bell className="h-5 w-5" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
        </button>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#233D90] text-sm font-bold text-white overflow-hidden">
            {initial}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{activeUser}</p>
            <p className="text-[10px] text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
