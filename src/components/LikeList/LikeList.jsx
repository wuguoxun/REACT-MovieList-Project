import React  from "react";

function LikeList(props){

    return(
        <div>
        {props.likeList.map((item,index)=>(
            <div key={index}>
            <p>{item.title}</p>
            </div>
        ))}
        </div>
    )
}

export default LikeList