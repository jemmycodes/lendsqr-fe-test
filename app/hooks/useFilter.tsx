import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatDate } from "@/app/functions";

const useFilter = (users: UserDetailsProps[]) => {
  const [showFilter, setShowFilter] = useState(false);
  const searchParams = useSearchParams();

  const handleShowFilter = () => {
    setShowFilter((prevState) => !prevState);
  };

  const companies = users.map((user) => user.company);

  let filteredUsers;

  const email = searchParams.get("email")?.toLowerCase();
  const phone = searchParams.get("phone")?.toLowerCase();
  const username = searchParams.get("username")?.toLowerCase();
  const company = searchParams.get("company")?.toLowerCase();
  const status = searchParams.get("status")?.toLowerCase();
  const date_joined = searchParams.get("date_joined")?.toLowerCase();

  const formattedDate = date_joined && formatDate(date_joined);
  const date = formattedDate?.split(",")[0];

  if (email || phone || username || status || company || date_joined) {
    filteredUsers = users.filter((user: UserDetailsProps) => {
      return (
        (phone && user.phone.toLowerCase().includes(phone)) ||
        (email && user.email.toLowerCase().includes(email)) ||
        (username && user.username.toLowerCase().includes(username)) ||
        (status && user.status.toLowerCase() === status) ||
        (company && user.company.toLowerCase() === company) ||
        (date_joined && formatDate(user.date_joined).includes(date!))
      );
    });
  } else {
    filteredUsers = users;
  }

  return { showFilter, handleShowFilter, companies, filteredUsers };
};

export default useFilter;
