import React from "react";

const NavBar = () => {
  // https://i.ibb.co/DHkGqNcB/logo1.png
  return (
    <div className="bg-[url(https://i.ibb.co/cX2Bjmtr/15.jpg)] bg-center bg-no-repeat py-4">
      <div className="flex justify-center items-center">
        <div
          style={{
            animation: "updown 2s ease-in-out infinite",
          }}
        >
          <img
            src="https://i.ibb.co/DHkGqNcB/logo1.png"
            alt=""
            className="h-20 w-16"
          />
          <style>
            {`
                        @keyframes updown {
                            0%, 100% {
                            transform: translateY(0);
                            }
                            50% {
                transform: translateY(-10px);
                 }
                }
            `}
          </style>
        </div>

        <h1
          className="text-4xl ml-2 text-white hover:cursor-pointer 
        delay-1000 transition-transform hover:text-[#5f5252]"
        >
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
