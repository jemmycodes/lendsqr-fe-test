"use client";

import Image from "next/image";
import popoverStyles from "@/app/components/ui/popover/popover.module.scss";
import { useRouter } from "next/navigation";

interface PopoverProps {
  id: string;
  userDetails: UserDetailsProps;
}

const Popover = ({ id, userDetails }: PopoverProps) => {
  const router = useRouter();

  const handleViewDetails = () => {
    localStorage.setItem("user", JSON.stringify(userDetails));
    router.push(`/dashboard/users/${id}`);
  };

  return (
    <div className={popoverStyles.popover}>
      <button onClick={handleViewDetails} style={{ cursor: "pointer" }}>
        <Image src="/images/details.svg" alt="" width={16} height={16} />
        <p>View Details</p>
      </button>
      <span>
        <Image src="/images/blacklist.svg" alt="" width={16} height={16} />
        <p>Blacklist User</p>
      </span>
      <span>
        <Image src="/images/activate.svg" alt="" width={16} height={16} />

        <p>Activate User</p>
      </span>
    </div>
  );
};

export default Popover;
