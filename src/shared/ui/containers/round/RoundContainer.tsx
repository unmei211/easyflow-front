import { ContainerProps } from "../ContainerProps.ts";
import "./RoundContainer.css"

const RoundContainer = ({ children, className = "" }: ContainerProps) => {
  return <div className={`round-container ${className}`}>{children}</div>;
};

export default RoundContainer;
