import React, { useEffect, useState } from 'react'
import { Youtube_Video_Api } from '../constant';
import VideoCard from './VideoCard';
import {Link} from "react-router-dom"

const VideoContainer = () => {

  const [videos , setVideos] = useState([]);

  useEffect(()=> {
    getVideos();
  },[]);


  const getVideos = async ()=> {
     const data = await fetch(Youtube_Video_Api);

     const json = await data.json();
    //  console.log(json.items);
     setVideos(json.items);
  };

  return (
    <div className=''>
    <div className='flex flex-wrap'>
     {videos.map((video) => (
     <Link key={video.id} to =  {"/watch?v=" + video.id }>
      <VideoCard  info={video}/> </Link>))}
    </div>
    </div>
  );
};

export default VideoContainer;