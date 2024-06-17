import { useState } from "react";
import UserInformation from "@/app/components/User/UserInformation";
import UserInformationWrapper from "@/app/components/layouts/User/UserInformationWrapper";
import userDetailsStyles from "@/app/dashboard/users/[slug]/user-details.module.scss";

const useTabbedComponent = (
  user: UserDetailsProps | null,
  tabHeadings: string[],
) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
  };

  if (!user) {
    return { activeTab, handleTabChange, tabs: [] };
  }

  const tabs = [
    <UserInformation key={1} user={user} />,
    <UserInformationWrapper
      key={2}
      heading={tabHeadings[1]}
      className={userDetailsStyles.user__details_main_content}
    >
      <div></div>
    </UserInformationWrapper>,
    <UserInformationWrapper
      key={2}
      heading={tabHeadings[2]}
      className={userDetailsStyles.user__details_main_content}
    >
      <div></div>
    </UserInformationWrapper>,
    <UserInformationWrapper
      key={2}
      heading={tabHeadings[3]}
      className={userDetailsStyles.user__details_main_content}
    >
      <div></div>
    </UserInformationWrapper>,
    <UserInformationWrapper
      key={2}
      heading={tabHeadings[4]}
      className={userDetailsStyles.user__details_main_content}
    >
      <div></div>
    </UserInformationWrapper>,
    <UserInformationWrapper
      key={2}
      heading={tabHeadings[5]}
      className={userDetailsStyles.user__details_main_content}
    >
      <div></div>
    </UserInformationWrapper>,
  ];

  return { activeTab, handleTabChange, tabs };
};

export default useTabbedComponent;
