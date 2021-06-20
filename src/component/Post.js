import React, { useEffect, useState } from 'react'
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';
import { db } from '../firebase';
import heart from '../static/icons/heart.png';
import likeHeart from '../static/icons/likeheart.png';

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
            postData.map((allData,index)=>{
            return <div className="post">
                     <div className="post__header">
                         <Avatar className="post__avatar" alt="Nishant" src="https://picsum.photos/100/200" />
                         <h3 className="post__username">
                             {allData.username}
                         </h3> 
                         <span className="float-right">...</span>
                     </div>
                     <div className="post__element">
                         <img alt={allData.username} className="post__image" src={allData.imageUrl} height="580"/>
                     </div>
                     <div className="post__text">
                         <strong>
                            {allData.caption}
                         </strong>  
                     </div>
                    <div className="post__footer">
                    <img src={((index%2) > 0) ? heart : likeHeart} alt="notification" height="20px" />    
                    </div>
                 </div>
            })   
        }
            
        </div>
        
    )
}
export default Post