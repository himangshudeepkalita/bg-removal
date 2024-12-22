import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* Left Side */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br /> <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">background</span> from <br /> images for free.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sed
          odit possimus <br /> sequi in repellat dignissimos sunt optio.
          Architecto iste neque at.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label htmlFor="upload1">
            <img src={assets.upload_btn_icon} alt="" />
            <p>Upload your image</p>
          </label>
        </div>
      </div>
      {/* Right Side */}
      <div></div>
    </div>
  );
};

export default Header;