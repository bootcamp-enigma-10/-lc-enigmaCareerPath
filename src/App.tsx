import { useState, type ReactNode } from "react";
import AppShell from "./components/templates/AppShell/AppShell";
import AuthLayout from "./components/templates/AuthLayout/AuthLayout";
import CareersPage from "./pages/CareersPage/CareersPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import type { Menu } from "./types/menu.type";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState<Menu>("dashboard");

  if (!isLoggedIn) {
    return <AuthLayout><LoginPage onLogin={() => setIsLoggedIn(true)} /></AuthLayout>;
  }

  const pageByMenu: Record<Menu, ReactNode> = {
    dashboard: <DashboardPage />,
    students: <StudentsPage />,
    careers: <CareersPage />,
  };

  return <AppShell activeMenu={activeMenu} onMenuChange={setActiveMenu}>{pageByMenu[activeMenu]}</AppShell>;
}

export default App;