import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-[url(https://i.ibb.co/d0mkQC5R/3.png)] bg-no-repeat bg-center h-[800px] text-white
    flex justify-center items-center"
    >
      <div className=" md:ml-70">
        <h1 className="text-4xl mb-4">Would you like a Cup of Delicious Coffee?</h1>
        <p className="text-sm">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn bg-[#E3B577] btn-soft text-xl mt-5 hover:bg-transparent hover:text-white">Learn more</button>
      </div>
    </div>
  );
};

export default Banner;
