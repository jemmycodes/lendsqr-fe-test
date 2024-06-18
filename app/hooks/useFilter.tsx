import { useState } from "react";
import { useSearchParams } from "next/navigation";

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

  if (email || phone || username || status || company) {
    filteredUsers = users.filter((user: any) => {
      return (
        (phone && user.phone.toLowerCase().includes(phone)) ||
        (email && user.email.toLowerCase().includes(email)) ||
        (username && user.username.toLowerCase().includes(username)) ||
        (status && user.status.toLowerCase() === status) ||
        (company && user.company.toLowerCase() === company)
      );
    });
  } else {
    filteredUsers = users;
  }

  return { showFilter, handleShowFilter, companies, filteredUsers };
};

export default useFilter;
