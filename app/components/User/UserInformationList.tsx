interface UserInformationListProps {
  field: string;
  value: string | number;
}

const UserInformationList = ({ field, value }: UserInformationListProps) => {
  return (
    <div>
      <h3> {field}</h3>
      <p>{value}</p>
    </div>
  );
};

export default UserInformationList;
