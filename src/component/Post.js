import React from 'react'
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';

function Post({username,caption,imageUrl}) {
    var screenWidthUrl = "https://picsum.photos/600/600";
    
    // change();
    return (
        <div className="post">
            <div className="post__header">
             <Avatar className="post__avatar" alt="Nishant" src="https://picsum.photos/100/200" />
            <h3 className="post__username">{username}</h3>
                
            </div>
            <img alt="" className="post__image" src={screenWidthUrl} height="585"/>

            <h4 className="post__text">
                <strong>UserName</strong>  {caption}
                </h4>
        </div>
    )
    function change() {
         return new Promise(function(resolve, reject) {
   
             // Setting 2000 ms time
             setTimeout(resolve, 2000);
         }).then(function() {
             screenWidthUrl = "https://picsum.photos/"+window.screen.width+"/500";
             console.log("Wrapped setTimeout after 2000ms");
         });
     }
}
export default Post