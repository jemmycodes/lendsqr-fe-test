import UserCard from "@/app/components/User/UserCard";
import { userCard } from "@/public/constants/constants";
import Error from "@/app/components/layouts/Error/Error";
import userStyles from "@/app/dashboard/users/Users.module.scss";
import UserDetailsTable from "@/app/components/User/UserDetailsTable";

const Page = async () => {
  const res = await fetch(
    "https://api.json-generator.com/templates/YJttvDb2afsu/data",
    {
      headers: {
        Authorization: `Bearer 67m1n4y8vff0if4jlleh9jj60qff0my3vsi1uhwo`,
      },
    },
  );

  const data = await res.json();

  const users = data?.slice(0, 5);

  return (
    <div>
      <section className={`${userStyles.users__container} hide-scrollbar`}>
        <h1>Users</h1>
        <div
          className={`${userStyles.users__card_container}  custom-scrollbar`}
        >
          {userCard.map(({ icon, text, count }, index) => (
            <UserCard
              icon={icon}
              text={text}
              count={count}
              key={index + text}
            />
          ))}
        </div>

        {!res.ok || !data ? (
          <Error
            heading="Oops, can't get our servers right now"
            text="Check your internet connection or try again later. Contact our
              support team if this issue persists"
          />
        ) : (
          <UserDetailsTable users={users} />
        )}
      </section>
    </div>
  );
};

export default Page;
