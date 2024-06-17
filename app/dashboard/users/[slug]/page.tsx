"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import Error from "@/app/components/layouts/Error/Error";
import { userDetailsTabs } from "@/public/constants/constants";
import useTabbedComponent from "@/app/hooks/useTabbedComponent";
import userDetailsStyles from "@/app/dashboard/users/[slug]/user-details.module.scss";

const UserDetails = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const rawUser = localStorage.getItem("user");

  if (!rawUser) {
    router.push("/dashboard/users");
  }

  const user = rawUser ? (JSON.parse(rawUser) as UserDetailsProps) : null;

  const { handleTabChange, activeTab, tabs } = useTabbedComponent(
    user,
    userDetailsTabs,
  );
  if (!user || user.id !== params.slug) {
    return (
      <div className={userDetailsStyles.users_error}>
        <Error
          heading="Oops, your url looks broken"
          text="User does not exist, check the url to confirm or contact or support if issue persists"
        />
        <Link href="/dashboard/users">
          <FaArrowLeftLong />
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className={`${userDetailsStyles.user_details} hide-scrollbar`}>
      <Link href="/dashboard/users">
        <FaArrowLeftLong />
        Back to Users
      </Link>
      <div className={userDetailsStyles.user_details__header}>
        <h1>User Details</h1>
        <span>
          <button>Blacklist User</button>
          <button>Activate User</button>
        </span>
      </div>

      <section className={userDetailsStyles.user_details__banner}>
        <div className={userDetailsStyles.user_details__banner_top}>
          <figure>
            <AiOutlineUser size={32} />
          </figure>
          <span>
            <h2 className={userDetailsStyles.large_text}>{user.name}</h2>
            <h3>{user.id.slice(0, 10).toUpperCase()}</h3>
          </span>
          <span>
            <h2 className={userDetailsStyles.small_heading}>
              User&apos;s tier
            </h2>
            <div>
              {Array.from({ length: 3 }, (_, index) => (
                <Image
                  src={`/images/star-${index + 1}.svg`}
                  alt="star"
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
            </div>
          </span>
          <span>
            <h2 className={userDetailsStyles.large_text}>&#8358;200,000.00</h2>
            <h3 className={userDetailsStyles.small_heading}>
              9912345678/Providus Bank
            </h3>
          </span>
        </div>
        <span
          className={`${userDetailsStyles.user_details__banner_bottom} hide-scrollbar`}
        >
          {userDetailsTabs.map((tab, index) => (
            <p
              onClick={() => handleTabChange(index)}
              key={index + tab}
              className={
                index === activeTab ? userDetailsStyles.active_tab : ""
              }
            >
              {tab}
            </p>
          ))}
        </span>
      </section>

      <section className={userDetailsStyles.user__details_main_content}>
        {tabs[activeTab]}
      </section>
    </div>
  );
};

export default UserDetails;
