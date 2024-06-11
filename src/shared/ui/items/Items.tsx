import { ReactElement } from "react";

enum Direction {
  horizontal = "horizontal",
  vertical = "vertical",
}

type ItemsProps = {
  children: ReactElement[];
  className?: string;
  direction?: Direction;
};

const Items = ({
  children,
  direction = Direction.horizontal,
  className = "",
}: ItemsProps) => {
  console.log(children[1]);
  return <li className={"items " + className}></li>;
};

export default Items;
