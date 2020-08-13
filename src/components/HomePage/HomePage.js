import React from "react";
import { Header } from "../Header/Header";
import { JobsList } from "../JobsList/JobsList";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <JobsList />
      </main>
    </div>
  );
};
