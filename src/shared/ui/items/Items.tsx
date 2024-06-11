import { ReactNode } from "react";
import { Direction } from "../direction/Direction.tsx";
import "./Items.css";
import "../direction/Direction.css";

type ItemsProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
};

const Items = ({
  children,
  direction = Direction.horizontal,
  className = "",
}: ItemsProps) => {
  return <div className={`items ${direction} ${className}`}>{children}</div>;
};

export default Items;

export { Direction };
