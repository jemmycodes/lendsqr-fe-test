"use client";

import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import userDetailsStyles from "@/app/dashboard/users/[slug]/user-details.module.scss";
import { userDetailsTabs } from "@/public/constants/constants";
import UserInformationList from "@/app/components/User/UserInformationList";
import UserInformationWrapper from "@/app/components/layouts/User/UserInformationWrapper";

const UserDetails = ({ params }: { params: { slug: string } }) => {
  const rawUser = localStorage.getItem("user") ?? null;

  const user = rawUser ? (JSON.parse(rawUser) as UserDetailsProps) : null;

  if (!user) {
    return <p>User not found</p>;
  }

  if (user.id !== params.slug) {
    return <p>User not found</p>;
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
            <h3></h3>
          </span>
          <span>
            <h2 className={userDetailsStyles.large_text}>200,000.00</h2>
            <h3 className={userDetailsStyles.small_heading}>
              9912345678/Providus Bank
            </h3>
          </span>
        </div>
        <span
          className={`${userDetailsStyles.user_details__banner_bottom} hide-scrollbar`}
        >
          {userDetailsTabs.map((tab, index) => (
            <p key={index + tab}>{tab}</p>
          ))}
        </span>
      </section>

      <section className={userDetailsStyles.user__details_main_content}>
        <UserInformationWrapper
          heading="Personal Information"
          className={userDetailsStyles.user__details_main_content}
        >
          <UserInformationList field="Full Name" value={user.name} />
          <UserInformationList field="Phone Number" value={user.phone} />
          <UserInformationList field="Email Address" value={user.email} />
          <UserInformationList field="BVN" value={user.BVN} />
          <UserInformationList field="Gender " value={user.gender} />
          <UserInformationList
            field="Marital Status"
            value={user.marital_status}
          />
          <UserInformationList field="Children" value={user.children} />
          <UserInformationList field="Residence" value={user.residence} />
        </UserInformationWrapper>
        <UserInformationWrapper
          heading="Education and  Employment"
          className={userDetailsStyles.user__details_main_content}
        >
          <UserInformationList
            field="Level of Education"
            value={user.education}
          />
          <UserInformationList
            field="Employment Status"
            value={user.employment}
          />
          <UserInformationList
            field="Sector of Employment"
            value={user.sector}
          />
          <UserInformationList
            field="Duration of Employment"
            value={user.duration + `${user.duration > 1 ? "years" : "year"}`}
          />
          <UserInformationList
            field="Office Email "
            value={user.office_email}
          />
          <UserInformationList
            field="Monthly Income"
            value={user.monthly_income}
          />
          <UserInformationList field="Loan Repayment" value={user.repayment} />
        </UserInformationWrapper>
        <UserInformationWrapper
          heading="Socials"
          className={userDetailsStyles.user__details_main_content}
        >
          <UserInformationList field="Twitter" value={user.twitter} />
          <UserInformationList field="Facebook" value={user.facebook} />
          <UserInformationList field="Instagram" value={user.instagram} />
        </UserInformationWrapper>
        {user.guarantors.map((guarantor, index) => (
          <UserInformationWrapper
            className={userDetailsStyles.user__details_main_content}
            heading={index === 0 ? "Guarantors" : ""}
            key={index + guarantor.name}
          >
            <UserInformationList field=" Name" value={guarantor.name} />
            <UserInformationList
              field=" Phone Number"
              value={guarantor.phone}
              key={index + guarantor.name}
            />
            <UserInformationList
              field="Email Address"
              value={guarantor.email}
              key={index + guarantor.name}
            />
            <UserInformationList
              field="Relationship"
              value={guarantor.relationship}
              key={index + guarantor.name}
            />
          </UserInformationWrapper>
        ))}
      </section>
    </div>
  );
};

export default UserDetails;
