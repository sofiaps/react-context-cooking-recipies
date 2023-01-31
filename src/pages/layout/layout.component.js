import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ThemeSelector from "../../components/ThemeSelector";
import { useTheme } from "../../hooks/useTheme";
import "./layout.css";
function RootLayout() {
  const { mode } = useTheme();
  return (
    <div className={`layout ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Outlet />
    </div>
  );
}

export default RootLayout;
