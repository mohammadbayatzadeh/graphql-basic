import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Lauout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
