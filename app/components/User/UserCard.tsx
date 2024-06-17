import Image from "next/image";
import userCardStyles from "@/app/dashboard/users/Users.module.scss";

interface UserCardProps {
  icon: string;
  text: string;
  count: string;
}

const UserCard = ({ icon, text, count }: UserCardProps) => {
  return (
    <div className={userCardStyles.users__card}>
      <Image src={icon} alt={text} width={40} height={40} />
      <p>{text}</p>
      <h3>{count}</h3>
    </div>
  );
};

export default UserCard;
