
import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails , publishedAt} = snippet;

  return (
    <div className="p-2 m-2 w-80  flex flex-col gap-1 ">
      <img className="rounded-lg object-cover" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-semibold py-2">{title}</li>
        <li >{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        

      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
