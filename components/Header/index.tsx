"use client";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <MainNav />
      </div>
    </header>
  );
};

export default Header;

