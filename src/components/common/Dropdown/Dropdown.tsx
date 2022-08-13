import React from "react";
import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";

import classes from "./Dropdown.module.css";

type IsMulti = false;

interface Props<T> {
  data: T[];
  label?: string;
  value: SingleValue<T>;
  placeholder?: string;
  isSearchable?: boolean;
  onChange?: (newValue: SingleValue<T>) => void;
}

export const Dropdown = <T extends object>({
  data,
  label,
  placeholder,
  value,
  isSearchable,
  onChange,
}: Props<T>) => {

  const customStyles = (): StylesConfig<T, IsMulti, GroupBase<T>> => ({
    singleValue: (provided) => ({
      ...provided,
      fontSize: "16px",
      position: "absolute",
      paddingLeft: "16px",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "16px",
      position: "absolute",
      paddingLeft: "16px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "42px",
    }),
    container: (provided) => ({
      ...provided,
      height: "42px",
      width: "100%",
    }),
    control: (provided) => ({
      ...provided,
      minHeight: "42px",
      height: "42px",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "42px",
    }),

    input: () => ({
      fontSize: "16px",
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "14px",
      padding: "16px",
    }),
    menuList: (provided) => ({
      ...provided,
      width: "100%",
      padding: 0,
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "-ms-overflow-style": "none",
      scrollbarWidth: "none",
    }),
  });

  return (
    <div className={classes.Container}>
      {label && <p className={classes.Label}>{label}</p>}
      <Select
        styles={customStyles()}
        options={data}
        placeholder={placeholder}
        isSearchable={isSearchable}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
