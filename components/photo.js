import React from "react";
import style from './photo.module.css';

const Photo = ({src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
               alt,
               size = 47}) => {
    return (
        <div className={style.photo}>
            <img className={style.img} src={src} alt={alt} style={{width: `${size}px`, height: `${size}px`}}/>
        </div>

    )
}
export default Photo;