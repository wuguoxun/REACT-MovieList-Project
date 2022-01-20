import React, { useEffect } from "react"
import { useState } from "react"
import "./likeBtn.css";

function LikeBtn(props) {
    const [likeText, setLikeText] = useState("Like")
    const [likeStatus,setLikeStatus] = useState(false)


    useEffect(() => {
        if (likeStatus === false) {
            setLikeText("Like")
        } else {
            setLikeText("Liked")
        }
    }, [likeStatus])

    

    const handleClick = (id) => {
        if(likeStatus===false){
            props.handleLike(props.movie)
            setLikeStatus(!likeStatus)
        }else{
            props.handleUnlike(props.movie)
            setLikeStatus(!likeStatus)
        } 
    }
  



    return (
        <div>
            <button className="LikeBtn" onClick={handleClick}>{likeText}</button>
        </div>
    )
}

export default LikeBtn