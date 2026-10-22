import {
  LayoutDashboard,
  GraduationCap,
  Briefcase,
  Settings,
  LogOut,
} from "lucide-react";
import type { Menu } from "../../../types/menu.type";
import { useEffect, useState } from "react";

interface SidebarProps {
  activeMenu: Menu;
  onMenuChange: (menu: Menu) => void;
  onLogout: () => void;
}

const items = [
  { label: "Dashboard", menu: "dashboard", icon: LayoutDashboard },
  { label: "Master Student List", menu: "students", icon: GraduationCap },
  { label: "Master Career List", menu: "careers", icon: Briefcase },
];

function Sidebar({ activeMenu, onMenuChange, onLogout }: SidebarProps) {
  const [activeUser, setActiveUser] = useState("Admin");

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    if (storedUser) {
      setActiveUser(storedUser);
    }
  }, []);

  const initial = activeUser.charAt(0).toUpperCase();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col justify-between bg-[#0B1B4D] text-white">
      <div>
        <div className="flex items-center gap-3 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-xl font-bold">
            E
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-wide">Enigma Career</h2>
            <p className="text-[10px] text-blue-200">BY ENIGMA CAMP</p>
          </div>
        </div>

        <div className="px-4 py-2">
          <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
            Navigation
          </p>
          <nav className="space-y-1">
            {items.map((item) => (
              <button
                key={item.menu}
                onClick={() => onMenuChange(item.menu as Menu)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeMenu === item.menu
                    ? "bg-white/10 text-white"
                    : "text-blue-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between rounded-lg bg-white/5 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              {initial}
            </div>
            <div>
              <p className="text-xs font-semibold">{activeUser}</p>
              <p className="text-[10px] text-blue-300">Administrator</p>
            </div>
          </div>
          <Settings className="h-4 w-4 cursor-pointer text-blue-300 hover:text-white" />
        </div>
        <button
          onClick={onLogout}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
