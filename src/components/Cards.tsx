import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div
      style={{
        background: "white",
        padding: "18px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h3>{title}</h3>

      {children}
    </div>
  );
};

export default Card;