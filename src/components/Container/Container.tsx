import css from "./Container.module.css";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className={css.container}>{children}</div>
    </>
  );
};
export default Container;
