import React from "react";

function LikeList(props) {
    const img_url = "https://image.tmdb.org/t/p/w500"


    return (
        <div className="likeListDiv">
            {props.likeList.map((item, index) => (
                <div key={index} className="posterDiv">
                    <img className="posterImage" src={img_url + item.poster_path} alt="poster_image" />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default LikeList