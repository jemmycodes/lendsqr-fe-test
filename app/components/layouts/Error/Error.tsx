import Image from "next/image";

interface ErrorProps {
  heading: string;
  text: string;
}

const Error = ({ heading, text }: ErrorProps) => {
  return (
    <div className="error_container">
      <Image src="/images/error-404.svg" alt="error" width={200} height={100} />
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Error;
