import type { ReactNode } from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import type { Menu } from "../../../types/menu.type";
interface AppShellProps {
  children: ReactNode;
  activeMenu: Menu;
  onMenuChange: (menu: Menu) => void;
}
function AppShell({ children, activeMenu, onMenuChange }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row">
        <Sidebar activeMenu={activeMenu} onMenuChange={onMenuChange} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
export default AppShell;
