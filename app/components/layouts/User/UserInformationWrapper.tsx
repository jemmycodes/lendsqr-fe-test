import userDetailStyles from "@/app/dashboard/users/[slug]/user-details.module.scss";

interface UserInformationWrapperProps extends ChildrenProps {
  className: string;
  heading: string;
}

const UserInformationWrapper = ({
  children,
  heading,
}: UserInformationWrapperProps) => {
  return (
    <div className={userDetailStyles.user__info}>
      <h2>{heading}</h2>
      <section>{children}</section>
    </div>
  );
};

export default UserInformationWrapper;
