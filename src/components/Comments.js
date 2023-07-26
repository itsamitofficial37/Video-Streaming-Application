import React from 'react';
import {FaUserCircle} from "react-icons/fa";

const commentsData = [
    {
        name : "Amit singh",
        text : "There are many variations of passages of Lorem Ipsum available",
        replies : [
            {
                name : "Amit singh",
                text : "There are many variations of passages of Lorem Ipsum available",
                replies : [
                    {
                        name : "Amit singh",
                        text : "There are many variations of passages of Lorem Ipsum available",
                        replies : [
                            {
                                name : "Amit singh",
                                text : "There are many variations of passages of Lorem Ipsum available",
                                replies : [
                                    
                                ]
                        
                            }
                        ]
                
                    }
                ]
        
            },
            {
                name : "Amit singh",
                text : "There are many variations of passages of Lorem Ipsum available",
                replies : [
                    
                ]
        
            },  {
                name : "Amit singh",
                text : "There are many variations of passages of Lorem Ipsum available",
                replies : [
                    {
                        name : "Amit singh",
                        text : "There are many variations of passages of Lorem Ipsum available",
                        replies : [
                            {
                                name : "Amit singh",
                                text : "There are many variations of passages of Lorem Ipsum available",
                                replies : [
                                    
                                ]
                        
                            }
                        ]
                
                    }
                ]
        
            }
        ]

    },
    {
        name : "Upender",
        text : "There are many variations of passages of Lorem Ipsum available",
        replies : [
           
        ]

    },
    {
        name : "Vipin",
        text : "There are many variations of passages of Lorem Ipsum available",
        replies : [
            
        ]

    },
    {
        name : "Prince",
        text : "There are many variations of passages of Lorem Ipsum available",
        replies : [
           
        ]

    }
]

const Comment = ({data})=> {
    const {name,text,replies} = data
    return (
        <div className='flex gap-2 shadow-sm bg-gray-100 p-2 rounded-lg'>
            <FaUserCircle  className=' text-5xl text-green-700'/>
            <div>
            <h1 className='font-bold'>{name}</h1>
            <p>{text}</p>
            </div>
           
        </div>

    );
}

const CommentsList = ({comments})=> {
    return comments.map((comments,index )=> (
        <div key = {index} >
            <Comment data={comments}/>
            <div className='pl-8 ml-5 border border-l-black'>
            {/* <Comment key = {index} data={comments}/>
            <Comment key = {index} data={comments}/>
            <Comment key = {index} data={comments}/> */}
            <CommentsList comments={comments.replies}/>
            </div>
        </div>
        
    ))
}

const Comments = () => {
  return (
    <div className='m-5 p-2 '>
    <h1 className='text-2xl font-bold '>Comments</h1>
    <CommentsList comments={commentsData} />
    </div>
  )
}

export default Comments