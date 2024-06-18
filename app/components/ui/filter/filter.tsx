"use client";

import filterStyles from "./filter.module.scss";
import { filterInputData } from "@/public/constants/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

interface FilterSelectProps {
  label: string;
  options: string[];
  name: string;
}

const FilterSelect = ({ label, options, name }: FilterSelectProps) => {
  return (
    <div className={filterStyles.input_container}>
      <label htmlFor={name}>{label}</label>
      <select name={name}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

interface FilterInputProps {
  name: string;
  type: string;
  label: string;
}

const FilterInput = ({ name, type, label }: FilterInputProps) => {
  return (
    <div className={filterStyles.input_container}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={label} />
    </div>
  );
};

const Filter = ({
  handleShowFilter,
  companies,
}: {
  handleShowFilter: () => void;
  companies: string[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (e: FormEvent) => {
    const params = new URLSearchParams(searchParams.toString());
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    formData.forEach((value, key) => {
      if (value && value !== "All") {
        params.set(key, value as string);
      } else {
        router.push("/dashboard/users");
      }
    });
    console.log(params.toString());
    router.push("/dashboard/users?" + params.toString());
    handleShowFilter();
  };

  const handleReset = () => {
    router.push("/dashboard/users");

    handleShowFilter();
  };

  return (
    <section className={`${filterStyles.filter} custom-scrollbar `}>
      <form onSubmit={handleFilter}>
        <FilterSelect
          label="Organization"
          name="company"
          options={["All", ...companies]}
        />
        {filterInputData.map((input, index) => (
          <FilterInput key={index} {...input} />
        ))}
        <FilterSelect
          label="Status"
          name="status"
          options={["All", "Active", "Pending", "Blacklisted", "Inactive"]}
        />
        <div className={filterStyles.filter__cta}>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Filter</button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
