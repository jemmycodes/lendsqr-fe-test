"use client";

import { useState } from "react";
import { formatDate } from "@/app/functions";
import { BsThreeDotsVertical } from "react-icons/bs";
import userStyles from "@/app/dashboard/users/Users.module.scss";
import Popover from "@/app/components/ui/popover/popover";

const UserDetails = ({ user }: { user: UserDetailsProps }) => {
  const formattedDate = formatDate(user.date_joined);
  const [showPopover, setShowPopover] = useState(false);
  return (
    <tr>
      <td>{user.company}</td>
      <td>{user.company}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{formattedDate}</td>
      <td>
        <p className={userStyles[user.status.toLowerCase()]}>{user.status}</p>
      </td>
      <td style={{ position: "relative" }}>
        <BsThreeDotsVertical
          style={{ cursor: "pointer" }}
          onClick={() => setShowPopover((prevState) => !prevState)}
        />
        {showPopover && <Popover id={user.id} userDetails={user} />}
      </td>
    </tr>
  );
};

export default UserDetails;
