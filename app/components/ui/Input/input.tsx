import inputStyles from "@/app/components/ui/Input/input.module.scss";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  error: string | null;
  handleEmail: (e: any) => void;
  value: string;
}

const Input = ({
  placeholder,
  type,
  name,
  error,
  handleEmail,
  value,
}: InputProps) => {
  return (
    <div className={inputStyles.login__form_input}>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={handleEmail}
      />
      {error && <p className={inputStyles.login__error_message}>{error}</p>}
    </div>
  );
};

export default Input;
