import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './Stories.css';

function Stories({username,imageUrl}) {
 const [storyData, setStoryData] = useState([
    {
        username: "S.nishant",
        imageUrl: "https://images.unsplash.com/photo-1622023346602-039dab763651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        username: "Tris.Hord12",
        imageUrl: "https://images.unsplash.com/photo-1622181206030-2cf9d87540e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        username: "dhappy.Lerry",
        imageUrl: "https://images.unsplash.com/photo-1622200718646-ab5a7e523c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        username: "Cindy Baker",
        imageUrl: "https://images.unsplash.com/photo-1622165359619-082378c5f2c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        username: "brun_12O",
        imageUrl: "https://images.unsplash.com/photo-1620486741205-5c66ff073609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        username: "kingLou.62",
        imageUrl: "https://images.unsplash.com/photo-1622137276920-2351359e3450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        username: "tofu_king",
        imageUrl: "https://images.unsplash.com/photo-1622198779228-672a0a4e7e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
    ]);
    return (
        <div className="stories__strip">
            {
             storyData.map(item =>{
                return <div className="stories__profile">
                <Avatar alt="Cindy Baker" src={item.imageUrl} />
                <div className="stories__username">
                    {item.username}
                </div>
            </div>
            })
            }
            <div className="stories__profile">
                <Avatar alt="Remy Sharp" src={imageUrl} />
                <div className="stories__username">
                    {username}
                </div>
            </div>            
        </div>
    )
}

export default Stories
