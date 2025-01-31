import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TextBox = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default TextBox;
