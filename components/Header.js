import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avtar from "./Avtar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0  bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex border flex-1 border-gray- items-center px-6 py-3 ml-10 mr-5 max-w-3xl rounded-full shadow-lg">
          <input
            className=" flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <XIcon
            className="sm:mr-3 h-7 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 " />
          <SearchIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500  " />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avtar
          className="ml-auto"
          url="data:image/jpeg;base64,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"
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
