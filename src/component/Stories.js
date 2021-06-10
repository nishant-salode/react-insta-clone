import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Stories.css';
import { db,auth,storage } from "../firebase";

function Stories({username,imageUrl}) {
  
 const [storyData, setStoryData] = useState([]);

useEffect(() => {
    /**
     * collection name - stories
     * onSnapshot is a crazy fun() which gets called itself when database is updated ;)
     **/
    // db.collection('stories').onSnapshot( snapshot =>{
    //         setStoryData(snapshot.docs.map(doc => doc.data()))
    // });
    db.collection('stories').onSnapshot( snapshot =>{
        setStoryData(snapshot.docs.map(doc => 
            (
                {
                    id: doc.id,
                    allData: doc.data()
                }
            )
        ))
    });

    // },[])   <----- this will run it only once 
    // runs each time storyData gets changed
}, [storyData])

    return (
        <div className="stories__strip">
            {
             storyData.map(({id,allData}) =>{
                return <div key={id} className="stories__profile">
                <Avatar alt="Cindy Baker" src={allData.imageUrl} />
                <div className="stories__username">
                    {allData.username}
                </div>
            </div>
            })
            }
            {/* <div className="stories__profile">
                <Avatar alt="Remy Sharp" src={imageUrl} />
                <div className="stories__username">
                    {username}
                </div>
            </div>             */}
        </div>
    )
}

export default Stories
