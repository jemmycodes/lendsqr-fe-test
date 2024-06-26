"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdOutlineArrowDropDown } from "react-icons/md";
import sidebarStyles from "@/app/components/layouts/Sidebar/Sidebar.module.scss";
import SidebarList from "@/app/components/layouts/Sidebar/SidebarList";
import { business, customers, settings } from "@/public/constants/constants";
import { useShowSidebar } from "@/app/context/SidebarContext";
import { removeUserCookies } from "@/app/functions/actions";

const Sidebar = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    await removeUserCookies();
    localStorage.removeItem("user");
    router.push("/");
  };

  const { showSidebar } = useShowSidebar();

  const pathname = usePathname();

  return (
    <nav
      className={`${sidebarStyles.sidebar} custom-scrollbar ${showSidebar ? sidebarStyles.mobile_sidebar : ""} `}
    >
      <span>
        <Image
          src="/images/briefcase.svg"
          alt="Briefcase"
          width={16}
          height={16}
        />
        <p>Switch Organization</p>
        <MdOutlineArrowDropDown size="18" />
      </span>
      <Link
        href={"/dashboard"}
        className={`${sidebarStyles.sidebar__item} ${sidebarStyles.dashboard_active}  ${pathname === "/dashboard" ? sidebarStyles.active : ""} `}
      >
        <span>
          <Image
            src="/images/home.svg"
            alt="Briefcase"
            width={18}
            height={18}
          />
          <p className={sidebarStyles.opaque_text}>Dashboard</p>
        </span>
      </Link>

      <ul>
        <h3 className={sidebarStyles.headings}>customers</h3>
        {customers.map(({ icon, path, name }, index) => (
          <SidebarList icon={icon} path={path ?? "/"} name={name} key={index} />
        ))}
      </ul>

      <ul>
        <h3 className={sidebarStyles.headings}>business</h3>
        {business.map(({ icon, name }, index) => (
          <SidebarList icon={icon} path="/" name={name} key={index} />
        ))}
      </ul>

      <ul>
        <h3 className={sidebarStyles.headings}>settings</h3>
        {settings.map(({ icon, name }, index) => (
          <SidebarList icon={icon} path="/" name={name} key={index} />
        ))}
      </ul>
      <div>
        <button onClick={handleLogOut}>
          <Image src="/images/logout.svg" alt="" width={18} height={18} />
          Logout
        </button>
        <p>v.1.2.0</p>
      </div>
    </nav>
  );
};

export default Sidebar;
