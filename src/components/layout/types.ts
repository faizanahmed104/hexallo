import { ReactNode } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type DropdownOption = {
  label: string;
  value: string;
  icon?: ReactNode;
};

export type HeaderDropdownProps = {
  label: string;
  options: DropdownOption[];
};