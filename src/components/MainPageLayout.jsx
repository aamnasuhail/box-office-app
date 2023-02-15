import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
const MainPageLayout = ({ children }) => {
  return (
    <>
      <header>
        <Title
          title="Box Office"
          subtitle={"Are you looking for a movie or an actor?"}
        />
        <Navbar />
      </header>
      {children}
    </>
  );
};

export default MainPageLayout;
