import userDetailsStyles from "@/app/dashboard/users/[slug]/user-details.module.scss";
import UserInformationWrapper from "@/app/components/layouts/User/UserInformationWrapper";
import UserInformationList from "@/app/components/User/UserInformationList";

const UserInformation = ({ user }: { user: UserDetailsProps }) => {
  return (
    <>
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
        <UserInformationList field="Sector of Employment" value={user.sector} />
        <UserInformationList
          field="Duration of Employment"
          value={user.duration + `${user.duration > 1 ? "years" : "year"}`}
        />
        <UserInformationList field="Office Email " value={user.office_email} />
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
    </>
  );
};

export default UserInformation;
