import { GlobeIcon } from "@heroicons/react/solid";
import React from "react";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] text-sm text-gray-500 divide-gray-300 bg-gray-100">
      <div className="px-8 py-3">
        <p>United Kingdom</p>
      </div>
      <div className=" grid grid-cols-1">
        <div className="flex md:col-span-2 lg:col-start-2 lg:col-span-1 justify-center items-center">
          <GlobeIcon className="h-5 mr-1 text-green-700" />
          Carbon neutral since 2007
        </div>
        <div className="flex md:justify-self-start justify-center space-x-8 whitespace-nowrap">
          <p>Advertising</p>
          <p>Business</p>
          <p>New Search work</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto whitespace-nowrap">
          <p>Previcy</p>
          <p>Term</p>
          <p>Setting</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
