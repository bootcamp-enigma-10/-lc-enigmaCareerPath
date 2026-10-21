import type { Menu } from "../../../types/menu.type";

interface NavItemProps {
  label: string;
  menu: Menu;
  active: boolean;
  onClick: (menu: Menu) => void;
}

function NavItem({ label, menu, active, onClick }: NavItemProps) {
  return (
    <button type="button" onClick={() => onClick(menu)} className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-100"}`}>
      {label}
    </button>
  );
}

export default NavItem;
