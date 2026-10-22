import type { ReactNode } from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import type { Menu } from "../../../types/menu.type";

interface AppShellProps {
  children: ReactNode;
  activeMenu: Menu;
  onMenuChange: (menu: Menu) => void;
  onLogout: () => void;
}

function AppShell({
  children,
  activeMenu,
  onMenuChange,
  onLogout,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        activeMenu={activeMenu}
        onMenuChange={onMenuChange}
        onLogout={onLogout}
      />
      <Navbar />
      <main className="ml-64 mt-16 p-8">{children}</main>
    </div>
  );
}

export default AppShell;
