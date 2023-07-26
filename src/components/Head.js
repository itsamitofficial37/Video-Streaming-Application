import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { youtube_search_Api } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import {FaUserCircle} from "react-icons/fa";
import {GoSearch} from "react-icons/go"
import { cacheResults } from "../utils/searchSlice";
import {BiMicrophone, BiBell ,BiSolidVideoPlus} from "react-icons/bi"


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
 

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(youtube_search_Api + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

    return (
      <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
          <img
             onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          />
          <a href="/">
            <img
              className="h-8 mx-2"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />
          </a>
        </div>
        <div className="col-span-10 px-10">
          <div>
            <input
              className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="border border-gray-400 px-5 py-[0.6rem] relative top-1 rounded-r-full bg-gray-100">
            <GoSearch className="text-xl "/>
            </button>
          </div>

          <div className="absolute bg-white py-2 px-2 w-[27rem]  shadow-lg rounded-lg border border-gray-100">
            <ul >
              {suggestions.map((s)=> ( <li key={s} className="py-2 px-3 shadow-sm flex gap-5 font-semibold  hover:bg-gray-100"> <GoSearch  className="relative  top-1"/> {s}</li>
              ))}
             
            </ul>
          </div>
        </div>
        <div className="  ">
          <BiMicrophone className="text-3xl items-center  relative right-[20rem] top-3"/>
        </div>
        <div>
        <BiSolidVideoPlus className="text-3xl items-center relative top-3 "/>
        </div>
        <div>
        <BiBell className="text-3xl items-center  relative  top-3"/>
        </div>
       
        <div className="col-span-1">
          <h1 className="text-3xl items-center relative  top-3"><FaUserCircle /></h1>
        </div>
      </div>
    );
  
};
export default Head;
