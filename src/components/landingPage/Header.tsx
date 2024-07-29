import React from "react";
import WordRotate from "../magicUiComponents/WordRotate";

const Header = () => {
  return (
    <div className="fixed top-0 navbar p-0 min-h-6 h-6 bg-white justify-center overflow-hidden z-40">
      <div className="navbar-center">
        {/* <p className="text-base font-medium text-gray-800">DardiBook</p> */}
        <WordRotate
          words={["DardiBook1", "DardiBook2", "DardiBook3"]}
          className="text-sm font-medium text-gray-800"
        />
      </div>
    </div>
  );
};

export default Header;
