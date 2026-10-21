import NavItem from "../../molecules/NavItem/NavItem";
import type { Menu } from "../../../types/menu.type";
interface SidebarProps {
  activeMenu: Menu;
  onMenuChange: (menu: Menu) => void;
}
const items: { label: string; menu: Menu }[] = [
  { label: "Dashboard", menu: "dashboard" },
  { label: "Students", menu: "students" },
  { label: "Careers", menu: "careers" },
];
function Sidebar({ activeMenu, onMenuChange }: SidebarProps) {
  return (
    <aside className="border-r border-slate-200 bg-white p-3 md:w-64">
      <nav aria-label="Main navigation" className="space-y-1">
        {items.map((item) => (
          <NavItem key={item.menu} {...item} active={activeMenu === item.menu} onClick={onMenuChange} />
        ))}
      </nav>
    </aside>
  );
}
export default Sidebar;
