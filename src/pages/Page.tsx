import { ReactElement } from "react";
import "./Page.css";

export type PageProps = {
  children: ReactElement;
  className?: string;
};

const Page = ({ children, className = "" }: PageProps) => {
  return <div className={`page ${className}`}>{children}</div>;
};

export default Page;
