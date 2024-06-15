import hamburgerStyles from "@/app/components/ui/Hamburger/Hamburger.module.scss";
import { useShowSidebar } from "@/app/context/SidebarContext";

const Hamburger = () => {
  const { showSidebar, handleShowSidebar } = useShowSidebar();

  return (
    <div
      className={`${hamburgerStyles.hamburger_bars} ${showSidebar ? hamburgerStyles.hamburger_bars_active : ""}`}
      onClick={handleShowSidebar}
    >
      <div
        className={`${hamburgerStyles.bar_1} ${showSidebar ? hamburgerStyles.bar_1_active : ""}`}
      ></div>
      <div
        className={`${hamburgerStyles.bar_2} ${showSidebar ? hamburgerStyles.bar_2_active : ""}`}
      ></div>
      <div
        className={`${hamburgerStyles.bar_3} ${showSidebar ? hamburgerStyles.bar_3_active : ""}`}
      ></div>
    </div>
  );
};

export default Hamburger;
