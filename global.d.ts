import { ReactNode } from "react";

declare global {
  interface ChildrenProps {
    children: ReactNode;
  }

  interface UserDetailsProps {
    id: string;
    username: string;
    BVN: string;
    name: string;
    email: string;
    phone: string;
    date_joined: string;
    status: string;
    monthly_income: string;
    repayment: string;
    company: string;
    facebook: string;
    twitter: string;
    instagram: string;
    education: string;
    children: string | number;
    employment: string;
    guarantors: {
      name: string;
      email: string;
      phone: string;
      relationship: string;
    }[];
    marital_status: string;
    office_email: string;
    residence: string;
    duration: number;
    sector: string;
    gender: string;
  }
}
