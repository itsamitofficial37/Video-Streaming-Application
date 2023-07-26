import React from "react";
import { useSelector } from "react-redux";
import { AiFillHome, AiFillYoutube ,  AiFillSetting } from "react-icons/ai";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdOutlineVideoLibrary,
  MdWatchLater,
  MdMusicNote,
  MdMovie,
  MdLiveTv,
  MdGames,
  MdReport,
  MdFeedback
} from "react-icons/md";
import {
  BiLike,
  BiTrendingUp,
  BiShoppingBag,
  BiNews,
  BiSolidBrushAlt,
  BiHelpCircle 
} from "react-icons/bi";
import { BsLightbulbFill, BsTrophy, } from "react-icons/bs";
import {SiYoutubestudio , SiYoutubemusic} from "react-icons/si"
import {TbBrandYoutubeKids} from "react-icons/tb";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" w-72 p-5 shadow-lg h-1/3 sticky">
      <ul className="">
        <li className="flex items-center ">
          <AiFillHome className="m-2 text-2xl" /> Home{" "}
        </li>
        <li className="flex items-center">
          <AiFillYoutube className="m-2 text-2xl" /> Shorts
        </li>
        <li className="flex items-center">
          <MdSubscriptions className="m-2 text-2xl" />
          Subscription
        </li>
      </ul>

      <ul className="py-5">
        <li className="flex items-center ">
          <MdVideoLibrary className="m-2 text-2xl" />
          Library
        </li>
        <li className="flex items-center ">
          {" "}
          <MdHistory className="m-2 text-2xl" /> History
        </li>
        <li className="flex items-center ">
          {" "}
          <MdOutlineVideoLibrary className="m-2 text-2xl" />
          Your videos
        </li>
        <li className="flex items-center ">
          {" "}
          <MdWatchLater className="m-2 text-2xl" />
          Watch later
        </li>
        <li className="flex items-center ">
          <BiLike className="m-2 text-2xl" /> Liked Videos
        </li>
      </ul>

      <ul className="py-5">
        <li className="flex items-center ">
          {" "}
          <BiTrendingUp className="m-2 text-2xl" /> Trending
        </li>
        <li className="flex items-center ">
          {" "}
          <BiShoppingBag className="m-2 text-2xl" /> Shopping
        </li>
        <li className="flex items-center ">
          {" "}
          <MdMusicNote className="m-2 text-2xl" /> Music
        </li>
        <li className="flex items-center ">
          {" "}
          <MdMovie className="m-2 text-2xl" /> Movies
        </li>
        <li className="flex items-center ">
          {" "}
          <MdLiveTv className="m-2 text-2xl" /> Live
        </li>
        <li className="flex items-center ">
          {" "}
          <MdGames className="m-2 text-2xl" />
          Gaming
        </li>
        <li className="flex items-center ">
          {" "}
          <BiNews className="m-2 text-2xl" /> News
        </li>
        <li className="flex items-center ">
          {" "}
          <BsTrophy className="m-2 text-2xl" />
          Sports
        </li>
        <li className="flex items-center ">
          {" "}
          <BsLightbulbFill className="m-2 text-2xl" />
          Learning
        </li>
        <li className="flex items-center ">
          {" "}
          <BiSolidBrushAlt className="m-2 text-2xl" />
          Fashion & Beauty
        </li>
      </ul>

      <h1 className="font-bold mb-5">More from YouTube</h1>
      <ul>
        <li className="flex items-center"> <AiFillYoutube  className="m-2 text-2xl text-red-600"/> YouTube Premium</li>
        <li className="flex items-center">  <SiYoutubestudio className="m-2 text-2xl text-red-600"/> YouTube Studio</li>
        <li  className="flex items-center"> <SiYoutubemusic className="m-2 text-2xl text-red-600"/>YouTube Music</li>
        <li  className="flex items-center"> <TbBrandYoutubeKids className="m-2 text-2xl text-red-600"/> YouTube Kids</li>
      </ul>

      <ul className="py-5">
        <li  className="flex items-center"> <AiFillSetting className="m-2 text-2xl"/> Settings</li>
        <li  className="flex items-center"> <MdReport className="m-2 text-2xl"/> Report history</li>
        <li className="flex items-center"> <BiHelpCircle  className="m-2 text-2xl"/>/ Help</li>
        <li className="flex items-center" > <MdFeedback className="m-2 text-2xl"/>Send feedback</li>
      </ul>

      <p className="py-3 font-semibold text-gray-600">
        AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
      </p>
      <p className="py-3 font-semibold text-gray-600">
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
      </p>
      <p>© 2023 Google LLC</p>
    </div>
  );
};

export default Sidebar;
