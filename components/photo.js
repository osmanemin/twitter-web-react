import React from "react";
import style from './photo.module.css';

const Photo = ({src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png", alt}) => {
    return (
        <div className={style.photo}>
            <img className={style.img} src={src} alt={alt}/>
        </div>

    )
}
export default Photo;