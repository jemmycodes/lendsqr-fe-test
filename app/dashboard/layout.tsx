import Header from "@/app/components/layouts/Header/Header";
import { Roboto, Work_Sans } from "next/font/google";
import Sidebar from "@/app/components/layouts/Sidebar/Sidebar";
import dashboardStyles from "@/app/dashboard/Dashboard.module.scss";
import { ShowSidebarProvider } from "@/app/context/SidebarContext";

const dmSans = Work_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const roboto = Roboto({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <ShowSidebarProvider>
      <div
        className={`${roboto.variable} ${dmSans.variable} ${dashboardStyles.container}`}
      >
        <Header />
        <div className={dashboardStyles.dashboard}>
          <Sidebar />
          <main
            className={`${dashboardStyles.dashboard__main_content} hide-scrollbar`}
          >
            {children}
          </main>
        </div>
      </div>
    </ShowSidebarProvider>
  );
};

export default DashboardLayout;
