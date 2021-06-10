import React, { useEffect, useState } from 'react'
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';
import { db } from '../firebase';

function Post({username,caption,imageUrl}) {
    // var screenWidthUrl = "https://picsum.photos/600/600";
    //https://i.picsum.photos/id/941/600/600.jpg?hmac=LW4Lu1_Csua3PmsqP-W3kxiLPlWssRnJBympRFYCWjg
    // change();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        db.collection("post").onSnapshot(snapshot =>{
                setPostData(snapshot.docs.map(doc => doc.data()))
        });
    }, [postData]);

    return (
        <div className="test">
        {
            postData.map(allData=>{
            return <div className="post">
                     <div className="post__header">
                         <Avatar className="post__avatar" alt="Nishant" src="https://picsum.photos/100/200" />
                         <h3 className="post__username">{allData.username}</h3> 
                     </div>
                     <div className="element">    
                         <img alt={allData.username} className="post__image" src={allData.imageUrl} height="585"/>
                     </div>
                     <h4 className="post__text">
                         <strong>UserName</strong>  {allData.caption}
                         </h4>
                 </div>
            })   
        }
            
        </div>
        
    )
}
export default Post