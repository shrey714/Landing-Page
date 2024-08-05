import React from "react";
import WordRotate from "../magicUiComponents/WordRotate";

const Header = () => {
  return (
    <div className="fixed top-0 navbar p-0 min-h-6 h-6 bg-gray-800 justify-center overflow-hidden z-40">
      <div className="navbar-center">
        <WordRotate
          words={[
            "Streamline Your Healthcare Management",
            "Efficient Patient Data Organization",
            "Empower Your Medical Practice with DardiBook",
          ]}
          className="text-xs font-normal text-white"
        />
      </div>
    </div>
  );
};

export default Header;
