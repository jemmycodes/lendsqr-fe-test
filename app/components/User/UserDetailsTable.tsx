"use client";

import UserDetails from "@/app/components/User/UserDetails";
import userStyles from "@/app/dashboard/users/Users.module.scss";
import Filter from "@/app/components/ui/filter/filter";
import { IoFilter } from "react-icons/io5";
import useFilter from "@/app/hooks/useFilter";
import { Suspense } from "react";

const UserDetailsTable = ({ users }: { users: UserDetailsProps[] }) => {
  const { filteredUsers, handleShowFilter, showFilter, companies } =
    useFilter(users);

  if (!filteredUsers.length) {
    return (
      <div className={`${userStyles.users__table_container} hide-scrollbar`}>
        <h2>No users for given filter</h2>
      </div>
    );
  }

  console.log(filteredUsers);
  return (
    <Suspense>
      <div className={`${userStyles.users__table_container} hide-scrollbar`}>
        {showFilter && (
          <Suspense>
            <Filter handleShowFilter={handleShowFilter} companies={companies} />
          </Suspense>
        )}
        <table>
          <thead>
            <tr>
              {[
                "Organization",
                "Username",
                "Email",
                "Phone Number",
                "Date Joined",
                "Status",
              ].map((heading, index) => (
                <th key={index}>
                  {heading}
                  <IoFilter
                    style={{
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    size={16}
                    onClick={handleShowFilter}
                  />
                </th>
              ))}

              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user: UserDetailsProps) => (
              <UserDetails key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </Suspense>
  );
};

export default UserDetailsTable;
