import { useState, type ReactNode } from "react";
import AppShell from "./components/templates/AppShell/AppShell";
import CareersPage from "./pages/CareersPage/CareersPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import type { Menu } from "./types/menu.type";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [activeMenu, setActiveMenu] = useState<Menu>("dashboard");

  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  const pageByMenu: Record<Menu, ReactNode> = {
    dashboard: <DashboardPage />,
    students: <StudentsPage />,
    careers: <CareersPage />,
  };

  return (
    <AppShell
      activeMenu={activeMenu}
      onMenuChange={setActiveMenu}
      onLogout={handleLogout}
    >
      {pageByMenu[activeMenu]}
    </AppShell>
  );
}

export default App;
