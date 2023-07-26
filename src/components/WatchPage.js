import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import {google_api_key , Youtube_Video_Api} from "../constant"

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [VideoDetailsById, SetVideoDetailsById] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);
  
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {

    getVideoDetailsById();
    getRecomendedVideo();
    dispatch(closeMenu());
  }, []);

  const getVideoDetailsById = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${searchParams.get(
        "v"
      )}&key=${google_api_key}`
    );
    const jsonOne = await response.json();

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${jsonOne.items[0].snippet.channelId}&key=${google_api_key}`
    );
    const jsonTwo = await res.json();

    SetVideoDetailsById(jsonOne.items[0].snippet);
    setChannelDetails(jsonTwo.items[0].snippet);
  };

  const getRecomendedVideo = async () => {
    const data = await fetch(Youtube_Video_Api);
    const json = await data.json();
    setVideoList(json.items);
  };

  return(
    <div className="grid grid-flow-col">
      <div className="col-span-11 m-2">
        <div className=" m-5">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="py-3 font-semibold text-xl">{VideoDetailsById.title}</h1>
        <div className="lg:flex md:flex-wrap sm:flex-wrap">
          <div className="flex">
            <img
              className="h-10 my-8 rounded-full"
              src={channelDetails.thumbnails?.high.url}
            />
            <h1 className="py-10 px-2 font-semibold text-xl">
              {VideoDetailsById.channelTitle}
            </h1>
            <img
              className="h-28 cursor-pointer"
              src="https://cdn.pixabay.com/photo/2021/03/18/10/21/subscribe-6104536_1280.png"
            ></img>
          </div>
          <div className=" h-11 my-8 mx-12 flex bg-gray-200 rounded-3xl">
            <FiThumbsUp className="mx-4 cursor-pointer my-3" />
            <FiThumbsDown className="mx-4 cursor-pointer my-3" />
          </div>
          <div className=" h-11 my-8 bg-gray-200 flex rounded-3xl cursor-pointer">
            <TiArrowForwardOutline size={32} className="my-2 mx-2" />
            <h1 className="my-3 mx-2">Share</h1>
          </div>
        </div>
        <div className="shadow-lg h-auto rounded-lg p-2 hover:bg-gray-100 w-auto">
          <p className="font-medium whitespace-pre-line">
            {VideoDetailsById.description}
          </p>
        </div>
        <Comments/>
      </div>
      <div className="col-span-1 pl-4">
        <LiveChat />
        {videoList.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <VideoCard info={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};


export default WatchPage;
