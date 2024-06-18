"use client";

import { Suspense } from "react";
import { IoFilter } from "react-icons/io5";
import useFilter from "@/app/hooks/useFilter";
import Filter from "@/app/components/ui/filter/filter";
import UserDetails from "@/app/components/User/UserDetails";
import { useRouter, useSearchParams } from "next/navigation";
import userStyles from "@/app/dashboard/users/Users.module.scss";
import Pagination from "@/app/components/ui/Pagination/pagination";
import usePagination from "@/app/hooks/usePagination";

const UserDetailsTable = ({ users }: { users: UserDetailsProps[] }) => {
  const { filteredUsers, handleShowFilter, showFilter, companies } =
    useFilter(users);
  const { handleOnPrevious, handleOnNext, end, start } = usePagination(
    filteredUsers.length,
  );

  if (!filteredUsers.length) {
    return (
      <div className={`${userStyles.users__table_container} hide-scrollbar`}>
        <h2>No users for given filter</h2>
      </div>
    );
  }

  return (
    <Suspense>
      <div className={`${userStyles.users__table_container} hide-scrollbar`}>
        {showFilter && (
          <Filter handleShowFilter={handleShowFilter} companies={companies} />
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
            {filteredUsers.slice(start, end).map((user: UserDetailsProps) => (
              <UserDetails key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        dataSize={filteredUsers.length}
        currentDetail={
          end > filteredUsers.length ? filteredUsers.length : end + 1
        }
        onHandleNext={handleOnNext}
        onHandlePrevious={handleOnPrevious}
      />
    </Suspense>
  );
};

export default UserDetailsTable;
