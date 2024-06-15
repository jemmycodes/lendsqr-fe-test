"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import sidebarStyles from "@/app/components/layouts/Sidebar/Sidebar.module.scss";

interface SidebarListProps {
  icon: string;
  path: string;
  name: string;
}

const SidebarList = ({ icon, path, name }: SidebarListProps) => {
  const pathname = usePathname();
  return (
    <Link href={path}>
      <li
        className={`${sidebarStyles.sidebar__item} ${pathname === path ? sidebarStyles.active : ""}`}
      >
        <Image src={icon} alt={name} width={16} height={16} />
        <p> {name}</p>
      </li>
    </Link>
  );
};

export default SidebarList;
