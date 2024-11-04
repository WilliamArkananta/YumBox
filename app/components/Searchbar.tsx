import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function Searchbar() {
  return (
    <div className="bg-background-primary items-center rounded-lg flex-1 hidden sm:flex">
      <div className="Icon p-2 justify-center">
        <img src="/icons/search.svg" alt="" />
      </div>
      <div className="flex p-2 items-center flex-1 self-stretch">
        <h4
          className={`text-sm text-content-primary flex-1 truncate ${nunito.className}`}
        >
          What do you need today?
        </h4>
      </div>
    </div>
  );
}

export default Searchbar;
